import React from 'react'
import styled from '@emotion/styled'

const Header = styled.header({
  alignItems: 'center',
  background: '#fff',
  boxShadow: '0 1px 2px 0 rgba(60,64,67,0.3), 0 2px 6px 2px rgba(60,64,67,0.15)',
  color: '#202124',
  contain: 'layout',
  display: 'flex',
  fontSize: '14px',
  height: '64px',
  padding: '0 24px',
  width: '100%',
  zIndex: 200
})

const index = () => {
  return <Header>Header</Header>
}

export default index
