import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';
import { Serviceshero } from '../../Components/Website/Services/Serviceshero'
import Header from '../../Components/Website/Header/Header'
import Footer from "../../Components/Website/Footer/Footer";
import { ServiceGeneralCardsComponent } from '../../Components/Website/Services/ServiceGeneralCards';
import { services } from '../../lib/servicesData';

export const Services = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Create an array of all your service components
  const serviceComponents =services.map((service) => {return (<ServiceGeneralCardsComponent category={service.category} title={service.title}></ServiceGeneralCardsComponent>) })
  

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
