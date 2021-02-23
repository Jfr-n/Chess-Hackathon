import "./Tile.css"

interface Props{
    image?: string;
    num: number
}

export default function Tile ({num, image}: Props){
    if(num % 2 === 0){
        return <div className="grid dark-tile"><img src={image}></img></div>

    }
    else{
        return <div className ="grid light-tile"><img src={image}></img></div>

    }
}