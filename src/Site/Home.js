import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

import Layout from '../Components/Layout/Layout';

function App() {
  return (
    <Fragment>
        <Helmet>
          <title>TheCodeClass</title>
        </Helmet>

    <Layout mainTitle = "Home">


    </Layout>
    </Fragment>
  );
}

export default React.memo(App);
