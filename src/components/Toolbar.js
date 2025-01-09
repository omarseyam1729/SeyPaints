const Toolbar = ({ setColor, handleToggleEraser, eraserMode }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '10px',
      margin: '10px',
    }}>
      <button onClick={handleToggleEraser}>
        {eraserMode ? 'Brush' : 'Eraser'}
      </button>
      <input
        type="color"
        title="Pick Color"
        onChange={(e) => setColor(e.target.value)}
        disabled={eraserMode} // Disable color picker when eraser is active
      />
      <button>Save</button>
    </div>
  );
};

export default Toolbar;