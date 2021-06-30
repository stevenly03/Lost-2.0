import { useState } from 'react'

export default function Login(props:any) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('');;

  const handleSubmit = (event :any) => {
    event.preventDefault ();

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({user: { username, password}})
    })
    .then(response => response.json())
    .then(result => {
      if (result.error) {
        console.error(result.error)
      } else{
        localStorage.setItem('token', result.token);
        props.handleLogin()
      }
    })
    setUsername("")
    setPassword("")
  }

  return (
    <form className="form"onSubmit={handleSubmit}>

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
          <input type="submit" value="Login" className="button"/>
        </form>
  )
}
