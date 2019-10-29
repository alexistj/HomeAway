import React from 'react'
import './Reviews.css'
import Default from "./defultPicture.png";

class ReviewPosts extends React.Component {

        constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if(!this.props.displayPosts){
            return <div></div>
        }
        else if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                    <li className='post' key={item.id} style={{backgroundColor: item.id % 2 === 0 ? "#a8d8ee" : "#f5f5f5"}}>
                        <div className="row">
                            <div className="column left">
                                <img src={Default} alt="Default" />
                            </div>

                            <div className="column middle">
                                <a href="#">{item.userId}123 school rd <br/> Troy, NY 12180</a> <br/>
                                <p>Price: $00.00 / month </p>
                                <p># bed | # bath | # sqft</p>
                            </div>

                            <div className="column right">
                                DefaultUsername &nbsp; <i>01/01/2000</i> &nbsp; &nbsp;
                                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star checked"></span>
                                <span className="fa fa-star"></span>
                                <span className="fa fa-star"></span>
                                <br/>

                                <p>{item.body}</p>
                            </div>
                        </div>
                    </li>
                    ))}
                </ul>
            );
        }
    }

}

export default ReviewPosts