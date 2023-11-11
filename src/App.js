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
import { Allstores } from "./Pages/Stores/Allstores";

/* Admin Routes*/
import { Adminprofile } from "./Pages/Adminportal/Adminprofile";
import { Businesses } from "./Pages/Adminportal/Businesses";
import { Users } from "./Pages/Adminportal/Users";
import { RealEstate } from "./Pages/Adminportal/Realestate";
import { Settings } from "./Pages/Adminportal/Settings";
import { Adminstrategicsalepartner } from "./Pages/Adminportal/Adminstrategicsalepartner";
import { Adminallstrategicsalepartners } from "./Pages/Adminportal/Adminallstrategicsalepartners";



/* Real Estate Routes*/
import { Alldata } from "./Pages/Realestatedashboard/Alldata";
import { Forrent } from "./Pages/Realestatedashboard/Forrent";
import { Forsale } from "./Pages/Realestatedashboard/Forsale";
import { Plotssale } from "./Pages/Realestatedashboard/Plotssale";
import { PlotforRent } from "./Pages/Realestatedashboard/PlotforRent";

/* User Side Routes*/
import { Userprofile } from "./Pages/Userportal/Userprofile";
import { Orders } from "./Pages/Userportal/Orders";
import { Oldorders } from "./Pages/Userportal/Oldorders"

/* Services Routes*/
import { NewaddServices } from "./Pages/Servicesportal/NewaddServices";
import { ActiveaddServices } from "./Pages/Servicesportal/Activeadd";
import { Servicesprofile } from './Pages/Servicesportal/Servicesprofile';

/* Stores Routes*/
import { NewaddStores } from "./Pages/Storesportal/NewaddStores";
import { ActiveaddStores } from "./Pages/Storesportal/ActiveaddStores";
import { Storesprofile } from './Pages/Storesportal/Storesprofile';

/*Routes Navigations*/
import Layout from "./Routes/Layout";
import RequireAuth from "./Routes/RequireAuth";
import Unauthorized from "./Routes/Unauthorized";
import Missing from "./Routes/Missing";
import { ServiceDetailsGeneralComponent } from "./Components/Website/Servicedetails/ServiceDetailsGeneralComponent/ServiceDetailsGeneralComponent";
import { RealEstateDetailsGeneralComponent } from "./Components/Website/Realestate/RealEstateDetailsComponent";
import { AdminServiceDetailsGeneralComponent } from "./Components/adminpanel/Adminservices/AdminServicesGeneralComponent/AdminServicesGeneralComponent";
import { Strategicsaleprofile } from "./Pages/Strategicsaleportal/Strategicsaleprofile";
import { Strategicsalestores } from "./Pages/Strategicsaleportal/Strategicsalestores";
import { AdminStoresGeneralComponent } from "./Components/adminpanel/Adminstores/AdminStoresGeneralComponent/AdminStoresGeneralComponent";
import { NewadCopy } from "./Components/Stores/Storescomp/Newadcopy";
import NotRequiredAuth from "./Routes/NotRequireAuth";

//  Strategic Sales partners Routes  





const ROLES = {
  Admin: 'admin',
  User: 'user',
  Realestate: 'realEstate',
  Services: 'serviceProvider',
  Stores: 'shopKeeper',
  StrategicSalePartner: 'strategicSalePartner',
};
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* /* public routes  */}
          <Route element={<NotRequiredAuth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
            </Route>
     
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<Services />} />
           {/* <Route path="/ourteam" element={<Ourteam/>} />  */}
          <Route path="/realestate" element={<Realestate />} />
          <Route path="/realestate/:category/:subCategory" element={<RealEstateDetailsGeneralComponent/>} />

          <Route path="/contactus" element={<Contactus />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          
          <Route path="/service/:serviceSlug" element={<ServiceDetailsGeneralComponent/>} />
          <Route path="/all-stores" element={<Allstores />} />

          {/* /* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin-profile" element={<Adminprofile />} />
            <Route path="/user-list" element={<Users />} />
            <Route path="/strategic-sale-partner" element={<Adminstrategicsalepartner/>} />
            <Route path="/all-strategic-sale-partner" element={<Adminallstrategicsalepartners/>} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/admin-service/:category" element={<AdminServiceDetailsGeneralComponent />}/>

            {/* /* Admin stores routes starts */} 
            <Route path="/admin-store/:category" element={<AdminStoresGeneralComponent />}/>

           
            {/* /* Admin stores routes ends */}
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
          <Route element={<RequireAuth allowedRoles={[ROLES.StrategicSalePartner]} />}>
          <Route path="/strategic-sale-partner-profile" element={<Strategicsaleprofile/>}/>
          <Route path="/strategic-stores-data" element={<Strategicsalestores/>} />

          </Route>
         
          {/* /* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;