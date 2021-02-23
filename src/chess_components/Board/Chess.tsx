import React from 'react';
import './Chess.css';
import Tile from '../Tile/Tile'
import { type } from 'os';
import { act } from 'react-dom/test-utils';

const verticalaxis = [1,2,3,4,5,6,7,8];
//const horizontalaxis = ["a","b","c","d","e","f","g","h"]

interface Piece{
    image: string
    x: number
    y: number
}

const pieces: Piece[]=[];

for(let p = 0; p < 2; p++){
    const type = (p ===0) ? "B" : "W" 
    const y = (p === 0 ? 7 : 0)

    // Monarchs
    pieces.push({image:`chess_pieces/q_${type}.png`, x: 3, y})
    pieces.push({image:`chess_pieces/k_${type}.png`, x: 4, y })
    pieces.push({image:`chess_pieces/q_${type}.png`, x: 3, y })
    pieces.push({image:`chess_pieces/k_${type}.png`, x: 4, y })
    // bishops
    pieces.push({image:`chess_pieces/b_${type}.png`, x: 5, y })
    pieces.push({image:`chess_pieces/b_${type}.png`, x: 2, y})
    // knights
    pieces.push({image:`chess_pieces/k_${type}.png`, x: 1, y })
    pieces.push({image:`chess_pieces/k_${type}.png`, x: 6, y })
   
    //Rooks 
    pieces.push({image:`chess_pieces/r_${type}.png`, x: 0, y})
    pieces.push({image:`chess_pieces/r_${type}.png`, x: 7, y})
}

let activePiece: HTMLElement | null= null;
function grabPiece(e: React.MouseEvent){
    const element = e.target as HTMLElement;
    if(element.classList.contains("chessPiece")){
        console.log(e);

        const x = e.clientX -50;
        const y = e.clientY -50;
        element.style.position = "absolute";
        element.style.left = `${x}px`;
        element.style.top = `${y}px`
        activePiece = element;  
    }
}

function movePiece(e: React.MouseEvent){

    if(activePiece){
        console.log(e);

        const x = e.clientX -50;
        const y = e.clientY -50;
        activePiece.style.position = "absolute";
        activePiece.style.left = `${x}px`;
        activePiece.style.top = `${y}px`;
    }
}

function dropPiece(e: React.MouseEvent){
    if(activePiece){
        activePiece = null;
    }
}
export default function Chessboard(){
    let board = [];
    


    for(let j = verticalaxis.length - 1; j >= 0; j--){
        for(let i =0; i < 8; i++){
            const num = i + j + 2
            for(let i = 0; i < 8; i++){
                pieces.push({image:'chess_pieces/p_B.png', x: i, y: 6})

            }
            for(let i = 0; i < 8; i++){
                pieces.push({image:'chess_pieces/p_W.png', x: i, y: 1})

            }


            let image = undefined;
            pieces.forEach(p =>{
                if(p.x === i && p.y === j){
                    image = p.image
                }
            })
            board.push(<Tile key={`${i},${j}`}image={image} num={num}/>);


        }
    }
    return <div 
    onMouseMove={(e) => movePiece(e)} 
    onMouseDown={e => grabPiece(e)}
    onMouseUp={e =>dropPiece(e)}
     id = "board">
         {board}
     </div>
}

