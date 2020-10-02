import React from 'react'
import { render, fireEvent } from '../testUtils'
import { Home } from '../../pages/index'
import { getByRole } from '@testing-library/react'

describe('Home page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Home />, {})
    expect(asFragment()).toMatchSnapshot()
  })

  it('page has a H1 element', () => {
    const { getByText } = render(<Home />, {})
  })
})
