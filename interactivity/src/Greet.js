export default function Greet() {
    function handleClick() {
      const name = prompt('What is your name?');
      alert(`Hello, ${name}!`);
    }
  
    return (
      <button onClick={handleClick}>
        Greet
      </button>
    );
  }  