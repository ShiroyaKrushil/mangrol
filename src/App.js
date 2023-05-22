import './App.scss';
import Navleft from './Components/Navleft';
import Navtop from './Components/Navtop';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './pages/Company/Company';
import Vehicle from './pages/Vehicle/Vehicle';
import Driver from './pages/Driver/Driver';
import Customer from './pages/Customer/Customer';
import Dashboard from './pages/Home/Dashboard';
import Advancepayment from './pages/AdvancePayment/Advancepayment';
import Driverattendance from './pages/DriverAttendance/Driverattendance';
import Drivergeolocation from './pages/DriverGeoLocation/Drivergeolocation';
import Expense from './pages/Expense/Expense';
import Expensecategory from './pages/ExpenseCategory/Expensecategory';
import Lead from './pages/Lead/Lead';
import Leadcategory from './pages/LeadCategory/Leadcategory';
import Site from './pages/Site/Site';
import Task from './pages/Task/Task';
import Taskcategory from './pages/TaskCategory/Taskcategory';
import Addcompany from './pages/Company/Add';
import Edit from './pages/Company/Edit';
import Viewcompany from './pages/Company/View';
import Addvehicle from './pages/Vehicle/Addvehicle';
import Viewvehicle from './pages/Vehicle/Viewvehicle';
import Editvehicle from './pages/Vehicle/Editvehicle';
import Viewdriver from './pages/Driver/Viewdriver';
import Adddriver from './pages/Driver/Adddriver';
import Editdriver from './pages/Driver/Editdriver';
import Viewcustomer from './pages/Customer/Viewcustomer';
import Addcustomer from './pages/Customer/Addcustomer';
import Editcustomer from './pages/Customer/Editcustomer';
import Viewdriverattendance from './pages/DriverAttendance/Viewdriverattendance';
import Adddriverattendance from './pages/DriverAttendance/Adddriverattendance';
import Editdriverattendance from './pages/DriverAttendance/Editdriverattendance';
import Viewdrivergeolocation from './pages/DriverGeoLocation/Viewdrivergeolocation';
import Adddrivergeolocation from './pages/DriverGeoLocation/Adddrivergeolocation';
import Editdrivergeolocation from './pages/DriverGeoLocation/Editdrivergeolocation';
import Addadvancepayment from './pages/AdvancePayment/Addadvancepayment';
import Viewadvancepayment from './pages/AdvancePayment/Viewadvancepayment';
import Editadvancepayment from './pages/AdvancePayment/Editadvancepayment';
import Viewtaskcategory from './pages/TaskCategory/Viewtaskcategory';
import Addtaskcategory from './pages/TaskCategory/Addtaskcategory';
import Edittaskcategory from './pages/TaskCategory/Edittaskcategory';
import Viewtask from './pages/Task/Viewtask'
import Addtask from './pages/Task/Addtask';
import Edittask from './pages/Task/Edittask';
import Viewexpensecategory from './pages/ExpenseCategory/Viewexpensecategory';
import Addexpensecategory from './pages/ExpenseCategory/Addexpensecategory';
import Editexpensecategory from './pages/ExpenseCategory/Editexpensecategory';
import Viewexpense from './pages/Expense/Viewexpense';
import Addexpense from './pages/Expense/Addexpense';
import Editexpense from './pages/Expense/Editexpense';
import Viewsite from './pages/Site/Viewsite';
import Addsite from './pages/Site/Addsite';
import Editsite from './pages/Site/Editsite';
import Viewleadcategory from './pages/LeadCategory/Viewleadcategory';
import Addleadcategory from './pages/LeadCategory/Addleadcategory';
import Editleadcategory from './pages/LeadCategory/Editleadcategory';
import Viewlead from './pages/Lead/Viewlead';
import Addlead from './pages/Lead/Addlead';
import Editlead from './pages/Lead/Editlead';

import Login from './pages/Home/login/Login';
import Signup from './pages/Home/signUp/Signup'

import Verification from './pages/Home/Verification/Verification';

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth, signOut } from "firebase/auth";
import app from "./firebase/firebase.config";
const googleprovider = new GoogleAuthProvider();
const auth = getAuth(app);

