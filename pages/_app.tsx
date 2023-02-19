import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from 'components/layout/Layout'

export default function App({ Component, pageProps, router }: AppProps) {

  return (
    <>
      <Head>
        <meta name="description" content="Alejandro Morales, Fullstack Developer / Shopify Expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Layout path={router.asPath}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
