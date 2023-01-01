import React from 'react'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'

interface FooterComponentProps {}

export default function FooterComponent({}: FooterComponentProps) {
    return (
        <div className="fs-2 d-flex justify-content-center p-5">
            <AiFillInstagram className="mx-3" />
            <AiFillYoutube />
        </div>
    )
}
