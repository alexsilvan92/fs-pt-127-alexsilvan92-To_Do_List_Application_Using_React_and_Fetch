import { useState } from "react";
import { useEffect } from "react";
import InputNuevaTarea from "./InputNuevaTarea";
import MensajeSinTareas from "./MensajeSinTareas";
import ListaTareas from "./ListaTareas";
import ContadorTareas from "./ContadorTareas";
import todolistServices from "../services/todolistServices";

export default function ToDoList() {
  //-------- ESTADOS DE LAS TAREAS, INPUTS Y EL HOVER EN LA LISTA DE TAREAS -------
  // Estado que almacena el array de tareas
  const [tareas, setTareas] = useState([]);
  // Estado que controla el valor del input de nueva tarea
  const [inputValue, setInputValue] = useState("");
  // Estado que guarda el índice de la tarea sobre la que está el mouse
  const [tareaHover, setTareaHover] = useState(null);
  // Estado que controla si la pagina esta cargando o no
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getToDoList() {
      setLoading(true);
      // 1️⃣ Verificar si el usuario existe
      const usuarioExiste = await todolistServices.verificarUsuario();
      
      // 2️⃣ Si no existe, crearlo
      if (!usuarioExiste) {
        await todolistServices.crearUsuario();
      }
      
      // 3️⃣ Cargar las tareas del usuario
      const tareasDeUsuario = await todolistServices.getToDoList();
      setTareas(tareasDeUsuario.todos || []);
      setLoading(false);
    }
    
    getToDoList();
  }, []);

  //-------- FUNCIONES DE MANEJO DE TAREAS -------
  // Función que agrega una nueva tarea al array de tareas
  async function añadirNuevaTarea() {
    if (inputValue.trim() === "") return; // Valida que el input no esté vacío (sin espacios en blanco)

    // 1️⃣ Crear el objeto de la nueva tarea según el formato de la API
    const nuevaTarea = {
      label: inputValue.trim(), // El texto de la tarea
      is_done: false, // Por defecto, la tarea NO está completada
    };

    // 2️⃣ Enviar la tarea a la API
    const tareaCreada = await todolistServices.postToDoList(nuevaTarea);

    // 3️⃣ Agregar la tarea creada al estado local
    setTareas((prev) => [...prev, tareaCreada]);

    // 4️⃣ Limpiar el input después de agregar la tarea
    setInputValue("");
  }

  // Función que elimina una tarea específica del array según su Id
  async function eliminarTarea(tareaId) {
    // 1️⃣ Eliminar la tarea en el servidor
    const response = await todolistServices.deleteToDoList(tareaId);
    // 2️⃣  Actualizar el estado local eliminando la tarea por su ID
    setTareas((prev) => prev.filter((tarea) => tarea.id !== tareaId));
  }

  // Función que edita una tarea específica del array según du Id
  async function editarTarea(tareaId, tareaActualizada) {
    // 1️⃣ Actualizar en el servidor
    const tareaDelServidor = await todolistServices.putToDoList(tareaId, tareaActualizada);
    // 2️⃣ Actualizar en el estado local
    setTareas((prev) => 
      prev.map((tarea) => 
        tarea.id === tareaId ? tareaDelServidor : tarea
      )
    );
  
  }

  // Función que detecta cuando se presiona la tecla Enter
  function manejarTeclaPresionada(evento) {
    // Si la tecla presionada es Enter, ejecuta la función de añadir tarea
    if (evento.key === "Enter") {
      añadirNuevaTarea();
    }
  }

  // Función que actualiza el valor del input
  function manejarCambioInput(evento) {
    setInputValue(evento.target.value);
  }

  //-------- RENDERIZADO -------
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 ">
        <div
          className="spinner-border"
          style={{ width: "10rem", height: "10rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      {/* Título principal de la aplicación */}
      <h1 className="text-center mb-4 fs-1 fw-bold text-decoration-underline">
        Lista De Tareas
      </h1>

      {/* Tarjeta principal que contiene toda la aplicación */}
      <div className="card shadow">
        <div className="card-body p-0">
          {/* INPUT PARA NUEVA TAREA */}
          <InputNuevaTarea
            value={inputValue}
            onChange={manejarCambioInput}
            onKeyDown={manejarTeclaPresionada}
          />

          {/* CONDICIONAL: Muestra mensaje o lista de tareas */}
          {tareas.length === 0 ? (
            <MensajeSinTareas />
          ) : (
            <ListaTareas
              tareas={tareas}
              tareaHover={tareaHover}
              setTareaHover={setTareaHover}
              onEditar={editarTarea}
              onEliminar={eliminarTarea}
            />
          )}

          {/* CONTADOR DE TAREAS */}
          <ContadorTareas cantidad={tareas.length} />
        </div>
      </div>
    </div>
  );
}
