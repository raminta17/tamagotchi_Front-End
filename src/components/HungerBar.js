import React from 'react';

const HungerBar = ({pet}) => {
    return (

            <div className="hungerBarCont f1">
                <div className="hungerBar" style={{width: pet.hunger + '%'}}><h2>{pet.hunger}%</h2></div>
            </div>

    );
};

export default HungerBar;