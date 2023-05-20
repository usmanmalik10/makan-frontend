import React from 'react'
import { Businessprof } from '../../Components/Business/Businesscomp/Businessprof'
import { Grid } from "@mui/material";
import BusinessNavbar from '../../Components/Business/BusinessNavbar/BusinessNavbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"

export const Businessprofile = () => {
  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                    <BusinessNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                    <Businessprof />
                  </Grid>
                </Grid>
    </div>
    // <div><Businessprof /></div>
  )
}
