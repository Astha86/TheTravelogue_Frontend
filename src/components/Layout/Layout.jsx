import React from 'react'
import Header from '../Header/Header'
import Routers from '../../router/Routers'
import Footer from '../Footer/Footer'
import ChatAssistant from "../../ChatAssistant/ChatAssistant";

const Layout = () => {
  return (
    <>
      <Header/>
      <Routers/>
      <Footer/>      
      <ChatAssistant/>
    </>
  )
}

export default Layout
