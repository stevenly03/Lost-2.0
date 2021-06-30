import React from 'react'
import { useState } from 'react'
export default function SignUpFormForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event:any) => {
    event.preventDefault ();

    console.log('username', username)
    console.log('password', password)

    fetch ('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({ user: { username, password} })
    })
    .then(response => response.json())
    .then(newUser => console.log(newUser))
    setUsername("")
    setPassword("")
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      
      <input  
        type="text" 
        name="username" 
        value={username}
        placeholder="Username"
        onChange={(event) => setUsername(event.target.value)}
        className="inputs"
        />
        
      <input 
        type="password" 
        name="password"
        value={password} 
        placeholder="Password"
        onChange= { (event) => setPassword(event.target.value)}
        className="inputs"
        />
      <input type="submit" value="Sign Up"className="button"/>
    </form>
  )
}
