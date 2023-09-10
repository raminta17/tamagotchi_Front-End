import React from 'react';
import {updatePetInfo} from "../features/pet";
import {useDispatch} from "react-redux";

const SingleEgg = ({egg, index}) => {

    const dispatch = useDispatch();

    function sellEgg() {
        fetch('http://localhost:8000/sellEgg/'+ index)
            .then(res => res.json()).then(data => {
            dispatch(updatePetInfo(data.petInfo));
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