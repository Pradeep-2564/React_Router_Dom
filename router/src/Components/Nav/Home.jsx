import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
const Home = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmite = (e) =>{
    e.preventDefault();
    
    if(!username || !email || !password) {
      setError("All fields are required!");
    }
    else {
      setError("");
      alert('Login successfully!');
      setUsername('');
      setPassword('');
      setEmail('');
    }
  };

  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/about');
  }

  return (
    <div id='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmite}>
        <div id='user'>
          <label>Username</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div id='email'>
          <label>Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div id='password'>
          <label>Password</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        {error && <p id= 'form-error' >{ error }</p>}

        <div className="btn">
          <button type='submit'>Login</button>
        </div>
      </form>
      <button onClick={handleClick} style={{marginLeft:'77px'}}>Move to about page</button>
    </div>
  )
}

export default Home
