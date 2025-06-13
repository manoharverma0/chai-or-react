import React, { useContext } from 'react'
import UserContext from '../context/userContext'

function Profile() {
    const { User } = useContext(UserContext)
 
    if (!User) {
        return <div><h2>Please Login</h2></div>
    } else {
        return (<div><h2>Welcome {User.username}</h2> </div>)
    }
}

export default Profile