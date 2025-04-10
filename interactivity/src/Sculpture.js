import React from 'react';
import { useState } from "react";
import { sculptureList } from './SculptureList';

export default function Gallery()
{
    const [index, setIndex] = useState(0);
    const [showmore, setShowmore] = useState(false);

    let prev = index > 0;
    let next = index < sculptureList.length-1;

    function handlePrevClick()
    {
        if (prev){
            setIndex(index-1);
        }
    }

    function handleNextClick()
    {
        setIndex(index + 1);
    }

    function handleMoreClick()
    {
        setShowmore(!showmore);
    }

    let sculpture = sculptureList[index];
    return(
        <>
        <button onClick={handlePrevClick} disabled={!prev}>Previous</button>
        <button onClick={handleNextClick} disabled={!next}>Next</button>
        <h2>
            <i>{sculpture.name}</i>
            by {sculpture.artist}
        </h2>
        <h3>
            ({index + 1} of {sculptureList.length})
        </h3>
        <button onClick={handleMoreClick}>{showmore ? 'Hide' : 'show'} Details</button>
        {showmore && <p>{sculpture.description}</p>}
        <img
           src={sculpture.url}
           alt={sculpture.alt}
        />
        </>
    );
}
