import React from 'react'
import ReviewPosts from "./ReviewPosts";
import './Reviews.css';

class Reviews extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div style={{textAlign: "center"}}>
                    <select className="dropdown">
                        <option value="0">Select Your University</option>
                        <option value="1">Rensselaer Polytechnic Institute</option>
                    </select>
                </div>
                <ReviewPosts />
            </div>
        )
    }


}

export default Reviews