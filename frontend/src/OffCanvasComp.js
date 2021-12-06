import React, {useState} from 'react';
import { Offcanvas } from 'react-bootstrap';
import { Image } from './Image';
import SpotifyApp from './SpotifyAPI/SpotifyApp';


export default function OffCanvasComp({ name, ...props }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Image src="./spotify-icon.svg" handleClick={handleShow} width="50rem" height="50rem" />
        <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>
                <Image src="./spotify-name.svg" width="100%" height="100%" handleClick={() => {}} />
            </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <SpotifyApp />
            </Offcanvas.Body>
        </Offcanvas>
        </>
    );
}
