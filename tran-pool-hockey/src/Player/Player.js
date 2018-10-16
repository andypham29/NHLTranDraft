import React from 'react';

const player = (props) => {
    return (
    <div>
        <p>Player: {props.name}, Position: {props.position}</p>
        <p>{props.children}</p>
    </div>

)
};

export default player;
