import './App.css';
import Navleft from './Components/Navleft';
import Navtop from './Components/Navtop';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Company from './pages/Company/Company';
import Vehicle from './pages/Vehicle/Vehicle';
import Driver from './pages/Driver/Driver';
import Customer from './pages/Customer/Customer';
import Private from './pages/private';
import Dashboard from './pages/Home/Dashboard';
import Advancepayment from './pages/AdvancePayment/Advancepayment';
import Devicetoken from './pages/DeviceToken/Devicetoken';
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
import Viewcompany from './pages/Company/View';
import Addvehicle from './pages/Vehicle/Addvehicle';
import Viewvehicle from './pages/Vehicle/Viewvehicle';
import Viewdriver from './pages/Driver/Viewdriver';
import Adddriver from './pages/Driver/Adddriver';
import Viewcustomer from './pages/Customer/Viewcustomer';
import Addcustomer from './pages/Customer/Addcustomer';
import Viewdriverattendance from './pages/DriverAttendance/Viewdriverattendance';
import Adddriverattendance from './pages/DriverAttendance/Adddriverattendance';
import Viewdrivergeolocation from './pages/DriverGeoLocation/Viewdrivergeolocation';
import Adddrivergeolocation from './pages/DriverGeoLocation/Adddrivergeolocation';
import Addadvancepayment from './pages/AdvancePayment/Addadvancepayment';
import Viewadvancepayment from './pages/AdvancePayment/Viewadvancepayment';
import Viewtaskcategory from './pages/TaskCategory/Viewtaskcategory';
import Addtaskcategory from './pages/TaskCategory/Addtaskcategory';

function App() {
  const [sidebar, setSidebar] = useState(true)

  return (
    <div>
      <BrowserRouter>
        <div className={`main ${sidebar ? 'msb-x' : ''}`}>
          <div className="msb" id="msb">
            <Navleft />
          </div>

          <div className="mcw">
            <Navtop side={setSidebar} sidebar={sidebar}/>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/company' element={<Company />} />
              <Route path='/addcompany' element={<Addcompany />} />
              <Route path='/viewcompany' element={<Viewcompany />} />

              <Route path="/vehicle" element={<Vehicle />} />
              <Route path="/addvehicle" element={<Addvehicle />} />
              <Route path="/viewvehicle" element={<Viewvehicle />} />



              <Route path="/driver" element={<Driver />} />
              <Route path="/viewdriver" element={<Viewdriver />} />
              <Route path="/adddriver" element={<Adddriver />} />


              <Route path="/customer" element={<Customer />} />
              <Route path="/viewcustomer" element={<Viewcustomer />} />
              <Route path="/addcustomer" element={<Addcustomer />} />

              <Route path="/driverattendance" element={<Driverattendance />} />
              <Route path="/viewdriverattendance" element={<Viewdriverattendance />} />
              <Route path="/adddriverattendance" element={<Adddriverattendance />} />

              <Route path="/drivergeolocation" element={<Drivergeolocation />} />
              <Route path="/viewdrivergeolocation" element={<Viewdrivergeolocation />} />
              <Route path="/adddrivergeolocation" element={<Adddrivergeolocation />} />

              <Route path="/advancepayment" element={<Advancepayment />} />
              <Route path="/addadvancepayment" element={<Addadvancepayment />} />
              <Route path="/viewadvancepayment" element={<Viewadvancepayment />} />

              <Route path="/taskcategory" element={<Taskcategory />} />
              <Route path="/viewtaskcategory" element={<Viewtaskcategory />} />
              <Route path="/addtaskcategory" element={<Addtaskcategory />} />

              <Route path="/devicetoken" element={<Devicetoken />} />
              <Route path="/task" element={<Task />} />
              <Route path="/expensecategory" element={<Expensecategory />} />
              <Route path="/expense" element={<Expense />} />
              <Route path="/site" element={<Site />} />
              <Route path="/leadcategory" element={<Leadcategory />} />
              <Route path="/lead" element={<Lead />} />
              <Route path="/devicetoken" element={<Devicetoken />} />
            </Routes>
          </div>
        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
