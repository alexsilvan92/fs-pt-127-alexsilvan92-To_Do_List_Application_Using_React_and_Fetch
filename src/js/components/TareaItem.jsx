import { useState } from "react";

export default function TareaItem({
  tarea,
  index,
  estaEnHover,
  onMouseEnter,
  onMouseLeave,
  onEditar,
  onEliminar,
}) {
  // Estado para controlar si está en modo edición
  const [modoEdicion, setModoEdicion] = useState(false);
  // Estado para el valor temporal mientras se edita
  const [textoTemporal, setTextoTemporal] = useState(tarea.label);

  // Función para guardar los cambios
  function guardarCambios() {
    // Solo actualizar si el texto cambió y no está vacío
    if (textoTemporal.trim() !== "" && textoTemporal !== tarea.label) {
      onEditar(tarea.id, {
        label: textoTemporal.trim(),
        is_done: tarea.is_done,
      });
    }
    setModoEdicion(false);
  }

  // Función para cancelar la edición
  function cancelarEdicion() {
    setTextoTemporal(tarea.label); // Restaurar el texto original
    setModoEdicion(false);
  }

  // Función para manejar Enter y Escape
  function manejarTecla(evento) {
    if (evento.key === "Enter") {
      guardarCambios();
    } else if (evento.key === "Escape") {
      cancelarEdicion();
    }
  }

  // Función para cambiar el estado de completado
  function toggleCompletado() {
    onEditar(tarea.id, {
      label: tarea.label,
      is_done: !tarea.is_done,
    });
  }

  return (
    <li
      className="list-group-item d-flex mx-auto justify-content-between align-items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Checkbox para marcar como completada */}
      <input
        type="checkbox"
        className="form-check-input me-3"
        checked={tarea.is_done}
        onChange={toggleCompletado}
      />

      {/* Contenedor del texto de la tarea */}
      {modoEdicion ? (
        // MODO EDICIÓN - Input para editar
        <input
          type="text"
          className="form-control flex-grow-1"
          value={textoTemporal}
          onChange={(evento) => setTextoTemporal(evento.target.value)}
          onKeyDown={manejarTecla}
          onBlur={guardarCambios} // Guardar al perder el foco
          autoFocus
        />
      ) : (
        // MODO NORMAL - Texto de la tarea
        <div className={`flex-grow-1 fs-5 fw-bold ${ tarea.is_done ? "text-decoration-line-through text-muted" : "" }`} >
          {tarea.label}
        </div>
      )}

      {/* Botón de editar que solo aparece cuando el mouse está sobre la tarea */}
      {estaEnHover && (
        <button onClick={() => setModoEdicion(true)} className="btn btn-link p-0 m-2 border-0">
          {modoEdicion ? "💾" : "✏"}
        </button>
      )}

      {/* Botón de eliminar que solo aparece cuando el mouse está sobre la tarea */}
      {estaEnHover && (
        <button
          onClick={onEliminar}
          className="btn btn-link text-danger p-0 m-2 border-0"
        >
          ❌
        </button>
      )}
    </li>
  );
}
