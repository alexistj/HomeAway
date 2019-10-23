import React from 'react'
import './Reviews.css'
import Default from "./defultPicture";

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
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
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
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                    <li className='post' key={item.id} style={{backgroundColor: item.id % 2 === 0 ? "#a8d8ee" : "#f5f5f5"}}>
                        <img src={Default} alt="Default" />
                        {item.title}
                    </li>
                    ))}
                </ul>
            );
        }
    }

}

export default ReviewPosts