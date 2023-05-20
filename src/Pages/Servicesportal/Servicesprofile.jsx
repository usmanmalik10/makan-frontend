import React from 'react'
import { Servicesprof } from '../../Components/Services/Servicescomp/Servicesprof'
import { Grid } from "@mui/material";
import ServicesNavbar from '../../Components/Services/ServicesNavbar/ServicesNavbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"

export const Servicesprofile = () => {
  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                    <ServicesNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                    <Servicesprof />
                  </Grid>
                </Grid>
    </div>
    // <div><Businessprof /></div>
  )
}
