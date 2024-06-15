import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

export function UserIsLoggedIn() {

    const userId = useSelector((state)=>state.user._id)

    return (
      userId ? <Outlet/>: <Navigate to='/sign-in'/> 
    )
}


export function UserIsLoggedOut() {

    const userId = useSelector((state)=>state.user._id)

    return (
        userId ? <Navigate to='/home'/> : <Outlet/>
    )
}