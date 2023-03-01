import Technologies from 'components/technologies/Technologies';
import Image from 'next/image';
import Link from 'next/link';
import content from 'data/content'
import AlejandroPic from 'public/img/alejandro.png';

export default function About({ locale }: { locale: string }) {
  const localeContent = content[locale].about

  return (
    <section className="w-full max-w-4xl mx-auto px-4">
      <div className="pl-4 pr-4 sm:pl-8 sm:pr-8 text-2xl text-center sm:text-left">
        <p className="mb-10">{localeContent.paragraph1}</p>

        <div className="bg-pine-tree mx-auto w-48 mb-10 rounded-lg">
          <div className="relative pb-full w-full">
            <Image src={AlejandroPic.src} alt="Alejandro Morales" loading="lazy" fill={true} />
          </div>
        </div>

        <p className="mb-10">{localeContent.paragraph2}</p>

        <div className="mb-10">
          <Technologies />
        </div>

        <p className="mb-10">{localeContent.paragraph3}</p>

        <p className="mb-10">{localeContent.paragraph4}</p>

        <div className="flex flex-col justify-between items-center text-lg mb-10 gap-5 sm:flex-row">
          <Link href="/contact" scroll={false} className="btn">
            {localeContent.contactButton}
          </Link>

          <Link href="/work" scroll={false} className="btn">
            {localeContent.workButton}
          </Link>
        </div>

        <p>
          {localeContent.paragraph5}<br/> 
          <Link href="https://portfoliov1.itsalexmo.com/" target="_blank" className="underline">{localeContent.portfolioButton}</Link>.
        </p>
      </div>
    </section>
  )
}
