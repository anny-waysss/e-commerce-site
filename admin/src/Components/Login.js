import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 

const LoginWithNavbar = () => {
  const navigate = useNavigate(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch('/adminLogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email, 
        password,
      }),
    });

    const data = await res.json();

    if (res.status === 201) {
      window.alert('Login Successful');
      localStorage.setItem('token', data.token);
      navigate('/'); 
    } else {
      window.alert('Invalid Credentials');
    }
  };

  return (
    <div>
      {}
      <Navbar handleSearch={() => {}} searchText="" setsearchText={() => {}} />

      <section>
        <div className="container mt-5">
          <div className='row'>
            <div className="col-sm-6 offset-md-3 offset-sm-1">
              <form onSubmit={handleLogin}> {}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your Email"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your Password"
                    required
                  />
                </div>

                <NavLink to='/register'>Not registered? Register here!</NavLink><br /><br />
                <button type="submit" className="btn btn-primary" id='login' name='login'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginWithNavbar;
