import Layout from 'components/layout/Layout';
import Technologies from 'components/technologies/Technologies';
import Image from 'next/image';
import Link from 'next/link';

import AlejandroPic from 'public/img/alejandro.png';

export default function About() {
  return (
    <Layout page="About">
      <div className="w-full max-w-4xl mx-auto px-4 mb-10">
        <div className="p-8 text-2xl">
          <p className="mb-10">I’m Alejandro Morales, a Venezuelan electronics engineer turned into a programmer based in Dubai.</p>

          <div className="bg-pine-tree mx-auto w-48 mb-10">
            <div className="relative pb-full w-full">
              <Image src={AlejandroPic.src} alt="Alejandro Morales" loading="lazy" fill={true} />
            </div>
          </div>

          <p className="mb-10">I have 4+ years experience working in web development, using these technologies:</p>

          <div className="mb-10">
            <Technologies />
          </div>

          <p className="mb-10">I’ve been able to work in projects as a freelancer, with agencies, with bootcamps, and  part of the team of a brand.</p>

          <p className="mb-10">Always ready for the next challenging project to come.</p>

          <div className="flex justify-between text-lg mb-10">
            <Link href="/contact" className="btn">
              Contact me
            </Link>

            <Link href="/work" className="btn">
              Check my work
            </Link>
          </div>

          <p>
            This is the lastest design of my website,<br/> 
            <Link href="https://portfoliov1.itsalexmo.com/" target="_blank" className="underline">See previous design</Link>.
          </p>
        </div>
      </div>
    </Layout>
  )
}
