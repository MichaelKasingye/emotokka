import React from 'react'
import { FormModalComponent, ImagesModal } from '../../Components-UI'
import { currencyFormat } from '../../utils/currencyFormat'

interface CardsProps {
    title: string
}

export default function Cards({ title }: CardsProps) {
    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <img
                src="https://res.cloudinary.com/dgocgr4g5/image/upload/v1672562073/cars/Raum/2010%20t0%202020/BM762394_8_j96wuh.jpg"
                className="card-img-top"
                alt="..."
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ul>
                    <li>Yr - 2001/10</li>
                    <li>1500 cc</li>
                    <li>100,220 - 145,220 km</li>
                    <li>Bond New</li>
                    <li>{currencyFormat(23000000, 'UGX')}</li>
                </ul>
                {/* <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p> */}
                <div className="w-100 d-flex justify-content-between">
                    <FormModalComponent />
                    <ImagesModal />
                </div>
            </div>
        </div>
    )
}
