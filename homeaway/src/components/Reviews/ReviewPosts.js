import React from 'react'
import './Reviews.css'
import Default from "./defultPicture.png";
import ApartmentPopUp from "./ApartmentPopUp";

class ReviewPosts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            error: null,
            isLoaded: false,
            items: []
        }

        this.handleClick = this.handleClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    //to pass information between parent and child classes and turn pop-up on and off
    getData(val) {
        this.setState({showModal: val})
    }

    handleClick() {
        this.setState({showModal: true})
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
                <div>
                    <ApartmentPopUp sendData={this.getData} show={this.state.showModal}/>
                    <ul>
                        {items.map(item => (
                        <li className='post' key={item.id} style={{backgroundColor: item.id % 2 === 0 ? "#a8d8ee" : "#f5f5f5"}}>
                            <div className="row">
                                <div className="column left">
                                    <img src={Default} alt="Default" />
                                </div>

                                <div className="column middle">
                                    <p style={{textDecorationLine: 'underline'}} onClick={this.handleClick}>
                                        {item.userId}123 school rd <br/> Troy, NY 12180
                                    </p>
                                    <p>Price: $00.00 / month </p>
                                    <p># bed | # bath | # sqft</p>
                                </div>

                                <div className="column right">
                                    DefaultUsername &nbsp; <i>01/01/2000</i> &nbsp; &nbsp;
                                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                                    <span className="fa fa-star checked"/>
                                    <span className="fa fa-star checked"/>
                                    <span className="fa fa-star checked"/>
                                    <span className="fa fa-star"/>
                                    <span className="fa fa-star"/>
                                    <br/>

                                    <p>{item.body}</p>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }

}

export default ReviewPosts