import React from 'react'
import { FormModalComponent, ImagesModal } from '../../Components-UI'
import { currencyFormat } from '../../utils/currencyFormat'

interface CardsProps {
    data: any
    key:any
}

export default function Cards({ data, key }: CardsProps) {
    return (
        <div className="card m-2" style={{ width: '18rem' }} key={key}>
            <img
                src={data.images[0]}
                className="card-img-top"
                alt={`${data.name} visual`}
            />
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <ul>
                    <li>Year - 2001/10</li>
                    {/* <li>1500 cc</li> */}
                    {/* <li>100,220 - 145,220 km</li> */}
                    {/* <li>Bond New</li> */}
                    <li >Min Price:{" "}<span className='text-primary fw-bold'>{currencyFormat(data.minPrice, 'UGX')}</span></li>
                </ul>
                {/* <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </p> */}
                <div className="w-100 d-flex justify-content-between">
                    <FormModalComponent />
                    {/* <ImagesModal /> */}
                </div>
            </div>
        </div>
    )
}
