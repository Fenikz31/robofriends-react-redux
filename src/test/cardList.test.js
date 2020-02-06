import { shallow } from 'enzyme'
import React from 'react'
import CardList from '../components/CardList'

// console.log(wrapper)

it('expects to render Card component', () => {
    const mockRobots = [{
        id:1,
        name: 'John Snow',
        username: 'YouKnowNothingJohnSnow',
        email: 'john.Stark@winterfell.snow'
    }]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})