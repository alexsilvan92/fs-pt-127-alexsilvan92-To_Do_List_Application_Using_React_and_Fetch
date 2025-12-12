import { useState } from "react";

export default function ToDoList() {
  //-------- ESTADOS DE LAS TAREAS, INPUTS Y EL HOVER EN LA LISTA DE TAREAS -------
  // Estado que almacena el array de tareas
  const [tareas, setTareas] = useState([]);
  // Estado que controla el valor del input de nueva tarea
  const [inputValue, setInputValue] = useState("");
  // Estado que guarda el índice de la tarea sobre la que está el mouse (para mostrar el botón eliminar)
  const [tareaHover, setTareaHover] = useState(null);

  // Función que agrega una nueva tarea al array de tareas
  function añadirNuevaTarea() {
      // Agrega el valor del input al final del array de tareas
      setTareas((prev) => [...prev, inputValue]);
      // Limpia el input después de agregar la tarea
      setInputValue("");
    }

  // Función que elimina una tarea específica del array según su índice
  function eliminarTarea(index) {
    // Filtra el array manteniendo todas las tareas excepto la que coincide con el índice
    setTareas((prev) => prev.filter((_, i) => i !== index));
  }

  // Función que detecta cuando se presiona la tecla Enter para agregar una tarea
  function manejarTeclaPresionada(evento) {
    // Si la tecla presionada es Enter, ejecuta la función de añadir tarea
    if (evento.key === "Enter") {
      añadirNuevaTarea();
    }
  }

  //-------- RENDERIZADO -------
  return (
    <div className="container mt-5">
      {/* Título principal de la aplicación */}
      <h1 className="text-center mb-4 fs-1 fw-bold text-decoration-underline">Lista De Tareas</h1>

      {/* Tarjeta principal que contiene toda la aplicación */}
      <div className="card shadow">
        <div className="card-body p-0">

          {/* INPUT PARA NUEVA TAREA */}
          <div className="p-3 border-bottom">
            {/* Input controlado que captura el texto de la nueva tarea */}
            <input
              type="text"
              className="form-control border-0 text-center"
              placeholder="Describe la Nueva Tarea, y pulsa ⏎ (Enter)."
              // El value está vinculado al estado inputValue
              value={inputValue}
              // Actualiza el estado cada vez que el usuario escribe
              onChange={(evento) => setInputValue(evento.target.value)}
              // Detecta cuando se presiona la tecla Enter
              onKeyDown={manejarTeclaPresionada}
            />
          </div>

          {/* TERNARIO PARA MOSTRAR MENSAJE PREDETERMINADO CUANDO NO HAY TAREAS O LISTA DE TAREAS */}
          {tareas.length === 0 ? (
            // Si no hay tareas, muestra este mensaje
            <div className="p-4 text-center fs-5 fw-bold fst-italic text-muted">
              No hay tareas, añadir tareas
            </div>
          ) : (
            // LISTA DE TAREAS - Si hay tareas, muestra la lista
            <ul className="list-group list-group-flush">
              {/* Recorre el array de tareas y crea un elemento <li> por cada una */}
              {tareas.map((tarea, index) => (
                <li
                  // Key único para cada elemento (React lo necesita para optimizar el renderizado)
                  key={index}
                  className="list-group-item d-flex mx-auto justify-content-between align-items-center"
                  // Cuando el mouse entra en la tarea, guarda su índice en el estado
                  onMouseEnter={() => setTareaHover(index)}
                  // Cuando el mouse sale, limpia el estado (oculta el botón eliminar)
                  onMouseLeave={() => setTareaHover(null)}
                >
                  {/* Contenedor del texto de la tarea */}
                  <div className="text-center fs-5 fw-bold ">{tarea}</div>
                  
                  {/* Botón de eliminar que solo aparece cuando el mouse está sobre la tarea */}
                  {tareaHover === index && (
                    <button
                      // Al hacer clic, elimina la tarea correspondiente
                      onClick={() => eliminarTarea(index)}
                      className="btn btn-link text-danger p-0 m-2 border-0"
                    >
                      ✕
                    </button>
                  )}
                </li>
              ))}
            </ul>
          )}

          {/* CONTADOR DE TAREAS */}
          {/* Solo muestra el contador si hay al menos una tarea */}
          {tareas.length > 0 && (
            <div className="p-2 px-3 text-muted fst-italic fs-6 text-end">
              {/* Muestra el número de tareas y usa singular o plural según corresponda */}
              {tareas.length} {tareas.length === 1 ? "tarea" : "tareas"}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}