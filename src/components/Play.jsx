import React, { useEffect, useState } from 'react'
import Box from './Box'
import { useSocket } from '../contexts/socketContext'
import { useParams } from 'react-router-dom'

function Play() {
    const [opponentInfo, setOpponentInfo] = useState({})
    const socket = useSocket()
    const {_id} = useParams()

    useEffect(()=>{
        socket.emit("get_opponent",_id)

        return ()=>{
            socket.off("get_opponent")
        }
    },[socket])

    useEffect(()=>{
        socket.on("get_opponent",(user)=>{
            setOpponentInfo(user)
        })

        return ()=>{
            socket.off("get_opponent")
        }
    },[socket])

  return (
    <div className="bg-cover bg-center h-screen " style={{ backgroundImage: "url('/images/bg.jpeg')"}}>
        <div className="flex justify-center">
            <h1 className="text-5xl font-semibold text-white">Tic Tac Toe</h1>
        </div>
        <div className="flex justify-center items-center mt-48">
            <Box opponentInfo={opponentInfo} setOpponentInfo={setOpponentInfo}/>
        </div>
    </div>
  )
}

export default Play
