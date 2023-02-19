import Grid from 'components/grid/Grid';

import brands from 'data/brands';
import companies from 'data/companies';

import { useEffect } from 'react';

export default function Work({ locale }: { locale: string }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <section className="uppercase">
      <Grid title="I have worked for these companies" list={companies} />
      <Grid title="I have worked with these brands" list={brands} />
    </section>
  )
}
