import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import GameBoard from './components/GameBoard'

const App = () => {
    let prevTable = JSON.parse(localStorage.getItem('prevTable'));
    let prevPlay = JSON.parse(localStorage.getItem('prevPlay'));
    
    let table = prevTable || [[null, null, null], [null, null, null], [null, null, null]]

    let [gameTable, setGameTable] = useState(table);

    let [playValue, setPlayValue] = useState(prevPlay || 'X');

    const updateTable = (value, index) => {
        index = index.split('');
        setGameTable(gameTable.map((row, rowIndex) => {
            if(rowIndex === +index[0]) row[+index[1]] = value;
            return row;
        }));
    }
    
    useEffect(() =>{
        checkTable();
    })

    const storeTable = () => {
        localStorage.setItem('prevTable', JSON.stringify(gameTable));
        localStorage.setItem('prevPlay', JSON.stringify(playValue));
    }

    const checkTable = () => {
        let isCompleted = false;
        for(let i = 0; i < 3; i++){
            if([...new Set(gameTable[i])].length === 1 && gameTable[i][0]){
                alert(gameTable[i][0] + ' Won the Game...');
                isCompleted = true;
                break;
            }

            if(gameTable[0][i] === gameTable[1][i] &&  gameTable[1][i] === gameTable[2][i] && gameTable[0][i]){
                alert(gameTable[0][i] + ' Won the Game...');
                isCompleted = true;
                break;
            }
        }
        
        if(gameTable[0][0] === gameTable[1][1] &&  gameTable[1][1] === gameTable[2][2] && gameTable[0][0]){
            alert(gameTable[0][0] + ' Won the Game...');
            isCompleted = true;
        }        

        if(gameTable[0][2] === gameTable[1][1] &&  gameTable[1][1] === gameTable[2][0] && gameTable[0][2]){
            alert(gameTable[0][2] + ' Won the Game...');
            isCompleted = true
        }

        isCompleted && resetTable();
    }
    
    const resetTable = () => {
        setPlayValue('X')
        localStorage.setItem('prevPlay', null)
        localStorage.setItem('prevTable', JSON.stringify([[null, null, null], [null, null, null], [null, null, null]]));
        setGameTable([[null, null, null], [null, null, null], [null, null, null]]);
    };
     
    return(
        <div className="container">
            <h1 className = "app-title">TIC-TAC-TOE</h1>
            {gameTable.map((data, index) => {
                return <GameBoard 
                        playValue = {playValue}
                        key={index} 
                        dataId={index} 
                        setPlayValue = {setPlayValue}
                        rowValue = {data} 
                        updateTable = {updateTable}
                        borderClass = {index+'-row'}
                    />
            })}
            <h3> Player {playValue} Turn</h3>
            <button onClick ={resetTable}>Reset</button>
            <button onClick ={storeTable}>Save</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'))