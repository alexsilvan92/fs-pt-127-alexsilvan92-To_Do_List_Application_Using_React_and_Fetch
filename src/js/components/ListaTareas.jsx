import TareaItem from "./TareaItem";

export default function ListaTareas({
  tareas,
  tareaHover,
  setTareaHover,
  onEliminar,
}) {
  return (
    <ul className="list-group list-group-flush">
      {/* Recorre el array de tareas y crea un TareaItem por cada una */}
      {tareas.map((tarea, index) => (
        <TareaItem
          key={index}
          tarea={tarea}
          index={index}
          estaEnHover={tareaHover === index}
          onMouseEnter={() => setTareaHover(index)}
          onMouseLeave={() => setTareaHover(null)}
          onEliminar={() => onEliminar(index)}
        />
      ))}
    </ul>
  );
}
