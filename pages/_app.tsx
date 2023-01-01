import NextNProgress from 'nextjs-progressbar'
import type { AppProps } from 'next/app'

import Layout from '../src/Layouts/Layout'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <NextNProgress
                color="#DC3545"
                startPosition={0.3}
                stopDelayMs={200}
                height={10}
                showOnShallow={true}
            />
            <Component {...pageProps} />
        </Layout>
    )
}
