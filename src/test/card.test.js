import { shallow } from 'enzyme'
import React from 'react'
import Card from '../components/Card'

const wrapper = shallow(<Card />)

// console.log(wrapper)

it('expects to render Card component', () => {
    expect(wrapper.length).toMatchSnapshot()
})