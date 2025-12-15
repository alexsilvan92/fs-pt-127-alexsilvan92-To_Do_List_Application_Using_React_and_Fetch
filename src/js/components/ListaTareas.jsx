import TareaItem from "./TareaItem";

export default function ListaTareas({
  tareas,
  tareaHover,
  setTareaHover,
  onEditar,
  onEliminar,
}) {
  return (
    <ul className="list-group list-group-flush">
      {/* Recorre el array de tareas y crea un TareaItem por cada una */}
      {tareas.map((tarea, index) => (
        <TareaItem
          key={tarea.id}
          tarea={tarea}
          index={index}
          estaEnHover={tareaHover === tarea.id}
          onMouseEnter={() => setTareaHover(tarea.id)}
          onMouseLeave={() => setTareaHover(null)}
          onEditar={onEditar}
          onEliminar={() => onEliminar(tarea.id)}
        />
      ))}
    </ul>
  );
}
