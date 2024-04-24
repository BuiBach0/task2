import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddForm from './AddForm';
export default function AddModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='buttonIcon'><svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_21_315)">
                    <path d="M12.6 12.375H1.39998C0.157481 12.375 -0.472519 13.8574 0.411231 14.7211L6.01123 20.2211C6.55811 20.7582 7.44623 20.7582 7.99311 20.2211L13.5931 14.7211C14.4681 13.8574 13.8425 12.375 12.6 12.375ZM6.99998 19.25L1.39998 13.75H12.6L6.99998 19.25ZM1.39998 9.625H12.6C13.8425 9.625 14.4725 8.14257 13.5887 7.2789L7.98873 1.7789C7.44186 1.24179 6.55373 1.24179 6.00686 1.7789L0.406856 7.2789C-0.468144 8.14257 0.157481 9.625 1.39998 9.625ZM6.99998 2.74999L12.6 8.24999H1.39998L6.99998 2.74999Z" fill="#FEAF00" />
                </g>
                <defs>
                    <clipPath id="clip0_21_315">
                        <rect width="14" height="22" fill="white" />
                    </clipPath>
                </defs>
            </svg>  <Button variant="primary" onClick={handleShow} className='btn'>
                    ADD NEW STUDENT
                </Button>
            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body><AddForm/></Modal.Body>
            </Modal>
        </div>
    )
}
