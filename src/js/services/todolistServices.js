
// FUNCIÓN GET - OBTENER DATOS DEL SERVIDOR
async function getToDoList() {
  // Hacemos una petición GET al servidor para OBTENER la lista de tareas
  const response = await fetch("https://playground.4geeks.com/todo/users/Silvan");
  
  // Convertimos la respuesta del servidor de JSON a objeto JavaScript
  const data = await response.json();
  
  // RETURN NECESARIO: Devolvemos los datos para poder usarlos donde llamemos esta función
  // Ejemplo: const tareas = await getToDoList(); 
  return data;
}

// FUNCIÓN POST - CREAR NUEVA TAREA
async function postToDoList(newTodo) {
  // Enviamos una nueva tarea al servidor
  const response = await fetch("https://playground.4geeks.com/todo/todos/Silvan", {
    method: "POST",  // POST = CREAR algo nuevo
    headers: {
      'Content-Type': 'application/json'  // Le decimos al servidor que enviamos JSON
    },
    body: JSON.stringify(newTodo)  // Convertimos el objeto JavaScript a texto JSON
  });
  
  // Convertimos la respuesta (que incluye el ID generado por el servidor)
  const data = await response.json();
  
  // RETURN ÚTIL: Aunque no lo uses ahora, devuelve la tarea creada con su nuevo ID
  // El servidor suele devolver el objeto creado con datos adicionales (como el ID)
  // Ejemplo: const tareaCreada = await postToDoList(miTarea);
  // Ahora puedes acceder a: tareaCreada.id
  return data;
}

// FUNCIÓN PUT - ACTUALIZAR TAREA EXISTENTE
async function putToDoList(todoId, updatedTodo) {
  // Actualizamos una tarea existente usando su ID
  const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {
    method: "PUT",  // PUT = ACTUALIZAR algo existente
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedTodo)  // Enviamos los datos actualizados
  });
  
  // Convertimos la respuesta del servidor
  const data = await response.json();
  
  // RETURN ÚTIL: Devuelve la tarea actualizada confirmada por el servidor
  // Útil para verificar que la actualización fue exitosa
  // O para obtener datos que el servidor pudo haber modificado
  return data;
}

// FUNCIÓN DELETE - ELIMINAR TAREA
async function deleteToDoList(todoId) {
  // Eliminamos una tarea usando su ID
  const response = await fetch(`https://playground.4geeks.com/todo/todos/${todoId}`, {
    method: "DELETE"  // DELETE = ELIMINAR
    // No necesita headers ni body porque solo eliminamos
  });
  
  // RETURN OPCIONAL pero RECOMENDADO: 
  // Devuelve la respuesta para verificar si se eliminó correctamente
  // response.ok será true si funcionó
  return response;
}

const todolistServices = {
  getToDoList,
  postToDoList,
  putToDoList,
  deleteToDoList,
};

export default todolistServices;
