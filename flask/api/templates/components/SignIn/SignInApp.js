import React from "react";
import { Switch, Route} from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import forgotPassword from "./forgotPassword";

class SignInApp extends React.Component{

    render() {
        return(
            <Switch>
                <Route exact path='/SignIn' component={SignIn}/>
                <Route path='/SignIn/CreateAccount' component={SignUp}/>
                <Route path='/SignIn/ResetPassword' component={forgotPassword}/>
            </Switch>
        )
    }
}

export default SignInApp