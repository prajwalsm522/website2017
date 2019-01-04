import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../components/Layout';
import { StyledIndex } from '../components/styles/index-page';
import SEO from '../components/SEO';
import Footer from '../components/Footer';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const siteDescription = data.site.siteMetadata.description;

    return (
      <React.Fragment>
        <StyledIndex>
          <Layout location={this.props.location} title={siteTitle}>
            <SEO />
            <p>
              <i>Software Developer</i>
            </p>
            <nav>
              <p>
                <Link to="/projects">Projects</Link>
              </p>
              <p>
                <Link to="/writings">Writings</Link>
              </p>
            </nav>
          </Layout>
        </StyledIndex>
        <Footer />
      </React.Fragment>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
