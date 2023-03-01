import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from 'components/layout/Layout'

const domain = 'https://itsalexmo.com';

export default function App({ Component, pageProps, router }: AppProps) {
  const { locale = 'en', asPath = '/' } = router || {};
  const path = locale !== 'en' ? asPath.slice(3) : asPath

  return (
    <>
      <Head>
        <meta name="description" content="Alejandro Morales, Fullstack Developer / Shopify Expert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B302B" />

        <link rel="canonical" href={domain + asPath} />
        <link rel="alternate" href={domain + path} hreflang="x-default" />
        <link rel="alternate" href={domain + path} hreflang="en" />
        <link rel="alternate" href={domain + '/fr' + path} hreflang="fr" />
        <link rel="alternate" href={domain + '/es' + path} hreflang="es" />

        <meta property="og:site_name" content="Alexmo" />
        <meta property="og:url" content={domain + asPath} />
        <meta property="og:title" content="Alexmo Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Alejandro Morales, Fullstack Developer / Shopify Expert" />
        <meta property="og:image" content="/img/alexmo.jpg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:locale" content={locale} />
      </Head>
      <Layout path={asPath} locale={locale}>
        <Component {...pageProps} locale={locale} />
      </Layout>
    </>
  )
}
