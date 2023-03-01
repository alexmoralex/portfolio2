import Form from 'components/form/Form';
import Social from 'components/social/Social';
import content from 'data/content'

export default function Contact({ locale }: { locale: string }) {
  const localeContent = content[locale]
  
  return (
    <section className="w-full max-w-4xl mx-auto px-4 flex flex-col justify-center">
      <div className="bg-white w-full p-8 rounded-lg">
        <Social />
        <Form content={localeContent.contact} />
      </div>
    </section>
  )
}
