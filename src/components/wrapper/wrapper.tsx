import { Header } from 'components'
// import CAPHeader from 'components/cap-header/cap-header'
import React from 'react'
import "./wrapper.scss"
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
