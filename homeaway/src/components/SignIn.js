import React from 'react'

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
                    <input type="text" placeholder="Enter password" name="password" required />
                    <br/>
                    <a href="">Forgot Password</a>
                    <br/>
                    <a href="">Don't have an account Sign-up</a>
                    <br/>
                    <button className="logInButton" onClick={this.handleClick}>Log-in</button>
                </form>
            </div>
        )
    }
}

export default SignIn