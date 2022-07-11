import { useContext } from 'react'
import { UserContext } from './UserContext'

export const User = () => {
    const UserContext = useContext(UserContext)
    const handleLogin = ()=> {
        if(UserContext){
            UserContext.setUser({
                name: 'kis',
                email: 'kishan@example.com',
            })
        }
    }
    const handleLogout = ()=> {
        if(userContext){
            UserContext.setUser(null)
        }
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is{UserContext.user?.name}</div>
            <div>user email is{UserContext.user?.email}</div>
        </div>
    )
}