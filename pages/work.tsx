import Grid from 'components/grid/Grid';
import brands from 'data/brands';
import companies from 'data/companies';
import content from 'data/content'
import { useEffect } from 'react';

export default function Work({ locale }: { locale: string }) {
  const localeContent = content[locale].work

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="uppercase">
      <Grid title={localeContent.companiesTitle} list={companies} />
      <Grid title={localeContent.brandsTitle} list={brands} />
    </section>
  )
}
