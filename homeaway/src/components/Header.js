import React from 'react'
import Logo from './logo.png'

class Header extends React.Component {

    render(){
        return(
            <div className="header">
                <img src={Logo} alt="Logo" />
                <div className="nav">
                    <a href="">Home</a>
                    <a href="">Reviews</a>
                    <a href="">About Us</a>
                    <a href="" className="signInBox">Log-in/Sign-up</a>
                </div>
            </div>
        )
    }
}

export default Header