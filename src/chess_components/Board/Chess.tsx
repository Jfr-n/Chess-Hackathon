import React from 'react';
import './Chess.css';
import Tile from '../Tile/Tile'

const verticalaxis = [1,2,3,4,5,6,7,8];
const horizontalaxis = ["a","b","c","d","e","f","g","h"]

interface Piece{
    image: string
    x: number
    y: number
}

export default function Chessboard(){
    let board = [];
    


    for(let j = verticalaxis.length - 1; j >= 0; j--){
        for(let i =0; i < horizontalaxis.length; i++){
            const num = i + j + 2

            board.push(<Tile image="chess_pieces/p_B.png"num={num}/>);


        }
    }
    return <div id = "board">{board}</div>
}