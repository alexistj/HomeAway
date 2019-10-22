import React from 'react'
import ReviewPosts from "./ReviewPosts";

class Reviews extends React.Component{

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <h2> Reviews </h2>
                <ReviewPosts />
            </div>
        )
    }


}

export default Reviews