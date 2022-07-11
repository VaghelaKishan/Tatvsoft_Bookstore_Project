import { useState } from "react"

 type AuthUser = {
    name: String
    email: String
 }

 export const User = () => {
    //const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    const handleLogin = () => {
        setUser({
            name:'vaghela',
            email: 'kishan@gmail.com',
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return(
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>user name is{user.name}</div>
            <div>user email is{user.email}</div>
        </div>
    )
 }