function App() {
  const [sidebar, setSidebar] = useState(true)

  const [user, setUser] = useState(null);

  const handlesignup = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggeduser = result.user;
        localStorage.setItem('user', loggeduser.email);

        console.log(loggeduser);
        setUser(loggeduser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    signOut(auth).then((result) => {
      console.log(result)
      setUser(null);
    }).catch((error) => {
      console.log(error);
    });

  }

  return (
    <div>
      <button type='button' onClick={handlesignup}>signUp</button>
      <BrowserRouter>{user ?
        <div className={`main ${sidebar ? 'msb-x' : ''}`}>
          <div className="msb" id="msb">
            {
              user && <Navleft email={user.email} displayName={user.displayName} photoURL={user.photoURL} logout={logout} />
            }
          </div>

          <div className="mcw">
            <Navtop side={setSidebar} sidebar={sidebar} />
            <Routes>
              
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />

              <Route path='/verification' element={<Verification />} />

              <Route path='/' element={<Dashboard />} />
              <Route path='/company' element={<Company />} />
              <Route path='/addcompany' element={<Addcompany />} />
              <Route path='/viewcompany' element={<Viewcompany />} />
              <Route path='/edit' element={<Edit />} />

              <Route path="/vehicle" element={<Vehicle />} />
              <Route path="/addvehicle" element={<Addvehicle />} />
              <Route path="/viewvehicle" element={<Viewvehicle />} />
              <Route path="/editvehicle" element={<Editvehicle />} />

              <Route path="/driver" element={<Driver />} />
              <Route path="/viewdriver" element={<Viewdriver />} />
              <Route path="/adddriver" element={<Adddriver />} />
              <Route path="/editdriver" element={<Editdriver />} />

              <Route path="/customer" element={<Customer />} />
              <Route path="/viewcustomer" element={<Viewcustomer />} />
              <Route path="/addcustomer" element={<Addcustomer />} />
              <Route path="/editcustomer" element={<Editcustomer />} />

              <Route path="/driverattendance" element={<Driverattendance />} />
              <Route path="/viewdriverattendance" element={<Viewdriverattendance />} />
              <Route path="/adddriverattendance" element={<Adddriverattendance />} />
              <Route path="/editdriverattendance" element={<Editdriverattendance />} />

              <Route path="/drivergeolocation" element={<Drivergeolocation />} />
              <Route path="/viewdrivergeolocation" element={<Viewdrivergeolocation />} />
              <Route path="/adddrivergeolocation" element={<Adddrivergeolocation />} />
              <Route path="/editdrivergeolocation" element={<Editdrivergeolocation />} />

              <Route path="/advancepayment" element={<Advancepayment />} />
              <Route path="/addadvancepayment" element={<Addadvancepayment />} />
              <Route path="/viewadvancepayment" element={<Viewadvancepayment />} />
              <Route path="/editadvancepayment" element={<Editadvancepayment />} />

              <Route path="/taskcategory" element={<Taskcategory />} />
              <Route path="/viewtaskcategory" element={<Viewtaskcategory />} />
              <Route path="/addtaskcategory" element={<Addtaskcategory />} />
              <Route path="/Edittaskcategory" element={<Edittaskcategory />} />

              <Route path="/task" element={<Task />} />
              <Route path="/viewtask" element={<Viewtask />} />
              <Route path="/addtask" element={<Addtask />} />
              <Route path="/edittask" element={<Edittask />} />

              <Route path="/expensecategory" element={<Expensecategory />} />
              <Route path="/viewexpensecategory" element={<Viewexpensecategory />} />
              <Route path="/addexpensecategory" element={<Addexpensecategory />} />
              <Route path="/editexpensecategory" element={<Editexpensecategory />} />

              <Route path="/expense" element={<Expense />} />
              <Route path="/viewexpense" element={<Viewexpense />} />
              <Route path="/addexpense" element={<Addexpense />} />
              <Route path="/editexpense" element={<Editexpense />} />

              <Route path="/site" element={<Site />} />
              <Route path="/viewsite" element={<Viewsite />} />
              <Route path="/addsite" element={<Addsite />} />
              <Route path="/editsite" element={<Editsite />} />

              <Route path="/leadcategory" element={<Leadcategory />} />
              <Route path="/viewleadcategory" element={<Viewleadcategory />} />
              <Route path="/addleadcategory" element={<Addleadcategory />} />
              <Route path="/editleadcategory" element={<Editleadcategory />} />

              <Route path="/lead" element={<Lead />} />
              <Route path="/viewlead" element={<Viewlead />} />
              <Route path="/addlead" element={<Addlead />} />
              <Route path="/editlead" element={<Editlead />} />
            </Routes>
          </div>
        </div> : <Signup />}

      </BrowserRouter>
    </div>
  );
}

export default App;
