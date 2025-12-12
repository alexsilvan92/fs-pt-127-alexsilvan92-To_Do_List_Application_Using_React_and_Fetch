export default function InputNuevaTarea({ value, onChange, onKeyDown }) {
  return (
    <div className="p-3 border-bottom">
      <input
        type="text"
        className="form-control border-0 text-center"
        id="input-nueva-tarea"
        placeholder="Describe la Nueva Tarea, y pulsa ⏎ (Enter)."
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
}
