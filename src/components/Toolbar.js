import '../styles/Toolbar.css'
const Toolbar = ({ setColor, handleToggleEraser, eraserMode,handleSave }) => {
  return (
    <div className="toolbar">
      <button onClick={handleToggleEraser}>
        {eraserMode ? 'Brush' : 'Eraser'}
      </button>
      <input
        type="color"
        title="Pick Color"
        onChange={(e) => setColor(e.target.value)}
        disabled={eraserMode} // Disable color picker when eraser is active
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Toolbar;