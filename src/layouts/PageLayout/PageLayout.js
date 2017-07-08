import React from 'react'
import TopNav from '../../components/common/TopNav'
import PropTypes from 'prop-types'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div>
    <TopNav />
    <div className='container text-center'>
      <div className='page-layout__viewport'>
        {children}
      </div>
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
