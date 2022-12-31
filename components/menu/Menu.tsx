import Link from 'next/link';
import Big from 'public/svg/big.svg';

export default function Menu() {
  return (
    <div className="relative">
      <Link id="link1" href="/work" className="text-4xl absolute">
        <span>Work</span>
      </Link>
      <Link id="link2" href="/about" className="text-3xl absolute">
        <span>About</span>
      </Link>
      <Link id="link3" href="/contact" className="text-2xl absolute">
        <span>Contact</span>
      </Link>
      <Big className="w-full h-auto" />
    </div>
  )
}
