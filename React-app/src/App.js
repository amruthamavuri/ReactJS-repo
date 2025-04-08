import React, { useState } from 'react';
import MyButton from './MyButton';
import Profile from './Profile';
import ShoppingList from './Shopping';

function MyApp()
{
  const [count, setCount] = useState(0)

  function countinClick()
  {
    setCount(count + 1);
  }
  return(
    <div>
      <h1>Welcome to my first App</h1>
      <h2>Triggering the Alert</h2>
      <MyButton />
      <h2>Click and Count Me(updating together)</h2>
      <MyButton count={count} onClick={countinClick} />
      <MyButton count={count} onClick={countinClick} />
      <Profile />
      <ShoppingList />
    </div>
  );
}

export default MyApp;