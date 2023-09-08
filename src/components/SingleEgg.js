import React from 'react';
import {updateEggs, updateMoney} from "../features/pet";
import {useDispatch} from "react-redux";

const SingleEgg = ({egg, index}) => {

    const dispatch = useDispatch();

    function sellEgg() {
        fetch('http://localhost:8000/sellEgg/'+ index)
            .then(res => res.json()).then(data => {
            dispatch(updateMoney(data.petInfo.money));
            dispatch(updateEggs(data.petInfo.eggs));
        })
    }
    return (
            <div className="egg">
                <h5>Price: {egg.eggPrice} $</h5>
                <img src="https://clipart-library.com/image_gallery2/Egg-PNG-Picture.png" alt=""/>
                <button onClick={sellEgg}>SELL</button>
            </div>

    );
};

export default SingleEgg;