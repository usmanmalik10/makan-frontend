import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { About } from "./Pages/Aboutus/About";
import { Services } from "./Pages/Services/Services";
import { Ourteam } from "./Pages/Ourteam/Ourteam";
import { Realestate } from "./Pages/Realestate/Realestate";
import { Contactus } from "./Pages/Contactus/Contactus";
import Footer from "./Components/Website/Footer/Footer";

import { Grid } from "@mui/material";

/* Real Estate Routes*/ 
import Navbar from "./Components/Realestatepanel/Navbar/Navbar";
import { Forrent } from "./Pages/Realestatedashboard/Forrent";
import { Forsale } from "./Pages/Realestatedashboard/Forsale";
import { Plotssale } from "./Pages/Realestatedashboard/Plotssale";
import { Esatatealldata } from "./Components/Realestatepanel/Forrent/Esatatealldata";
import { Estatelogin } from "./Components/Realestatepanel/Estateauthscreen/Estatelogin";

 
/* User Side Routes*/  
import UserNavbar from "./Components/Userdashboard/UserNavbar/UserNavbar";
import {Userprofile} from "./Pages/Userportal/Userprofile";
import {Orders} from "./Pages/Userportal/Orders";
import {Oldorders} from "./Pages/Userportal/Oldorders"
import {Userlogin} from "./Components/Userdashboard/Userauthscreen/Userlogin"

/* Busisness Routes*/
import BusisnessNavbar from "./Components/Busisness/BusisnessNavbar/BusisnessNavbar"
import { Busisnesslogin } from "./Components/Busisness/Busisnessauthscreen/Busisnesslogin";
import { Newadd } from "./Pages/Busisnessportal/Newadd";
import { Activeadd } from "./Pages/Busisnessportal/Activeadd";
import { Busisnessprofile } from "./Pages/Busisnessportal/Busisnessprofile";
import { Paintstores } from "./Pages/Paintstores";
import {Busisnesssignup} from "./Components/Busisness/Busisnessauthscreen/Busisnesssignup"

/* BUsisness Side Routes*/ 

import Layout from "./Routes/Layout";
import RequireAuth from "./Routes/RequireAuth";
import Unauthorized from "./Routes/Unauthorized";
import Missing from "./Routes/Missing";

const ROLES = {

  'Admin': 5150,
  'Realestate': 123,
  'Business': 124,
  'User': 2001,
}


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="business-login" element={<Busisnesslogin />} />
        <Route path="business-register" element={<Busisnesssignup />} />
        <Route path="/" element={<Home />} />

        {/* <Route path="linkpage" element={<LinkPage />} /> */}
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Business]} />}>
          <Route path="/Busisnessprofile" element={<Busisnessprofile />} />
        </Route>

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route> */}


        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route> */}

        {/* <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route> */}

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;



// const ROLES = {

//   'Website': 1984,
//   'Admin': 5150,
//   'Realestate': 123,
//   'Business': 124,
//   'User': 2001,
//   // '': 125,
//   // '': 126,
//   // '': 127,
// }


// function App() {
//   const location = useLocation();
//   return (
//     <>

//     {/* Website Routes */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/aboutus" element={<About />} />
//         <Route path="/services" element={<Services/>} />
//         <Route path="/ourteam" element={<Ourteam/>} />
//         <Route path="/realestate" element={<Realestate/>} />
//         <Route path="/contactus" element={<Contactus/>} />
//         <Route path="/paintstores" element={<Paintstores/>} />
//         <Route path="/busisnesssignup" element={<Busisnesssignup />}/>
//       </Routes>
//       <Footer/>
      

//       {/* Real Estate Dashboard Routes */}


//       {/* <div className="App">
//         {location.pathname === "/Estatelogin" ? (
//           <Routes>
//             <Route path="/Estatelogin" element={<Estatelogin />} />
//           </Routes>
//         ) : (
//           <div className="main-wrapper">
//             <Grid container>
//               <Grid item xs={12} sm={12} md={3} lg={2.7}>
//                 <Navbar />
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={9}
//                 lg={9.3}
//                 className="right-panel-wrapper"
//               >
//                 <Routes>
//                   <Route path="/" element={<Esatatealldata />} />
//                   <Route path="/Forrent" element={<Forrent />} />
//                   <Route path="/Forsale" element={<Forsale />} />
//                   <Route path="/plotssale" element={<Plotssale />} />
//                 </Routes>
//               </Grid>
//             </Grid>
//           </div>
//         )}
//       </div> */}

//        {/* <div className="App">
//         {location.pathname === "/Userlogin" ? (
//           <Routes>
//             <Route path="/Userlogin" element={<Userlogin />} />
//           </Routes>
//         ) : (
//           <div className="main-wrapper">
//             <Grid container>
//               <Grid item xs={12} sm={12} md={3} lg={2.7}>
//                 <UserNavbar />
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={9}
//                 lg={9.3}
//                 className="right-panel-wrapper"
//               >
//                 <Routes>
//                   <Route path="/" element={<Userprofile />} />
//                   <Route path="/myorders" element={< Orders />} />
//                   <Route path="/previousorders" element={<Oldorders />} />
//                 </Routes>
//               </Grid>
//             </Grid>
//           </div>
//         )}
//       </div> */}



//           {/* Busisness Dashboard Routes */}


//             {/* <div className="App">
            
            
//         {location.pathname === "/Busisnesslogin" ? (
//           <Routes>
//             <Route path="/Busisnesslogin" element={<Busisnesslogin />} />
            
//           </Routes>
//         ) : (
//           <div className="main-wrapper">
//             <Grid container>
//               <Grid item xs={12} sm={12} md={3} lg={2.7}>
//                 <BusisnessNavbar />
//               </Grid>
//               <Grid
//                 item
//                 xs={12}
//                 sm={12}
//                 md={9}
//                 lg={9.3}
//                 className="right-panel-wrapper"
//               >
//                 <Routes>
//                   <Route path="/" element={<Busisnessprofile />} />
//                   <Route path="/Newadd" element={<Newadd />} />
//                   <Route path="/Activeadds" element={<Activeadd />} /> 
                  
//                 </Routes>
//               </Grid>
//             </Grid>
            
//           </div>
//         )}
//        </div>  */}


//     </>
//   );
// }

// export default App;
