import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const handleRegister =(e) =>{
        e.preventDefault();
        const email =e.target.email.value;
        const password =e.target.email.value;
        console.log(email, password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">Register now!</h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
             <form onSubmit={handleRegister}> 
             <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input name='email' type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input type="password" name='password'  className="input" placeholder="Password" />
                <div><a className="link link-hover">Forgot password?</a></div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              
             </form>
             <p>New to this website?Please <Link to="/login">Login</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;