import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

interface CouroselComponentProps {}

export default function CouroselComponent({}: CouroselComponentProps) {
    return (
        <Carousel
            className="border border-4 overflow-hidden"
            style={{ maxHeight: '600px' }}
        >
            <Carousel.Item>
                <div>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                </div>
                {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
            </Carousel.Item>

            <Carousel.Item>
                <div>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2662194/pexels-photo-2662194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />
                </div>

                {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    )
}
//
