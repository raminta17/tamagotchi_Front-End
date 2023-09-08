import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateEggs, updateHunger, updateMoney, updatePet} from "../features/pet";
import {logDOM} from "@testing-library/react";

const StartGame = () => {

    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/sendAnimalSelection')
            .then(res => res.json()).then(data => setAnimals(data))
    }, []);

    const nav = useNavigate();
    const dispatch = useDispatch();

    function startGame(animal) {
        fetch('http://localhost:8000/select/' + animal)
            .then(res=>res.json()).then(data => {
            console.log(data)
            dispatch(updatePet(data.petInfo.petSelected));
            dispatch(updateHunger(data.petInfo.hunger));
            dispatch(updateEggs(data.petInfo.eggs));
            dispatch(updateMoney(data.petInfo.money));
        })
        nav('/game')
    }

    return (

        <div className="container">
            <h1>CHOOSE YOUR PET</h1>
            <div className="chooseAnimal">
                {animals.map((animal, index) => <img onClick={() =>startGame(animal.petName)} key={index} src={animal.petImage} alt=""/>)}
            </div>
        </div>
    );
};

export default StartGame;