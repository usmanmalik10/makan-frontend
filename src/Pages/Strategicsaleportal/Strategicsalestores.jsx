import React from 'react'
import { Grid } from "@mui/material";
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"
import StrategicNavbar from '../../Components/Strategicsalepartnerpanel/Navbar/StrategicNavbar';
import { Strategicstoresdata } from '../../Components/Strategicsalepartnerpanel/Strategiccomponents/Strategicstoresdata';

export const Strategicsalestores = () => {
  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                   <StrategicNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                    <Strategicstoresdata />
                  </Grid>
                </Grid>
    </div>
  )
}
