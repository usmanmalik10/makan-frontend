import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { About } from "./Pages/Aboutus/About";
import { Services } from "./Pages/Services/Services";
// import { Ourteam } from "./Pages/Ourteam/Ourteam";
import { Realestate } from "./Pages/Realestate/Realestate";
import { Contactus } from "./Pages/Contactus/Contactus";
import { Login } from "./Components/Auth/login";
import { Signup } from "./Components/Auth/signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* Real Estate Routes*/ 
import { Forrent } from "./Pages/Realestatedashboard/Forrent";
import { Forsale } from "./Pages/Realestatedashboard/Forsale";
import { Plotssale } from "./Pages/Realestatedashboard/Plotssale";


 
/* User Side Routes*/  
import {Userprofile} from "./Pages/Userportal/Userprofile";
import {Orders} from "./Pages/Userportal/Orders";
import {Oldorders} from "./Pages/Userportal/Oldorders"


/* Busisness Routes*/
import { Newadd } from "./Pages/Businessportal/Newadd";
import { Activeadd } from "./Pages/Businessportal/Activeadd";
import { Businessprofile } from "./Pages/Businessportal/Businessprofile";

/* Services Routes*/
import { NewaddServices }  from "./Pages/Servicesportal/Newadd";
import  { ActiveaddServices }  from "./Pages/Servicesportal/Activeadd";
import { Servicesprofile } from './Pages/Servicesportal/Servicesprofile';



/* BUsisness Side Routes*/ 
import Layout from "./Routes/Layout";
import RequireAuth from "./Routes/RequireAuth";
import Unauthorized from "./Routes/Unauthorized";
import Missing from "./Routes/Missing";
import { Alldata } from "./Pages/Realestatedashboard/Alldata";
import { Adminprofile } from "./Pages/Adminportal/Adminprofile";
import { Businesses } from "./Pages/Adminportal/Businesses";
import { Users } from "./Pages/Adminportal/Users";
import { RealEstate } from "./Pages/Adminportal/Realestate";
import { Settings } from "./Pages/Adminportal/Settings";


const ROLES = {

  'Admin': 5150,
  'Realestate': 123,
  'Business': 124,
  'User': 2001,
}


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/services" element={<Services/>} />
        {/* <Route path="/ourteam" element={<Ourteam/>} /> */}
        <Route path="/realestate" element={<Realestate/>} />
        <Route path="/contactus" element={<Contactus/>} />

        {/*//User*/}
        {/* <Route path="/user-register" element={<Usersignup />} />
        <Route path="/userprofile" element={<Userprofile />} />
        <Route path="/previousorders" element={<Oldorders />} />
        <Route path="/myorders" element={<Orders />} /> */}

        {/*//Realstate*/}
        {/* <Route path="/estate-register" element={<Estatesignup />} />
        <Route path="/estatealldata" element={<Alldata />} />
        <Route path="/forrent" element={<Forrent />} />
        <Route path="/forsale" element={<Forsale />} />
        <Route path="/plotssale" element={<Plotssale />} /> */}

        {/*//Business*/}

        <Route path="/business-profile" element={<Businessprofile />} />
        <Route path="/new-add" element={<Newadd />} />
        <Route path="/active-adds" element={<Activeadd />} />

        {/*//Services*/}

        <Route path="/services-profile" element={<Servicesprofile />} />
        <Route path="/new-add-services" element={<NewaddServices />} />
        <Route path="/active-adds-services" element={<ActiveaddServices />} />

        {/*//Stores*/}

        {/* <Route path="/stores-profile" element={<Storesprof />} />
        <Route path="/new-add" element={<Newadd />} />
        <Route path="/active-adds" element={<Activeadd />} /> */}
        

        {/*//Admin*/}

        {/* <Route path="/admin-profile" element={<Adminprofile />} />
        <Route path="/user-list" element={<Users />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/settings" element={<Settings />} /> */}


        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/profile" element={<Userprofile />} />
        <Route path="/previousorders" element={<Oldorders />} />
        <Route path="/myorders" element={<Orders />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Business]} />}>
        <Route path="/Business-profile" element={<Businessprofile />} />
        <Route path="/new-add" element={<Newadd />} />
        <Route path="/active-adds" element={<Activeadd />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Realestate]} />}>
        <Route path="/estatealldata" element={<Alldata />} />
        <Route path="/forrent" element={<Forrent />} />
        <Route path="/forsale" element={<Forsale />} />
        <Route path="/plotssale" element={<Plotssale />} />
        </Route>


        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="/admin-profile" element={<Adminprofile />} />
        <Route path="/user-list" element={<Users />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/settings" element={<Settings />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
    <ToastContainer />
    </>
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
