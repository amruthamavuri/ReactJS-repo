export default function ColorSwitch({
    onChangeColor
  }) {
    return (
    <div>
        <button onClick={e => {
        e.stopPropagation();
        onChangeColor();
        }}>
        Change color
      </button>
    </div>  
    );
  }
  