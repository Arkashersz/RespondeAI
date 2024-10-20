import dynamic from 'next/dynamic'
import React from 'react'
// import Mail from './mail'
const Mail = dynamic(() => {
  return import ('./mail')
}, {
  ssr: false
})

const MailDashBoard = () => {
  return (
    <Mail
      defaultLayout={[20, 32, 48]} navCollapsedSize={0} defaultCollapsed={false} />
  )
}

export default MailDashBoard
