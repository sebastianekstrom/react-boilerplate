import React from 'react'
import {shallow} from 'enzyme'
import Header from '../../app/components/header'

describe('<Header />', () => {
  it('renders the component', () => {
    const wrapper = shallow(
      <Header/>
    )
    expect(wrapper.find('.app-header')).to.have.length(1)
  })
})
