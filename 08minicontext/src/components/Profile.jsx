import { useContext } from "react"
import React from 'react'
import UserContext from "../context/UserContext.js"


function Profile() {

    const {user} = useContext(UserContext)
    if(!user) return <div>Please login</div>
     return (
    <div>
        <h3>Welcome {user.username}</h3>
    </div>
  )
}

export default Profile