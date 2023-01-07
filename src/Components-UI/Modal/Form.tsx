import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

interface FormModalComponentProps {}

export default function FormModalComponent({}: FormModalComponentProps) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Buy Car
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Agent</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <Form>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                autoFocus
                            />
                            <Form.Label>Contact</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder="mobile number"
                                autoFocus
                            />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value="I would like to buy this Raum 2010"
                            />
                        </Form.Group>
                    </Form> */}
                    <div className="d-flex justify-content-between flex-wrap">
                        {' '}
                        <a href="mailto:emotokka@gmail.com">
                            emotokka@gmail.com
                        </a>
                        <br />
                        <a href="tel:+4733378901">Call: +4733378901</a>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
