import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import { Images } from '../../Components-UI'

interface ImagesModalProps {}

export default function ImagesModal({}: ImagesModalProps) {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        <div>
            <Button variant="secondary" onClick={handleShow}>
                Images
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Images</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center flex-wrap border border-2">
                        <Images
                            url="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562064/cars/Raum/2010%20t0%202020/BM762394_6_g5knap.jpg"
                            alt="car visual"
                        />
                        <Images
                            url="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562073/cars/Raum/2010%20t0%202020/BM762394_8_j96wuh.jpg"
                            alt="car visual"
                        />
                        <Images
                            url="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562081/cars/Raum/2010%20t0%202020/BM762394_4_kdvyip.jpg"
                            alt="car visual"
                        />
                        <Images
                            url="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562102/cars/Raum/2010%20t0%202020/BM762394_31_rwpre8.jpg"
                            alt="car visual"
                        />
                        <Images
                            url="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562115/cars/Raum/2010%20t0%202020/BM762394_26_cpopes.jpg"
                            alt="car visual"
                        />
                        <Images
                            url="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562128/cars/Raum/2010%20t0%202020/BM762394_28_mebxhj.jpg"
                            alt="car visual"
                        />
                        <Images
                            url="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562124/cars/Raum/2010%20t0%202020/BM762394_27_hz6mal.jpg"
                            alt="car visual"
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </div>
    )
}
