import Head from "next/head";
import React from "react";
import Header from "./Header";

export default function Layout({ children, page }: { children: React.ReactNode, page: String }) {
  return (
    <>
      <Head>
        <title>{page + ' - Alexmo'}</title>
      </Head>
      <Header page={page} />
      <main>
        {children}
      </main>
    </>
  )
}
