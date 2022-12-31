import Layout from 'components/layout/Layout';
import Menu from 'components/menu/Menu';

export default function Home() {
  return (
    <Layout page="Home">
      <div className="flex flex-col-reverse md:flex-row uppercase font-bold items-center justify-center min-h-screen max-w-6xl mx-auto p-8">
        <div className="w-full md:w-1/2 text-black-coffee">
          <Menu />
        </div>
        <div className="w-full md:w-1/2 pl-0 md:pl-16 text-center md:text-left">
          <h1 className="text-4xl mb-3">Alejandro Morales</h1>
          <h2 className="text-2xl mb-10 md:mb-0">
            Fullstack Developer<br/>
            Shopify Expert
          </h2>
        </div>
      </div>
    </Layout>
  )
}
