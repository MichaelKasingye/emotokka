import Head from 'next/head'
import { Inter } from '@next/font/google'
import Meta from '../src/Layouts/Meta'

import { Cards, CouroselComponent } from '../src/Components-UI'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <>
            <Meta
                title="Home-page"
                keywords="Car sale broker"
                description="Buy a car for you or family"
                image=""
                siteLink=""
            />
            <CouroselComponent />

            <div className="d-flex justify-content-center align-items-center flex-column p-3">
                <h2 className="fs-1">Hello there!</h2>
                <p>Come, buy the type of car you want from us.</p>
            </div>

            <div className=" d-flex justify-content-center align-items-center flex-wrap">
                <Cards title="Raum older model" />
                <Cards title="Raum newer model" />
            </div>
        </>
    )
}
