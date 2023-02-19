import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html>
        <Head />
        <body style={{backgroundColor: '#3B302B', color: '#fff'}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document