import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import React from "react";
import { Toaster } from "react-hot-toast";
import Header from "./Header";

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

const pages: { [key: string]: string, } = {
  '/': 'Home',
  '/about': 'About',
  '/work': 'Work',
  '/contact': 'Contact',
};

export default function Layout({ children, path }: { children: React.ReactNode, path: string }) {
  const page = pages[path];

  return (
    <>
      <Head>
        <title>{page + ' - Alexmo'}</title>
      </Head>
      <AnimatePresence>
        {page !== 'Home' && <Header page={page} />}
      </AnimatePresence>
      <Toaster containerClassName="uppercase" reverseOrder position="top-right" toastOptions={toasterOptions} />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main 
          key={path}
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          transition={{
            type: "linear",
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
