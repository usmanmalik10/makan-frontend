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

/* Admin stores imports starts */
import { Adminbuildingmaterial } from "./Pages/Adminportal/Adminbuildingmaterial";
import { Adminbrick } from "./Pages/Adminportal/Adminbrick";
import { Adminmarbleandtilestore } from "./Pages/Adminportal/Adminmarbleandtilestore";
import { Adminceramic } from "./Pages/Adminportal/Adminceramic";
import { Adminsanitary } from "./Pages/Adminportal/Adminsanitary";
import { Adminboringmaterial } from "./Pages/Adminportal/Adminboringmaterial";
import { Adminwood } from "./Pages/Adminportal/Adminwood";
import { Admintimber } from "./Pages/Adminportal/Admintimber";
import { Adminpaintstore } from "./Pages/Adminportal/Adminpaintstore";
import { Adminsteelstore } from "./Pages/Adminportal/Adminsteelstore";
import { Adminiron } from "./Pages/Adminportal/Adminiron";
import { Adminaluminumstore } from "./Pages/Adminportal/Adminaluminumstore";
import { Adminglassstore } from "./Pages/Adminportal/Adminglassstore";
import { Adminhardware } from "./Pages/Adminportal/Adminhardware";
import { Adminelectronic } from "./Pages/Adminportal/Adminelectronic";
import { Adminelectric } from "./Pages/Adminportal/Adminelectric";
import { Adminwallpanelling } from "./Pages/Adminportal/Adminwallpanelling";
import { Adminsolarsystem } from "./Pages/Adminportal/Adminsolarsystem";
import { Adminnursery } from "./Pages/Adminportal/Adminnursery";
import { Adminconcreteplant } from "./Pages/Adminportal/Adminconcreteplant";
import { Admininteriordecoration } from "./Pages/Adminportal/Admininteriordecoration";
import { Adminlight } from "./Pages/Adminportal/Adminlight";
import { Adminfurniture } from "./Pages/Adminportal/Adminfurniture";
import { Adminsecurity } from "./Pages/Adminportal/Adminsecurity";
import { Admintermiteprotection } from "./Pages/Adminportal/Admintermiteprotection";
/* Admin stores imports ends */

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
<<<<<<< HEAD
import { AdminServiceDetailsGeneralComponent } from "./Components/adminpanel/Adminservices/AdminServicesGeneralComponent/AdminServicesGeneralComponent";
=======
import { Strategicsaleprofile } from "./Pages/Strategicsaleportal/Strategicsaleprofile";
import { Strategicsalestores } from "./Pages/Strategicsaleportal/Strategicsalestores";
>>>>>>> 72419434f7967727d6397845afb19567ffad1757

//  Strategic Sales partners Routes  





const ROLES = {
  'Admin': 5150,
  'User': 2001,
  'Realestate': 123,
  'Services': 1346,
  'Stores': 1447,
  'Strategicsale' : 1570,
}

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* /* public routes  */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
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
            <Route path="/admin-building-material" element={<Adminbuildingmaterial />}/>
            <Route path="/admin-bricks" element={<Adminbrick />}/>
            <Route path="/admin-marble-tile" element={<Adminmarbleandtilestore />}/>
            <Route path="/admin-ceramics" element={<Adminceramic />}/>
            <Route path="/admin-sanitary" element={<Adminsanitary />}/>
            <Route path="/admin-boring-material" element={<Adminboringmaterial />}/>
            <Route path="/admin-wood" element={<Adminwood />}/>
            <Route path="/admin-timber" element={<Admintimber />}/>
            <Route path="/admin-paint" element={<Adminpaintstore />}/>
            <Route path="/admin-steel" element={<Adminsteelstore />}/>
            <Route path="/admin-iron" element={<Adminiron />}/>
            <Route path="/admin-aluminum" element={<Adminaluminumstore />}/>
            <Route path="/admin-glass" element={<Adminglassstore />}/>
            <Route path="/admin-hardware" element={<Adminhardware />}/>
            <Route path="/admin-electronics" element={<Adminelectronic />}/>
            <Route path="/admin-electric" element={<Adminelectric />}/>
            <Route path="/admin-wall-panelling" element={<Adminwallpanelling />}/>
            <Route path="/admin-solar-system" element={<Adminsolarsystem />}/>
            <Route path="/admin-nursery" element={<Adminnursery />}/>
            <Route path="/admin-concrete-plant" element={<Adminconcreteplant />}/>
            <Route path="/admin-interior-decoration" element={<Admininteriordecoration />}/>
            <Route path="/admin-lights" element={<Adminlight />}/>
            <Route path="/admin-furniture" element={<Adminfurniture />}/>
            <Route path="/admin-security" element={<Adminsecurity />}/>
            <Route path="/admin-termite-protection" element={<Admintermiteprotection />}/>
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

          <Route path="/strategic-sale-partner-profile" element={<Strategicsaleprofile/>}/>
          <Route path="/strategic-stores-data" element={<Strategicsalestores/>} />

          {/* /* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;