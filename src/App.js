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
import { Servicearchitecture } from "./Components/Website/Servicedetails/Servicearchitecture/Servicearchitecture";
import { Servicesplumberone } from "./Components/Website/Servicedetails/Serviceplumb/Servicesplumberone";
import { Serviceengineer } from "./Components/Website/Servicedetails/Serviceengineer/Serviceengineer";
import { Servicecontractor } from "./Components/Website/Servicedetails/Servicecontractors/Servicecontractor";
import { Servicecarpenter } from "./Components/Website/Servicedetails/Servicecarpenter/Servicecarpenter";
import { Servicepainter } from "./Components/Website/Servicedetails/Servicepainter/Servicepainter";
import { Servicesteel } from "./Components/Website/Servicedetails/Servicesteelwelder/Servicesteel";
import { Serviceglassfixer } from "./Components/Website/Servicedetails/Serviceglassfixer/Serviceglassfixer";
import { Servicealuminum } from "./Components/Website/Servicedetails/Servicealuminum/Servicealuminum";
import { Servicemarble } from "./Components/Website/Servicedetails/Servicemarble/Servicemarble";
import { Servaccleaner } from "./Components/Website/Servicedetails/Serviceaccleaner/Servaccleaner";
import { Servactechnician } from "./Components/Website/Servicedetails/Serviceactechnician/Servactechnician";
import { Servboringworker } from "./Components/Website/Servicedetails/Serviceboringworkers/Servboringworker";
import { Servelectricengineer } from "./Components/Website/Servicedetails/Serviceelectricengineer/Servelectricengineer";
import { Servelectrician } from "./Components/Website/Servicedetails/Serviceelectrcian/Servelectrician";
import { Servgardener } from "./Components/Website/Servicedetails/Servicegardner/Servgardener";
import { Servglasscutting } from "./Components/Website/Servicedetails/Serviceglasscuttingpolish/Servglasscutting";
import { Servglasspainter } from "./Components/Website/Servicedetails/Serviceglasspainter/Servglasspainter";
import { Servglasspaper } from "./Components/Website/Servicedetails/Serviceglasspaperdesigner/Servglasspaper";
import { Servhousecleaner } from "./Components/Website/Servicedetails/Servicehousecleaner/Servhousecleaner";
import { Servinteriordesigner } from "./Components/Website/Servicedetails/Serviceinteriordesigner/Servinteriordesigner";
import { Servlandscape } from "./Components/Website/Servicedetails/Servicelandscape/Servlandscape";
import { Servleithmachine } from "./Components/Website/Servicedetails/Serviceleithmachine/Servleithmachine";
import { Servmarblepolish } from "./Components/Website/Servicedetails/Servicemarblepolish/Servmarblepolish";
import { Servmoldingworker } from "./Components/Website/Servicedetails/Servicemoldingworker/Servmoldingworker";
import { Servmason } from "./Components/Website/Servicedetails/Servicemason/Servmason";
import { Servpolishman } from "./Components/Website/Servicedetails/Servicepolishman/Servpolishman";
import { Servsteelpolish } from "./Components/Website/Servicedetails/Servicesteelpolish/Servsteelpolish";
import { Servwoodcutter } from "./Components/Website/Servicedetails/Servicewoodcutter/Servwoodcutter";
import { Servsolarinstaller } from "./Components/Website/Servicedetails/Servicesolarinstaller/Servsolarinstaller";
import { Servtermite } from "./Components/Website/Servicedetails/Servicetermite/Servtermite";

