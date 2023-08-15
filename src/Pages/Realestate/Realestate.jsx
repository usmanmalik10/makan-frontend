import React from 'react'
import { Realestatehero } from '../../Components/Website/Realestate/Realestatehero'
import Header from '../../Components/Website/Header/Header'
import Footer from '../../Components/Website/Footer/Footer'

export const Realestate = () => {
  return (
    <div>
      <Header/>
        <Realestatehero />
        <Footer/>
    </div>
  )
}
