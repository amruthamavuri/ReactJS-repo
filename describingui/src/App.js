import React from 'react';
import Congratulations from './FirstComponent';
import Gallery from './Gallery.js';
import Profile from './Profile.js';
import Bio from './HtmlToJsx';
import TodoList from './JSXCurlyBraces.js';
import DrinkList from './conditions.js';
import List from './Splitting.js';
import RecipeList from './Nestedlists.js';
import Poem from './ListSeperator.js';
import Clock from './BrokenClock.js';

function Challenges()
{
  return(
    <>
    <h1>Challenge 1: creating First component</h1>
    <Congratulations />
    <h1>Challenge 2: importing and exporting components</h1>
    <Profile />
    <Gallery />
    <h1>Challenge 3: Converting HTML to JSX</h1>
    <Bio />
    <h1>Challenge 4: Write an expression inside JSX curly braces </h1>
    <TodoList />
    <h1>Challenge 5: Refactoring ?: to if else </h1>
    <DrinkList />
    <h1>Challenge 6: Splitting a list in two</h1>
    <List />
    <h1>Challenge 7: Nested lists in one component</h1>
    <RecipeList />
    <h1>Challenge 8: List with a seperator</h1>
    <Poem />
    <h1>Challenge 9: Fix a broken clock</h1>
    <Clock />
    </>
      
  );
}

export default Challenges;

