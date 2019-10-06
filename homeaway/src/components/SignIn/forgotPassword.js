import React from "react";
import "./SignIn.css";

class forgotPassword extends React.Component{

    handleClick()
    {
        console.log("tried getting new password")
    }

    render()
    {
        return(
            <div className="password">
                <form>
                    <label htmlFor="email"><b>E-mail: </b></label>
                    <input type="text" placeholder="Enter email" name="email" required />
                    <br/>
                    <button className="newPasswordButton" onClick={this.handleClick}>Reset Password</button>
                </form>
            </div>
        )
    }
}

export default forgotPassword