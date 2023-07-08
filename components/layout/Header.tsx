import { motion } from "framer-motion";
import Link from "next/link";
import Small from "public/svg/small.svg";

const homeTitles = ['Home', 'Inicio', 'Accueil']

export default function Header({ page }: { page: string }) {
  if (!page || homeTitles.includes(page)) return null;
  
  return (
    <motion.header
      initial={{ y: '-100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ 
        duration: 0.5,
        ease: 'easeOut'
      }}
    >
      <Link href="/">
        <span>
          <Small width="30" height="31" className="h-auto" />
        </span>
      </Link>
      <h1>{page}</h1>
    </motion.header>
  )
}
