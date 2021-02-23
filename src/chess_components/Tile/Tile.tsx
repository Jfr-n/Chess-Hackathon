import "./Tile.css"

interface Props{
    image?: string;
    num: number
}

export default function Tile ({num, image}: Props){
    if(num % 2 === 0){
        return <div className="grid dark-tile">
          {image &&  <div style={{backgroundImage: `url(${image})`}} className="chessPiece"></div>}
            
            </div>

    }
    else{
        return <div className ="grid light-tile"> 
        {image &&<div style={{backgroundImage: `url(${image})`}} className="chessPiece"></div>}
        </div>

    }
}