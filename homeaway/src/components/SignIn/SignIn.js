import React from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css'


class SignIn extends React.Component{

    handleClick()
    {
        console.log("tried to log in")
    }

    render() {
        return(
            <div className="signin">
                <form>
                    <label htmlFor="userName"><b>Username/E-mail: </b></label>
                    <input type="text" placeholder="Enter Username" name="userName" required />
                    <br/>
                    <label htmlFor="password"><b>Password: </b></label>
                    <input type="password" placeholder="Enter password" name="password" required />
                    <br/>
                    <Link to="/SignIn/ResetPassword">Forgot Password</Link>
                    <br/>
                    <Link to="/SignIn/CreateAccount">Don't have an account Sign-up</Link>
                    <br/>
                    <button className="logInButton" onClick={this.handleClick}>Log-in</button>
                </form>
            </div>
        )
    }
}

export default SignIn