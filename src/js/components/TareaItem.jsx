export default function TareaItem({
  tarea,
  index,
  estaEnHover,
  onMouseEnter,
  onMouseLeave,
  onEliminar,
}) {
  return (
    <li
      className="list-group-item d-flex mx-auto justify-content-between align-items-center"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Contenedor del texto de la tarea */}
      <div className="text-center fs-5 fw-bold">{tarea}</div>

      {/* Botón de eliminar que solo aparece cuando el mouse está sobre la tarea */}
      {estaEnHover && (
        <button
          onClick={onEliminar}
          className="btn btn-link text-danger p-0 m-2 border-0"
        >
          ✕
        </button>
      )}
    </li>
  );
}
