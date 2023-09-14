import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateMessage, updatePetInfo} from "../features/pet";

const StartGame = () => {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/sendAnimalSelection')
            .then(res => res.json()).then(data => {
            setAnimals(data)
        })
    }, []);

    const nav = useNavigate();
    const dispatch = useDispatch();

    function startGame(animal) {
        fetch('http://localhost:8000/select/' + animal)
            .then(res=>res.json()).then(data => {
            dispatch(updatePetInfo(data.petInfo));
            dispatch(updateMessage(data.message));
        })
        nav('/game')
    }

    return (

        <div className="container">
            <h1>CHOOSE YOUR PET</h1>
            <div className="chooseAnimal">
                {animals.map((animal, index) => <img onClick={() =>startGame(animal.petName)} key={index} src={animal.petImages[0]} alt=""/>)}
            </div>
        </div>
    );
};

export default StartGame;