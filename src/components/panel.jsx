import React, { useEffect, useState } from 'react'
import '../App.css';
import pytania from '../components/database/pytania.json';
import Wyniki from './wyniki';
import Pytania from './pytania';

const Panel = () => {
  const [data, setData] = useState([]);
  const [pytanie, setPytanie] = useState(0);

  useEffect(() => {
    setData(pytania);
  }, []); 

  const handleNext = () => {
        if( (pytanie + 1) >= pytania.length){
            console.log("Error");
        } else {
            setPytanie(pytanie + 1);
        }
  }
  
  const handlePrevious = () => {
        if( (pytanie - 1) < 0){
            console.log("Error");
        } else {
            setPytanie(pytanie - 1);
        }
  }

  return (
    <div className='container'>  
        <div className='panel'>
            <h2>SameQuizy</h2>
        </div>
        <div className='pytania'>
            <Pytania pytania={pytania} pytanie={pytanie}/>
        </div>
        <div className='przyciski'>
            <button type='button' onClick={handlePrevious}>Poprzedni</button>
             &nbsp;
            <button type='button' onClick={handleNext}>Następny</button>
        </div>
       
    </div>
  )
}

export default Panel