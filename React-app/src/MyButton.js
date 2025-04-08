import React from 'react';

function MyButton({count, onCount}) 
{
    
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <div>
        <button onClick={onCount}>Clicked {count} times</button>
        <button onClick={handleClick}>Click me</button>
      </div>
    );
}

export default MyButton;