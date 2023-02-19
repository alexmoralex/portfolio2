import { motion } from "framer-motion";
import Link from "next/link";
import Small from "public/svg/small.svg";

export default function Header({ page }: { page: String }) {

  if (page === 'Home') return null;
  
  return (
    <motion.header>
      <Link href="/">
        <span>
          <Small width="30" height="31" className="h-auto" />
        </span>
      </Link>
      <h1>{page}</h1>
    </motion.header>
  )
}
