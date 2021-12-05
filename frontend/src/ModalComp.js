import React from 'react';
import { Modal } from 'react-bootstrap';
import { Image } from './Image';
import { Text } from './Text';

export class ModalComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
        };
    }

    setShow (e) {
        this.setState({show: e});
    }

    render() {
        return (
            <div className="modalcomp">
                <Image src={this.props.image} handleClick={() => this.setShow(true)} width="300" height="300" />
                <Text txt = {this.props.title} handleClick={() => this.setShow(true)}/>

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
                    <ul>
                        {this.props.body}
                    </ul>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}