import React from 'react';
import {useNavigate} from "react-router-dom";

const GameOver = () => {

    const nav=useNavigate();

    return (
        <div className="container gameOver">
            <h2>YOUR PET DIED.</h2>
            <h3>TAKE BETTER CARE OF HIM NEXT TIME</h3>
            <button onClick={() => nav("/")}>PLAY AGAIN</button>
        </div>
    );
};

export default GameOver;