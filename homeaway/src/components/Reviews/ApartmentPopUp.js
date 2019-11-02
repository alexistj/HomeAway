import React from 'react'
import './Reviews.css';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/esm/Modal";

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
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p> information </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={this.handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ApartmentPopUp