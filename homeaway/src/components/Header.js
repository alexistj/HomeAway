import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Logo from './logo.png';
import './Header.css';
import Reviews from "./Reviews";
import Home from "./Home";
import AboutUs from "./AboutUs";
import SignIn from "./SignIn";

class Header extends React.Component {

    render(){
        return(
            <Router>
                <div className="header">
                    <img src={Logo} alt="Logo" />
                    <div className="nav">
                        <ul>
                            <li>
                                <Link to="/"> Home </Link>
                            </li>
                            <li>
                                <Link to="/reviews"> Reviews </Link>
                            </li>
                            <li>
                                <Link to="/aboutUs"> About Us </Link>
                            </li>
                            <li>
                                <Link to="/signIn" className="signInBox"> Log-in / Sign-up </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/reviews" component={Reviews}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route path="/signIn" component={SignIn}/>
                </Switch>
            </Router>
        )
    }
}

export default Header