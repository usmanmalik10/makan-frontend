import React from 'react'
import { Servicesaluminum } from '../../Components/Website/Services/Servicesaluminum'
import { Servicesarchitects } from '../../Components/Website/Services/Servicesarchitects'
import { Servicescarpenters } from '../../Components/Website/Services/Servicescarpenters'
import { Servicescontractors } from '../../Components/Website/Services/Servicescontractors'
import { ServicesEngineers } from '../../Components/Website/Services/ServicesEngineers'
import { Servicesglassfixers } from '../../Components/Website/Services/Servicesglassfixers'
import { Serviceshero } from '../../Components/Website/Services/Serviceshero'
import { Servicesmarbles } from '../../Components/Website/Services/Servicesmarbles'
import { Servicespainters } from '../../Components/Website/Services/Servicespainters'
import { Servicesplumber } from '../../Components/Website/Services/Servicesplumber'
import { Servicessteelwelders } from '../../Components/Website/Services/Servicessteelwelders'
import Header from '../../Components/Website/Header/Header'

export const Services = () => {
  return (
    <div>
        <Header/>
        <Serviceshero/>
        <Servicesarchitects />
        <Servicesplumber/>
        <ServicesEngineers />
        <Servicescontractors />
        <Servicescarpenters />
        <Servicespainters />
        <Servicessteelwelders/>
        <Servicesglassfixers />
        <Servicesaluminum />
        <Servicesmarbles />
        
    </div>
  )
}
