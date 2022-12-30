import Link from 'next/link';
import Layout from 'components/layout/Layout';
import Big from 'public/svg/big.svg';

export default function Home() {
  return (
    <Layout page="Home">
      <div className="flex uppercase font-bold items-center min-h-screen max-w-7xl mx-auto px-8">
        <div className="w-1/2 relative text-black-coffee">
          <Link id="link1" href="/work" className="text-2xl absolute">
            <span>Work</span>
          </Link>
          <Link id="link2" href="/about" className="text-2xl absolute">
            <span>About</span>
          </Link>
          <Link id="link3" href="/contact" className="text-2xl absolute">
            <span>Contact</span>
          </Link>
          <Big className="w-full h-auto" />
        </div>
        <div className="w-1/2 pl-16">
          <h1 className="text-4xl mb-3">Alejandro Morales</h1>
          <h2 className="text-2xl">
            Fullstack Developer<br/>
            Shopify Expert
          </h2>
        </div>
      </div>
    </Layout>
  )
}
