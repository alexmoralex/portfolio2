import Form from 'components/form/Form';
import Layout from 'components/layout/Layout';
import Social from 'components/social/Social';

export default function Contact() {
  return (
    <Layout key="contact" page="Contact">
      <section className="w-full max-w-4xl mx-auto px-4 flex flex-col justify-center">
        <div className="bg-white w-full p-8 rounded-lg">
          <Social />
          <Form />
        </div>
      </section>
    </Layout>
  )
}
