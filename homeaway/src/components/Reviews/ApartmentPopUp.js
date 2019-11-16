import React from 'react'
import './Reviews.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class ApartmentPopUp extends React.Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.props.sendData(false);
    }

    render() {
        return(
            <Modal show={this.props.show} onHide={this.handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <div className="column left">
                        <Modal.Title>123 school rd <br/> Troy, NY 12180</Modal.Title>
                    </div>

                    <div className="column middle">
                        <p>Landlord: John Smith</p>
                        <p>Contact: (000)000-0000</p>
                    </div>

                    <div className="column right" style={{textAlign: "right"}}>
                        <h6>Distance from School: 0.0 mi</h6>
                        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star checked"/>
                        <span className="fa fa-star"/>
                        <span className="fa fa-star"/>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <p> photos in slide show (carousel)</p>
                    <p> price and general information like square footage </p>
                    <p> paragraph from landlord if provided </p>
                    <p> list of reviews organized like prev page but just for this location </p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="light" onClick={this.handleClose}>Review this Location</Button>
                    <Button variant="primary" onClick={this.handleClose}>Save to Favorites</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ApartmentPopUp