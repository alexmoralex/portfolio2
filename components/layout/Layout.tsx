import { motion } from "framer-motion";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
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

export default function Layout({ children, page }: { children: React.ReactNode, page: String }) {
  const [loading, setLoading] = useState(true)
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setLoading(true)
    }

    const handleStop = () => {
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  useEffect(() => {
    setLoading(false)
  }, [])

  return (
    <>
      <Head>
        <title>{page + ' - Alexmo'}</title>
      </Head>
      <Header page={page} />
      <Toaster containerClassName="uppercase" reverseOrder position="top-right" toastOptions={toasterOptions} />
      <motion.div>
        {children}
      </motion.div>
    </>
  )
}
