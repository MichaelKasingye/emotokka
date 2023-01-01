import React from 'react'

interface ImagesProps {
    url: string
    alt: string
}

export default function Images({ url, alt }: ImagesProps) {
    return (
        <div style={{ width: '23rem' }} className="m-1">
            <img src={url} alt={alt} className="w-100" />
        </div>
    )
}
