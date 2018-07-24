import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.css'
import'../css/main.css'
import AppLayout from '../components/appLayout'
import Content  from '../components/content'
import Footer from '../components/footer'
import  UnifiedLanding from '../components/headerNavWrapper'

const Layout = ({ children, data }) => (
  <AppLayout>
    <Helmet
      title={data.site.siteMetadata.title}
        meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      <UnifiedLanding/>
      <Content>
        {children()}
      </Content>
    <Footer/>
  </AppLayout>
)










Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
