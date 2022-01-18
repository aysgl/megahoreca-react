import { useState } from 'react'
import { Modal } from 'react-bootstrap'

export default function SlickModal({ id, title }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Modal centered show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="img-fluid w-100 rounded" src={`https://picsum.photos/id/${id}/400/400`} />
            </Modal.Body>
        </Modal>
    )
}
