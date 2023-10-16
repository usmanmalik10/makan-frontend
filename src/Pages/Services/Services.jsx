import React, { useState } from 'react'



import Pagination from '@mui/material/Pagination';
// Import all your other service components here
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
import Footer from "../../Components/Website/Footer/Footer";
import { Servicesmason } from '../../Components/Website/Services/Servicesmason'
import { Servicewoodcutter } from '../../Components/Website/Services/Servicewoodcutter'
import { Servicepolishman } from '../../Components/Website/Services/Servicepolishman'
import { Servicestealwelder } from '../../Components/Website/Services/Servicestealwelder'
import { Servicesteelpolish } from '../../Components/Website/Services/Servicesteelpolish'
import { Moldingworkers } from '../../Components/Website/Services/Moldingworkers'
import { Leithmachineoperator } from '../../Components/Website/Services/Leithmachineoperator'
import { Glasscuttingpolish } from '../../Components/Website/Services/Glasscuttingpolish'
import { Glasspainter } from '../../Components/Website/Services/Glasspainter'
import { Glasspaperdesigner } from '../../Components/Website/Services/Glasspaperdesigner'
import { Electrician } from '../../Components/Website/Services/Electrician'
import { Actechnician } from '../../Components/Website/Services/Actechnician'
import { Electricengineer } from '../../Components/Website/Services/Electricengineer'
import { Solarinstaller } from '../../Components/Website/Services/Solarinstaller'
import { Boringworkers } from '../../Components/Website/Services/Boringworkers'
import { Interiordesigner } from '../../Components/Website/Services/Interiordesigner'
import { Termitetreatment } from '../../Components/Website/Services/Termitetreatment'
import { Landscapearchitect } from '../../Components/Website/Services/Landscapearchitect'
import { Housecleaner } from '../../Components/Website/Services/Housecleaner'
import { Accleaner } from '../../Components/Website/Services/Accleaner'
import { Marblepolish } from '../../Components/Website/Services/Marblepolish'
import { Gardener } from '../../Components/Website/Services/Gardener'

export const Services = () => {
  const itemsPerPage = 8; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Create an array of all your service components
  const serviceComponents = [
        <Servicesarchitects />,
        <Servicesplumber/>,
        <ServicesEngineers />,
        <Servicescontractors />,
        <Servicescarpenters />,
        <Servicespainters />,
        <Servicessteelwelders/>,
        <Servicesglassfixers />,
        <Servicesaluminum />,
        <Servicesmarbles />,
        <Servicesmason />,
        <Servicewoodcutter />,
        <Servicepolishman />,
        <Servicesteelpolish />,
        <Moldingworkers />,
        <Leithmachineoperator />,
        <Glasscuttingpolish />,
        <Glasspainter />,
        <Glasspaperdesigner />,
        <Electrician />,
        <Actechnician />,
        <Electricengineer />,
        <Solarinstaller />,
        <Boringworkers />,
        <Interiordesigner />,
        <Termitetreatment />,
        <Landscapearchitect />,
        <Gardener />,
        <Housecleaner />,
        <Accleaner />,
        <Marblepolish />
   
  ];

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the service components to display on the current page
  const currentServiceComponents = serviceComponents.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Header />
      <Serviceshero />
      {currentServiceComponents.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
     <div className='mt-4 d-flex justify-content-center mb-4'>
     <Pagination
        count={Math.ceil(serviceComponents.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
     </div>
      <Footer />
    </div>
  );
};
