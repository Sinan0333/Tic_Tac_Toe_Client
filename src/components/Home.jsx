import React, { useEffect, useState } from 'react'
import { useSocket } from '../contexts/socketContext'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../store/slice/userSlice'

function Home() {
    const [room,setRoom] = useState("")
    const [loading,setLoading] = useState(false)
    const socket = useSocket()
    const navigate = useNavigate()
    const userId = useSelector((state)=>state.user._id)
    const dispatch = useDispatch()

    useEffect(()=>{
        socket.on("message",(message)=>{
            if(message === "Please wait for the opponent to join"){
                setLoading(true)
            }else{
                alert(message)
            }
        })

        socket.on('join',(socketId)=>{
            navigate(`/play/${socketId}`)
        })

        return()=>{
            socket.off("message")
            socket.off("join")
        }
    },[socket])

    const handleSubmit = (role,turn)=>{
        if(!room){
            alert("Please enter the room")
        }else{
            socket.emit('register',{_id:userId,role,turn,room})
        }
    }

    const handleLogout = ()=>{
        dispatch(logoutUser())
        localStorage.removeItem("userToken")
    }

  return (
<div>
    {
    loading ? <Loader/>
    :<div className='bg-cover bg-center h-screen' style={{ backgroundImage: "url('/images/bg.jpeg')"}}>
        <button onClick={handleLogout} className="flex gap-3 float-right m-2 mb-48 justify-center  cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
            Logout
        </button>
        <div className=' w-full flex justify-center items-center'>
            <div className='flex flex-col  p-6'>
                <input onChange={(e)=>setRoom(e.target.value)} type="text" className='flex gap-3  justify-center   text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600  duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900'/>
                <button onClick={()=>handleSubmit("x",true)} className="flex gap-3 mt-3 justify-center  cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                    Create Room
                </button>
                <button onClick={()=>handleSubmit("o",false)} className="flex mt-3 gap-3 justify-center cursor-pointer text-white font-semibold bg-gradient-to-r from-gray-800 to-black px-7 py-3 rounded-full border border-gray-600 hover:scale-105 duration-200 hover:text-gray-500 hover:border-gray-800 hover:from-black hover:to-gray-900">
                    Join Room
                </button>
            </div>
        </div>  
    </div>
    }
</div>
    
  )
}

export default Home
