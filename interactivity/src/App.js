import React from 'react';
import Toolbar from './passingProps'
import ColorSwitch from './ColorSwitch';
import Gallery from './Sculpture';
import Form from './ApplicationForm';
import FeedbackForm from './Feedback';
import Greet from './Greet';


function Challenges()
{
  return(
    <>
    <h1>Challenge 1: Passing event handlers as props</h1>
    <Toolbar />
    <h1>Challenge 2: Wire up the event</h1>
    <ColorSwitch />
    <h1>Challenge 3: UseState on switching to next page</h1>
    <Gallery />
    <h1>Challenge 4: Fix stuck form inputs </h1>
    <Form />
    <h1>Challenge 5: Fix a crash </h1>
    <FeedbackForm />
    <h1>Challenge 6: Remove unnecessary State</h1>
    <Greet />
    </>
  );
}

export default Challenges;