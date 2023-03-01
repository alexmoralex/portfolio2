import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import content from 'data/content'

const toasterOptions = {
  style: {
    padding: '16px',
    color: 'rgb(47, 40, 37)',
    minWidth: '250px',
    borderRadius: '0.5rem',
    fontWeight: '600',
  },
  iconTheme: {
    primary: 'rgb(47, 40, 37)',
    secondary: '#fff',
  },
  duration: 4000
}

export default function Layout({ children, path, locale }: { children: React.ReactNode, path: string, locale: string }) {
  const localeContent = content[locale]
  const page = content.pages[path];

  return (
    <>
      <Head>
        <title>{page + ' - Alexmo'}</title>
      </Head>
      <AnimatePresence>
        {page !== 'Home' && <Header page={page} />}
      </AnimatePresence>
      <Toaster containerClassName="uppercase" reverseOrder position="top-right" toastOptions={toasterOptions} />
      <AnimatePresence mode="wait">
        <motion.main 
          key={path}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{ type: 'linear' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
