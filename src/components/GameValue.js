import React, { useEffect, useState } from 'react';

const GameValue = (props) => {
    let recomended = props.recomended
    let currentValue= props.value;
    
    const updateContent = () => {
        if(!currentValue){
            currentValue = recomended
            props.changeValue(props.id);
        }
    }

    return (
        <div id={props.id} className = {props.classes} onClick = {updateContent}>
            <span className="game-value">{currentValue}</span>
        </div>
    )
}

export default GameValue