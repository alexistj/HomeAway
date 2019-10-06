import React from "react"
import './SignIn.css'

class SignUp extends React.Component{

    handleClick()
    {
        console.log("Tried Signing up")
    }

    render(){
        return(
            <div className="signup">
                <form>
                    <label htmlFor="fullName"><b>Full Name: </b></label>
                    <input type="text" placeholder="Full Name" name="fullName" required />
                    <br/>
                    <label htmlFor="email"><b>Email address: </b></label>
                    <input type="text" placeholder="Email address" name="email" required />
                    <br/>
                    <label htmlFor="password"><b>Password: </b></label>
                    <input type="password" placeholder="password" name="password" required />
                    <br/>
                    <label htmlFor="repeatPassword"><b>Renter Password: </b></label>
                    <input type="password" placeholder="password" name="repeatPassword" required />
                    <br/>
                    <button className="signUpButton" onClick={this.handleClick}>Sign-up</button>
                </form>
            </div>
        )
    }
}

export default SignUp