/* Admin Routes*/
import { Adminprofile } from "./Pages/Adminportal/Adminprofile";
import { Businesses } from "./Pages/Adminportal/Businesses";
import { Users } from "./Pages/Adminportal/Users";
import { RealEstate } from "./Pages/Adminportal/Realestate";
import { Settings } from "./Pages/Adminportal/Settings";
import { Adminmason } from "./Pages/Adminportal/Adminmason";
import { Adminmarbleortile } from "./Pages/Adminportal/Adminmarbleortile";
import { Adminplumber } from "./Pages/Adminportal/Adminplumber";
import { Admincontractor } from "./Pages/Adminportal/Admincontractor";
import { Adminengineer } from "./Pages/Adminportal/Adminengineers";
import { Adminarchitect } from "./Pages/Adminportal/Adminarchitect";

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
          <Route path="/services" element={<Services />} />
          {/* <Route path="/ourteam" element={<Ourteam/>} /> */}
          <Route path="/realestate" element={<Realestate />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="/service-architecture" element={<Servicearchitecture />}/>
          <Route path="/service-plumber" element={<Servicesplumberone />} />
          <Route path="/all-engineers" element={<Serviceengineer />} />
          <Route path="/all-contractors" element={<Servicecontractor />} />
          <Route path="/all=carpenter" element={<Servicecarpenter />} />
          <Route path="/all-painters" element={<Servicepainter />} />
          <Route path="/all-steelwelder" element={<Servicesteel />} />
          <Route path="/all-glassfixer" element={<Serviceglassfixer />} />
          <Route path="/all-aluminums" element={<Servicealuminum />} />
          <Route path="/all-marbles" element={<Servicemarble /> } />
          <Route path="/all-accleaner" element={<Servaccleaner />} />
          <Route path="/all-actechnician" element={<Servactechnician />} />
          <Route path="/all-boring" element={<Servboringworker />} />
          <Route path="/all-electricengineer" element={<Servelectricengineer />} />
          <Route path="/all-electrician" element={<Servelectrician />} />
          <Route path="/all-gardener" element={<Servgardener />} />
          <Route path="/all-glasscutting" element={<Servglasscutting />} />
          <Route path="/all-glasspainter" element={<Servglasspainter />} />
          <Route path="/all-glasspaper" element={<Servglasspaper />} />
          <Route path="/all-housecleaner" element={<Servhousecleaner />} />
          <Route path="/all-interiordesigners" element={<Servinteriordesigner />} />
          <Route path="/all-landscapearchitecture" element={<Servlandscape />} />
          <Route path="/all-leithmachine" element={<Servleithmachine />} />
          <Route path="/all-marblepolish" element={<Servmarblepolish/>} />
          <Route path="/all-moldingworker" element={<Servmoldingworker />} />
          <Route path="/all-masons" element={<Servmason />} />
          <Route path="/all-polishman" element={<Servpolishman />} />
          <Route path="/all-steelpolish" element={<Servsteelpolish />} />
          <Route path="/all-woodcutter" element={<Servwoodcutter />} />
          <Route path="/all-solarinstaller" element={<Servsolarinstaller />} />
          <Route path="/all-termitetreatment" element={<Servtermite />} />

          {/* we want to protect these routes */}
          <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
            <Route path="/admin-profile" element={<Adminprofile />} />
            <Route path="/user-list" element={<Users />} />
            <Route path="/businesses" element={<Businesses />} />
            <Route path="/real-estate" element={<RealEstate />} />
            <Route path="/settings" element={<Settings />} />
            {/* Admin services routes starts */}
            <Route path="/admin-mason" element={<Adminmason />}/>
            <Route path="/admin-marble-tile-fixer" element={<Adminmarbleortile />}/>
            <Route path="/admin-plumber" element={<Adminplumber />}/>
            <Route path="/admin-contractor" element={<Admincontractor />}/>
            <Route path="/admin-engineer" element={<Adminengineer />}/>
            <Route path="/admin-architect" element={<Adminarchitect />}/>

            <Route path="/admin-carpenter" element={<Adminarchitect />}/>
            <Route path="/admin-wood-cutter" element={<Adminarchitect />}/>
            <Route path="/admin-painter" element={<Adminarchitect />}/>
            <Route path="/admin-polish-man" element={<Adminarchitect />}/>
            <Route path="/admin-steel-fixer" element={<Adminarchitect />}/>
            <Route path="/admin-steel-polish" element={<Adminarchitect />}/>
            <Route path="/admin-welder" element={<Adminarchitect />}/>
            <Route path="/admin-molding-worker" element={<Adminarchitect />}/>
            <Route path="/admin-Leith-machine-operator" element={<Adminarchitect />}/>
            <Route path="/admin-aluminum-fixer" element={<Adminarchitect />}/>
            <Route path="/admin-glass-fixer" element={<Adminarchitect />}/>
            <Route path="/admin-glass-cutting-polish" element={<Adminarchitect />}/>
            <Route path="/admin-glass-painter" element={<Adminarchitect />}/>
            <Route path="/admin-glass-designer" element={<Adminarchitect />}/>
            <Route path="/admin-electrician" element={<Adminarchitect />}/>
            <Route path="/admin-ac-technician" element={<Adminarchitect />}/>
            <Route path="/admin-electric-engineer" element={<Adminarchitect />}/>
            <Route path="/admin-solar-installer" element={<Adminarchitect />}/>
            <Route path="/admin-boring-workers" element={<Adminarchitect />}/>
            <Route path="/admin-interior-designer" element={<Adminarchitect />}/>
            <Route path="/admin-termite-treatment" element={<Adminarchitect />}/>
            <Route path="/admin-gardener" element={<Adminarchitect />}/>
            <Route path="/admin-landscape-architect" element={<Adminarchitect />}/>
            <Route path="/admin-house-cleaner" element={<Adminarchitect />}/>
            {/* Admin services routes ends */}

            {/* Admin stores routes starts */}
            {/* Admin stores routes ends */}
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