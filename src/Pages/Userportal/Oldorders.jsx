import React from 'react'
import { Previousorders } from '../../Components/Userdashboard/Usercomponents/Previousorders'
import { Grid } from "@mui/material";
import UserNavbar from '../../Components/Userdashboard/UserNavbar/UserNavbar';
import "../../Components/Userdashboard/UserNavbar/userstyle.css"
import "../../App.css"

export const Oldorders = () => {
  return (
    <div className='main-wrapper'>
<Grid container>
              <Grid item xs={12} sm={12} md={3} lg={2.7}>
                <UserNavbar />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={9}
                lg={9.3}
                className="right-panel-wrapper"
              >
                <Previousorders />
              </Grid>
            </Grid>
</div>
    // <div><Previousorders /></div>
  )
}
