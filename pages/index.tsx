import Menu from 'components/menu/Menu';
import content from 'data/content'

export default function Home({ locale }: { locale: string }) {
  const localeContent = content[locale]
  
  return (
    <div className="homepage">
      <div className="w-full md:w-1/2 text-black-coffee">
        <Menu 
          link1={localeContent.pages['/work']} 
          link2={localeContent.pages['/about']} 
          link3={localeContent.pages['/contact']} 
        />
      </div>
      <div className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left">
        <h1 className="text-4xl mb-3">Alejandro Morales</h1>
        <h2 className="text-2xl mb-10 md:mb-0">
          {localeContent.home.title1}<br/>
          {localeContent.home.title2}
        </h2>
      </div>
    </div>
  )
}
