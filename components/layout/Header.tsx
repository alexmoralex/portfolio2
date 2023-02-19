import { motion } from "framer-motion";
import Link from "next/link";
import Small from "public/svg/small.svg";

export default function Header({ page }: { page: String }) {
  
  return (
    <motion.header
      initial={{ y: '-100%' }}
      animate={{ y: '0%' }}
      exit={{ y: '-100%' }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
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
