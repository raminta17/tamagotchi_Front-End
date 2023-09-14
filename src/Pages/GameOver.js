import React from 'react';
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

const GameOver = () => {

    const nav=useNavigate();
    const pet = useSelector(state=>state.pet.petInfo);
    console.log(pet);

    return (
        <div className="container gameOver">
            <img src={pet.petSelected.petImage} alt=""/>
            <h2>YOUR <span>{pet.petSelected.petName.toUpperCase()}</span> PET DIED AT <span>LEVEL {pet.level}</span>.</h2>
            <h3>TAKE BETTER CARE OF HIM NEXT TIME</h3>
            <button onClick={() => nav("/")}>PLAY AGAIN</button>
        </div>
    );
};

export default GameOver;