
// import CAPHeader from 'components/cap-header/cap-header'
import React from 'react'
import Header from './Header'

type Props = {
    children: React.ReactNode
}

const Wrapper:React.FC<Props> = ({children}) => {
  return (
    <Header>
          {children}
    </Header>
  )
}

export default Wrapper
