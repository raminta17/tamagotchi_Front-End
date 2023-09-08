import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {updateEggs, updateHunger, updateMoney, updatePet} from "../features/pet";
import {useNavigate} from "react-router-dom";
import SingleEgg from "../components/SingleEgg";

const GamePage = () => {
    const dispatch = useDispatch();
    const pet = useSelector(state => state.pet);
    const nav = useNavigate();

    useEffect(() => {
       const interval =  setInterval(() => {
            fetch('http://localhost:8000/getPetData')
                .then(res => res.json()).then(data => {
                console.log(data)
                dispatch(updateHunger(data.petInfo.hunger))
                dispatch(updateMoney(data.petInfo.money));
                dispatch(updateEggs(data.petInfo.eggs));
                dispatch(updatePet(data.petInfo.petSelected))
                if(data.gameover){
                    nav("/gameover")
                }
            })
        }, 1000);
       return () => clearInterval(interval);

    }, []);



    function feedPet() {
        fetch('http://localhost:8000/feed')
            .then(res => res.json()).then(data => {
            console.log(data)
            dispatch(updateMoney(data.petInfo.money));
            dispatch(updateHunger(data.petInfo.hunger));
        })
    }

    return (
        <>
            {pet.pet && <div className="container game">
                <div className="leftSide">
                    <div className=" imgDiv">
                        <img src={pet.pet.petImage} alt=""/>
                    </div>

                    <div className="hungerBarCont f1">
                        <div className="hungerBar" style={{width: pet.hunger + '%'}}><h2>{pet.hunger}%</h2></div>
                    </div>
                </div>
                <div className="rightSide">
                    <div className="eggsContainer f5">
                        {pet.eggs.map((egg, index) => (
                           <SingleEgg key={index} index={index} egg={egg}/>
                        ))}
                    </div>
                    <h2>YOUR MONEY: {pet.money}</h2>
                    <button onClick={feedPet}><h3>Feed your pet ($10)</h3></button>
                </div>

            </div>}
        </>

    );
};

export default GamePage;