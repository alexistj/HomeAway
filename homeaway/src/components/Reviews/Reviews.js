import React from 'react'
import ReviewPosts from "./ReviewPosts";
import './Reviews.css';

class Reviews extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            displayPosts: false
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if(event.target.value != "0")
        {
            this.setState({displayPosts: true});
        }
        else
        {
            this.setState({displayPosts: false});
        }
    }

    render() {
        return (
            <div>
                <div style={{textAlign: "center"}}>
                    <select className="dropdown" onChange={this.handleChange}>
                        <option value="0">Select Your University</option>
                        <option value="1">Rensselaer Polytechnic Institute</option>
                    </select>
                </div>
                <ReviewPosts displayPosts={this.state.displayPosts}/>
            </div>
        )
    }


}

export default Reviews