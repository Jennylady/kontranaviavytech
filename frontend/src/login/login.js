import React, { useState } from 'react';
import './login.css'; 

function Login() {
  const [isSliding, setIsSliding] = useState(false);

  const handleSlide = () => {
    setIsSliding(!isSliding);
  };

  return (
    <div className={`container ${isSliding ? 'slide' : ''}`}>
      {/* Section de bienvenue */}
      <div className="welcomeSection">
        <h2>Bienvenue!</h2>
        <p>Vous n'avez pas de compte?</p>
        <button onClick={handleSlide}>S'inscrire</button>
      </div>

      {/* Section de login */}
      <div className="loginSection">
        <h2>Login</h2>
        <form>
          <div>
            <label>Username:</label>
            <input type="text" placeholder="Enter your username" />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
