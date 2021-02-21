import React from 'react';
import './Chess.css';


const verticalaxis = [1,2,3,4,5,6,7,8];
const horizontalaxis = ["a","b","c","d","e","f","g","h"]

export default function Chessboard(){
    let board = [];
    


    for(let j = verticalaxis.length - 1; j >= 0; j--){
        for(let i =0; i < horizontalaxis.length; i++){
            const num = i + j + 2

            if (num % 2 === 0){
                board.push(
                    <div className = "board dark-tile">[{horizontalaxis[i]}{verticalaxis[j]}]</div>
                );
            }
            else{
                board.push(
                    <div className = "board light-tile">[{horizontalaxis[i]}{verticalaxis[j]}]</div>
                );  
            }

        }
    }
    return <div id = "board">{board}</div>
}