import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Menu({ link1 = '', link2 = '', link3 = '' }) {
  return (
    <div className="menu">
      <svg 
        className="w-full h-auto" 
        width="678" 
        height="689" 
        viewBox="0 0 678 689" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'linear',
            duration: 1,
          }}
        >
          <circle cx="225" cy="225" r="225" fill="white"/>
        </motion.g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'linear',
            delay: .4,
            duration: 1,
          }}
        >
          <circle cx="488" cy="403" r="190" fill="white"/>
          <path d="M336.75 288.5C374.5 240.963 416 224.5 450 217C452 256.5 442 296 422.5 332.5C403 369 373.65 398.5 337.4 420C323 409 314.094 404.599 298 398.3C300 349 316.5 314 336.75 288.5Z" fill="#3B302B"/>
        </motion.g>
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: 'linear',
            delay: .8,
            duration: 1,
          }}
        >
          <circle cx="246" cy="539" r="150" fill="white"/>
          <path d="M301 437C312.5 432.5 326.5 426 337.5 420C364.5 442 377.65 460.835 391 497C397.14 525.651 397.5 547.5 393 567.5C367.745 552.736 351.5 537 334.5 515C316.671 489.793 308.421 473.683 301 437Z" fill="#3B302B"/>
          <path d="M215.5 392C180.735 400.862 164.31 409.979 140 433C169.639 445.115 187 448 220.5 450C252.5 450 270 447 301 437C298.494 421.997 297.774 412.969 298 398.3C267 387.3 248.303 386.798 215.5 392Z" fill="#3B302B"/>
        </motion.g>
      </svg>
      <motion.div
        className="absolute h-full w-full top-0 left-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          delay: 1,
          duration: .7,
        }}
      >
        <Link id="link1" href="/work" className="link">
          <span>{link1}</span>
        </Link>
        <Link id="link2" href="/about" className="link">
          <span>{link2}</span>
        </Link>
        <Link id="link3" href="/contact" className="link">
          <span>{link3}</span>
        </Link>
      </motion.div>
    </div>
  )
}
