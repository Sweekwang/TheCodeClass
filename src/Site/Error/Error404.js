import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

import Layout from '../../Components/Layout/Layout';

function Error404() {
  return (
    <Fragment>
        <Helmet>
          <title> Page unavailable | TheCodeClass</title>
        </Helmet>

    <Layout mainTitle = "Home"
            downloadHref = "">
            <h1> Page cannot be found</h1>

    </Layout>
    </Fragment>
  );
}

export default React.memo(Error404);
