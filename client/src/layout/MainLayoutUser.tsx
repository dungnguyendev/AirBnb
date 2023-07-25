
import React from 'react'
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom'
import Header from '../components/header/Header'

const MainLayoutUser = () => {
  return (
    <div>
      <Header />
      <div className='section__home__airbnb'>
        <div className='section__home__airbnb__1'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MainLayoutUser
