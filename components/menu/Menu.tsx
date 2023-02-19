import Link from 'next/link';
import Big from 'public/svg/big.svg';

export default function Menu() {
  return (
    <div className="menu">
      <Link id="link1" href="/work" className="link">
        <span>Work</span>
      </Link>
      <Link id="link2" href="/about" className="link">
        <span>About</span>
      </Link>
      <Link id="link3" href="/contact" className="link">
        <span>Contact</span>
      </Link>
      <Big className="w-full h-auto" />
    </div>
  )
}
