import React from 'react'
import { Newad } from '../../Components/Business/Businesscomp/Newad'
import { Grid } from "@mui/material";
import StoresNavbar from '../../Components/Stores/StoresNavbar/StoresNavbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"

export const NewaddStores = () => {
  return (
    <div className='main-wrapper'>
    <Grid container>
                  <Grid item xs={12} sm={12} md={3} lg={2.7}>
                    <StoresNavbar />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={9}
                    lg={9.3}
                    className="right-panel-wrapper"
                  >
                    <Newad/>
                  </Grid>
                </Grid>
    </div>
    // <div><Newad/></div>
  )
}
