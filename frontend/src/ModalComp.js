import React from 'react';
import { Modal } from 'react-bootstrap';
import { Image } from './Image';

export class ModalComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
        this.setShow = this.setShow.bind(this);
    }

    setShow (e) {
        this.setState({show: e});
    }

    render() {
        return (
            <div className="modalcomp">
                <Image src="cocktail-de-champagne.jpeg" handleClick={() => this.setShow(true)} width="300" height="300" />

                <Modal
                    show={this.state.show}
                    onHide={() => this.setShow(false)}
                    dialogClassName="modal-90w"
                    keyboard="true"
                    scrollable="true"

                >
                    <Modal.Header closeButton>
                    <Modal.Title id="modal-title">
                        {this.props.title}
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <p>
                        {this.props.body}
                    </p>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}