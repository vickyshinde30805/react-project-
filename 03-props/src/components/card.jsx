import React from 'react'

const card = (props) => {
  return (
    <div> <div className="card">
        <img src={props.img} alt="Profile" />
        <h1>{props.user}</h1>
        <p >{props.age} years old</p>
        <button >MY PROFILE</button>
        
      </div></div>
    
  )
}

export default card