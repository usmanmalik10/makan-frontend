import React from 'react'
import { Forrenthome } from '../../Components/Realestatepanel/Forrent/Forrenthome'
import { Grid } from "@mui/material";
import RealStateNavbar from '../../Components/Realestatepanel/Navbar/Navbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"

export const Forrent = () => {
  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                    <RealStateNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                    <Forrenthome />
                  </Grid>
                </Grid>
    </div>
    // <div>
    //     <Forrenthome />
    // </div>
  )
}
