import { useEffect, useState } from "react";
import { InitialArray } from "../constants/array"
import { circle, cross } from "../constants/icons";
import { useSocket } from "../contexts/socketContext";
import { checkWin } from "../constants/checkWin";
import { useNavigate } from "react-router-dom";

function Box({opponentInfo,setOpponentInfo}) {
    const [blocks, setBlocks] = useState(InitialArray)
    const socket = useSocket()
    const [myTurn,setMyTurn] = useState(false)
    const navigate = useNavigate()

    const handleClick = (row,col) => {
        if(blocks[row][col] || !myTurn) return

        const updatedArray = [...blocks];
        updatedArray[row][col] = opponentInfo.role === "x" ? "o" : "x";
        setBlocks(updatedArray);

        const win = checkWin(updatedArray);
        if(win) navigate('/end-game')

        socket.emit("play",{to:opponentInfo.socketId,data:updatedArray})
        socket.emit("chang_turn",opponentInfo.socketId)
        setMyTurn(!myTurn)
    }

    useEffect(()=>{
        setMyTurn(!opponentInfo.turn)
    },[opponentInfo])

    useEffect(()=>{ 
        socket.on("play",(data)=>{
            setBlocks(data)
            const win = checkWin(data);
            if(win) navigate('/end-game')
        })

        socket.on("chang_turn",(data)=>{
            setMyTurn(data)
        })

        return ()=>{
            socket.off("play")
            socket.off("chang_turn")
        }
    },[socket])

  return (
    <div className="grid grid-cols-3 gap-2  border-2 p-2 ">
    {
        blocks.map((row, rowIndex) => {
            return row.map((col, colIndex) => {
                return(
                    <div key={`${rowIndex}${colIndex}`}  className="w-16 h-16 border-2" onClick={()=>handleClick(rowIndex,colIndex)}>
                        {
                            blocks[rowIndex][colIndex] ? (
                                <img className="w-full h-full" src={blocks[rowIndex][colIndex] === "x" ? cross : circle} alt="" />
                            ) : (
                                <div className="w-full h-full"></div>
                            )
                        } 
                    </div>
                ) 
            });
        })
    }
    </div>
  )
}

export default Box
