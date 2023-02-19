import Layout from 'components/layout/Layout';
import Grid from 'components/grid/Grid';

import brands from 'data/brands';
import companies from 'data/companies';

export default function Work() {

  return (
    <Layout key="work" page="Work">
      <section className="uppercase">
        <Grid title="I have worked for these companies" list={companies} />
        <Grid title="I have worked with these brands" list={brands} />
      </section>
    </Layout>
  )
}
