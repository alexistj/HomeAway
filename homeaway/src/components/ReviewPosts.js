import React from 'react'

class ReviewPosts extends React.Component {

        constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: []
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts/1")
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        item: result
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
                    <li key={this.state.item.id}> {this.state.item.title} </li>
                </ul>
            );
        }
    }

}

export default ReviewPosts