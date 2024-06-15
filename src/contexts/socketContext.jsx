import React , {createContext, useContext, useMemo} from 'react'
import {io} from 'socket.io-client'


const SocketContext = createContext(null)

export const useSocket = () => {
    const socket = useContext(SocketContext)
    return socket
}

export const SocketProvider = ({children}) => {
    console.log(import.meta.env)
    const socket = useMemo(()=>io(import.meta.env.VITE_BASE_URL),[])
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}