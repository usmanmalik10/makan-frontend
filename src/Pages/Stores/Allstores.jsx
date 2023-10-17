import React, { useState } from 'react'
import { Herostores } from '../../Components/Website/Stores/Herostores'
import { Marblestore } from '../../Components/Website/Stores/Marblestore'
import { Bricksstore } from '../../Components/Website/Stores/Bricksstore'
import { Buildingmaterialstore } from '../../Components/Website/Stores/Buildingmaterialstore'
import { Ceramicstore } from '../../Components/Website/Stores/Ceramicstore'
import { Sanitarystore } from '../../Components/Website/Stores/Sanitarystore'
import { Boringstore } from '../../Components/Website/Stores/Boringstore'
import { Woodstore } from '../../Components/Website/Stores/Woodstore'
import { Timberstore } from '../../Components/Website/Stores/Timberstore'
import { Paintstore } from '../../Components/Website/Stores/Paintstore'
import { Steelstore } from '../../Components/Website/Stores/Steelstore'
import { Ironstore } from '../../Components/Website/Stores/Ironstore'
import { Aluminumstore } from '../../Components/Website/Stores/Aluminumstore'
import { Glassstore } from '../../Components/Website/Stores/Glassstore'
import { Hardwarestore } from '../../Components/Website/Stores/Hardwarestore'
import { Electronicsstore } from '../../Components/Website/Stores/Electronicsstore'
import { Electricstore } from '../../Components/Website/Stores/Electricstore'
import { Wallpanellingstore } from '../../Components/Website/Stores/Wallpanellingstore'
import { Solarsystemstore } from '../../Components/Website/Stores/Solarsystemstore'
import { Nurserystore } from '../../Components/Website/Stores/Nurserystore'
import { Concreteplantstore } from '../../Components/Website/Stores/Concreteplantstore'
import { Interiordecorationstore } from '../../Components/Website/Stores/Interiordecorationstore'
import { Termiteprotectionstore } from '../../Components/Website/Stores/Termiteprotectionstore'
import { Lightsstore } from '../../Components/Website/Stores/Lightsstore'
import { Furniturestore } from '../../Components/Website/Stores/Furniturestore'
import { Securitystore } from '../../Components/Website/Stores/Securitystore'
import Header from '../../Components/Website/Header/Header'
import Footer from '../../Components/Website/Footer/Footer'
import Pagination from '@mui/material/Pagination';



export const Allstores = () => {
  const itemsPerPage = 8; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Create an array of all your store components
  const storeComponents = [
      
       <Marblestore />,
       <Bricksstore />,
       <Buildingmaterialstore />,
       <Ceramicstore />,
       <Sanitarystore />,
       <Boringstore />,
       <Woodstore />,
       <Timberstore />,
       <Paintstore />,
       <Steelstore />,
       <Ironstore />,
       <Aluminumstore />,
       <Glassstore />,
       <Hardwarestore />,
       <Electronicsstore />,
       <Electricstore />,
       <Wallpanellingstore />,
       <Solarsystemstore />,
       <Nurserystore />,
       <Concreteplantstore />,
       <Interiordecorationstore />,
       <Termiteprotectionstore />,
       <Lightsstore />,
       <Furniturestore />,
       <Securitystore />
  ];

  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the store components to display on the current page
  const currentStoreComponents = storeComponents.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header />
      <Herostores />
      {currentStoreComponents.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    <div className='mt-4 mb-4 justify-content-center d-flex '>
    <Pagination
        count={Math.ceil(storeComponents.length / itemsPerPage)}
        page={currentPage}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
      />
    </div>
      <Footer />
    </>
  );
};
