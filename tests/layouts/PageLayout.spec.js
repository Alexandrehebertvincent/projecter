import React from 'react'
import PageLayout from 'layouts/PageLayout/PageLayout'
import TopNav from 'components/common/TopNav'
import { shallow } from 'enzyme'

describe('(Layout) PageLayout', () => {
  it('should have a top navbar', () => {
    shallow(<PageLayout />).should.contain(<TopNav />)
  })

  it('renders no more a project title', () => {
    shallow(<PageLayout />).should.not.contain(<h1 />)
  })

  it('renders its children inside of the viewport', () => {
    const Child = () => <h2>child</h2>
    shallow(
      <PageLayout>
        <Child />
      </PageLayout>
    )
      .find('.page-layout__viewport')
      .should.contain(<Child />)
  })
})
