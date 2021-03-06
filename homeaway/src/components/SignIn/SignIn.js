import React from 'react'
import { Link } from 'react-router-dom';
import './SignIn.css'


class SignIn extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            password: "",
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
}

    handleClick(event)
    {
        this.props.history.push("/");
    }

    handleChange(event)
    {
        const input = event.target.name;
        const value = event.target.value;
        this.setState({ [input]: value })
    }

    render() {
        return(
            <div className="signin">
                <form>
                    <label htmlFor="userName"><b>Username/E-mail: </b></label>
                    <input type="text" onChange={this.handleChange} placeholder="Enter Username" name="userName" required />
                    <br/>
                    <label htmlFor="password"><b>Password: </b></label>
                    <input type="password" onChange={this.handleChange} placeholder="Enter password" name="password" required />
                    <br/>
                    <Link to="/SignIn/ResetPassword">Forgot Password</Link>
                    <br/>
                    <Link to="/SignIn/CreateAccount">Don't have an account Sign-up</Link>
                    <br/>
                    <button className="signinbutton" onClick={this.handleClick}>Log-in</button>
                </form>
            </div>
        )
    }
}

export default SignIn