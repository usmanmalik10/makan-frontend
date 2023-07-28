import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


/* Public Routes*/
import Home from "./Pages/Home/Home";
import { About } from "./Pages/Aboutus/About";
import { Services } from "./Pages/Services/Services";
// import { Ourteam } from "./Pages/Ourteam/Ourteam";
import { Realestate } from "./Pages/Realestate/Realestate";
import { Contactus } from "./Pages/Contactus/Contactus";
import { Login } from "./Components/Auth/login";
import { Signup } from "./Components/Auth/signup";

/* Admin Routes*/
import { Adminprofile } from "./Pages/Adminportal/Adminprofile";
import { Businesses } from "./Pages/Adminportal/Businesses";
import { Users } from "./Pages/Adminportal/Users";
import { RealEstate } from "./Pages/Adminportal/Realestate";
import { Settings } from "./Pages/Adminportal/Settings";

/* Real Estate Routes*/ 
import { Alldata } from "./Pages/Realestatedashboard/Alldata";
import { Forrent } from "./Pages/Realestatedashboard/Forrent";
import { Forsale } from "./Pages/Realestatedashboard/Forsale";
import { Plotssale } from "./Pages/Realestatedashboard/Plotssale";
import { PlotforRent } from "./Pages/Realestatedashboard/Plotforrent";
 
/* User Side Routes*/  
import {Userprofile} from "./Pages/Userportal/Userprofile";
import {Orders} from "./Pages/Userportal/Orders";
import {Oldorders} from "./Pages/Userportal/Oldorders"

/* Services Routes*/
import  NewaddServices   from "./Pages/Servicesportal/NewaddServices";
import  { ActiveaddServices }  from "./Pages/Servicesportal/Activeadd";
import { Servicesprofile } from './Pages/Servicesportal/Servicesprofile';

/* Stores Routes*/
import { NewaddStores }  from "./Pages/Storesportal/NewaddStores";
import  { ActiveaddStores }  from "./Pages/Storesportal/ActiveaddStores";
import { Storesprofile } from './Pages/Storesportal/Storesprofile';

/*Routes Navigations*/ 
import Layout from "./Routes/Layout";
import RequireAuth from "./Routes/RequireAuth";
import Unauthorized from "./Routes/Unauthorized";
import Missing from "./Routes/Missing";

const ROLES = {
  'Admin': 5150,
  'User': 2001,
  'Realestate': 123,
  'Services': 1346,
  'Stores': 1447,
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
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
        <Route path="/admin-profile" element={<Adminprofile />} />
        <Route path="/user-list" element={<Users />} />
        <Route path="/businesses" element={<Businesses />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/settings" element={<Settings />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
        <Route path="/user-profile" element={<Userprofile />} />
        <Route path="/previousorders" element={<Oldorders />} />
        <Route path="/myorders" element={<Orders />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Realestate]} />}>
        <Route path="/estatealldata" element={<Alldata />} />
        <Route path="/forrent" element={<Forrent />} />
        <Route path="/forsale" element={<Forsale />} />
        <Route path="/plotssale" element={<Plotssale />} />
        <Route path="/plotforrent" element={<PlotforRent />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Services]} />}>
        <Route path="/services-profile" element={<Servicesprofile />} />
        <Route path="/new-add-services" element={<NewaddServices />} />
        <Route path="/active-adds-services" element={<ActiveaddServices />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.Stores]} />}>
        <Route path="/stores-profile" element={<Storesprofile />} />
        <Route path="/new-add-stores" element={<NewaddStores />} />
        <Route path="/active-adds-stores" element={<ActiveaddStores />} />
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