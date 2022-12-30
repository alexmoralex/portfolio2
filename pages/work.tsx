import Layout from 'components/layout/Layout';
import Grid from 'components/grid/Grid';

import brands from 'data/brands';
import companies from 'data/companies';

export default function Work() {

  return (
    <Layout page="Work">
      <Grid title="I have worked for these companies" list={companies} />
      <Grid title="I have worked with these brands" list={brands} />
    </Layout>
  )
}
