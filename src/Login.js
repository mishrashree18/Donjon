import React from 'react';
import logo from './vector1.svg'; 

const Login = (props) => {

    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;


    return(
        
        
        
        <section className="section">
            <div class="navbar">
                <div class="navlogo">Write It</div>
            </div>
            <div className="whole">
            <div className="imagebox">
            <img src={logo} alt="Logo" />
            </div>
            
            <div className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign In</button>
                        <p>
                            Don't have an account? 
                            <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                        </>

                    ) : (
                        <>
                        <button onClick={handleSignup}>Sign Up</button>
                        <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign In</span></p>
                        </>
                    )}
                </div>


            </div>
            </div>
            </div>
            
        </section>
    )
}

export default Login;