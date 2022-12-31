import Form from 'components/form/Form';
import Layout from 'components/layout/Layout';
import Social from 'components/social/Social';

export default function Contact() {
  return (
    <Layout page="Contact">
      <div className="w-full max-w-4xl mx-auto px-4 mb-10">
        <div className="bg-white w-full p-8 rounded-lg">
          <Social />
          <Form />
        </div>
      </div>
    </Layout>
  )
}
