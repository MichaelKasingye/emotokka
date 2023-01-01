import React from 'react'
import Meta from './Meta'

import { FooterComponentProps, NavigationBar } from '../Components-UI'

interface LayoutProps {
    children: any
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Meta
                title="EMOTOKKA"
                keywords="Car sale broker"
                description="Buy a car for you or family"
                image=""
                siteLink=""
            />
            <NavigationBar />

            <div style={{ margin: 'auto auto', maxWidth: '1400px' }}>
                {children}
            </div>

            <FooterComponentProps />
        </div>
    )
}
