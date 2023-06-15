import React, { useEffect, useState } from 'react'
import Wyniki from './wyniki'

const Pytania = ({pytania, pytanie}) => {
const [wynik, setWynik] = useState(0);
const [odpowiedzi, setOdpowiedz] = useState([]);

const handleAnswer = (e) => {
    console.log(odpowiedzi);
    console.log(pytania[pytanie].pytanie);

    if (odpowiedzi.filter(odp => odp.nrp === pytania[pytanie].pytanie).length !== 0) {
        console.log("Odpowiedź została już podana");
    } else {
        if (pytania[pytanie].prawidlowaOdpowiedz === e.target.textContent) {
            setWynik(wynik + 1); 
            console.log(pytania[pytanie]);
            const newAnswer = {
                p: e.target.textContent,
                r: 'd',
                nrp: pytania[pytanie].pytanie
            };
            const newAnswers = [...odpowiedzi, newAnswer];
            setOdpowiedz(newAnswers);
        } else {
            const newAnswer = {
                p: e.target.textContent,
                r: 'z',
                nrp: pytania[pytanie].pytanie
            };
            const newAnswers = [...odpowiedzi, newAnswer];
            setOdpowiedz(newAnswers);
        }
    }
};
  return (
    <div className='pyt'>
        <p>{pytania[pytanie].pytanie}</p>
        {pytania[pytanie].odpowiedzi.map((odpowiedz, index) => (
            <p className='wybor' onClick={handleAnswer} key={index}>{odpowiedz}</p>
        ))}
        <div className='wynik'>
            <Wyniki wynik={wynik}/>
        </div>
    </div>
  )
}

export default Pytania