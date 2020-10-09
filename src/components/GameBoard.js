import React, { useEffect, useState } from 'react';
import GameValue from './GameValue';
const GameBoard = (props) =>{
    let {rowValue, dataId, borderClass, updateTable, setPlayValue,playValue} = props;

    const changeValue = (secondIndex) => {
        updateTable(playValue, dataId + secondIndex)
        if(playValue === 'X') setPlayValue('O');
        else setPlayValue('X');
    }

    return(
        <div className="main-row">
            <GameValue 
                id = '0'
                classes = {"game-box first-block content r" + borderClass} 
                recomended = {playValue} value = {rowValue[0] ? rowValue[0] : null} 
                changeValue = {changeValue}  
            />
            <GameValue 
                id = '1'
                classes = {"game-box content r" + borderClass} 
                recomended = {playValue} value = {rowValue[1] ? rowValue[1] : null}
                changeValue = {changeValue}
            />
            <GameValue 
                id = '2'
                classes = {"game-box last-block content r" + borderClass} 
                recomended = {playValue} value = {rowValue[2] ? rowValue[2] : null} 
                changeValue = {changeValue}
            />
        </div>
    )
}

export default GameBoard;