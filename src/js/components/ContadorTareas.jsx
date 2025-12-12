export default function ContadorTareas({ cantidad }) {
  // Si no hay tareas, no muestra nada
  if (cantidad === 0) return null;

  // Define el texto según si hay una o múltiples tareas
  const textoTareas = cantidad === 1 ? "tarea" : "tareas";

  return (
    <div className="p-2 px-3 text-muted fst-italic fs-6 text-end">
      {cantidad} {textoTareas}
    </div>
  );
}
