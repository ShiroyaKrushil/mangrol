import './App.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navleft from './Components/Navleft';
import Navtop from './Components/Navtop';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './pages/Dashboard/Dashboard';

import Memberlist from './pages/Member/Memberlist';
import Addmember from './pages/Member/Addmember';
import Editmember from './pages/Member/Editmember';
import Viewmember from './pages/Member/Viewmember';

import DistrictList from './pages/District/DistrictList'
import Adddistrict from './pages/District/Adddistrict'
import Editdistrict from './pages/District/Editdistrict'
import Viewdistrict from './pages/District/Viewdistrict'

import Talukalist from './pages/Taluka/List'
import Talukaadd from './pages/Taluka/Add';
import Talukaedit from './pages/Taluka/Edit';
import Talukaview from './pages/Taluka/View';

import Zonelist from './pages/Zone/Zonelist';
import Addzone from './pages/Zone/Addzone';
import Editzone from './pages/Zone/Editzone';
import Viewzone from './pages/Zone/Viewzone';

import Businesstypelist from './pages/Business_type/Business_typelist'
import Addbusinesstype from './pages/Business_type/Addbusiness_type'
import Editbusinesstype from './pages/Business_type/Editbusiness_type'
import Viewbusinesstype from './pages/Business_type/Viewbusiness_type'

import Powersupplylist from './pages/Power_Supply/Powersupplylist'
import Addpowersupply from './pages/Power_Supply/Addpowersupply'
import Editpowersupply from './pages/Power_Supply/Editpowersupply';
import Viewpowersupply from './pages/Power_Supply/Viewpowersupply';

import Associationlist from './pages/Association/Associationlist';
import Addassociation from './pages/Association/Addassociation'
import Editassociation from './pages/Association/Editassociation';
import Viewassociation from './pages/Association/Viewassociation';

import Userlist from './pages/User/Userlist';
import Adduser from './pages/User/Adduser'
import Viewuser from './pages/User/Viewuser';

import Login from './pages/login/Login';


function App() {
  const [sidebar, setSidebar] = useState(true)

  const [isLogin, setIsLogin] = useState();


  useEffect(() => {
    setIsLogin(localStorage.getItem('token') && localStorage.getItem('token') != null ? true : false);
  }, [])
  return (
    <BrowserRouter>
      <ToastContainer/>
      {isLogin != null && <>
        {!isLogin && <Routes>
          <Route path='/' element={<Login loginHandler={(e) => setIsLogin(e)} />} />
        </Routes>}
        {isLogin &&
          <div className={`main ${sidebar ? 'msb-x' : ''}`}>
            <div className="msb" id="msb">
              <Navleft />
            </div>
            <div className="mcw">
              <Navtop side={setSidebar} sidebar={sidebar} />
              <Routes>
                <Route path='/' element={<Dashboard />} />
               
                <Route path="/memberlist" element={<Memberlist />} />
                <Route path="/addmember" element={<Addmember />} />
                <Route path="/editmember/:id" element={<Editmember />} />
                <Route path="/viewmember/:id" element={<Viewmember />} />
               
                <Route path="/districtlist" element={<DistrictList />} />
                <Route path="/adddistrict" element={<Adddistrict />} />
                <Route path="/editdistrict/:id" element={<Editdistrict />} />
                <Route path="/viewdistrict/:id" element={<Viewdistrict />} />
                
                <Route path="/talukalist" element={<Talukalist/>} />
                <Route path="/talukaadd" element={<Talukaadd />} />
                <Route path="/talukaedit/:id" element={<Talukaedit />} />
                <Route path="/talukaview/:id" element={<Talukaview />} />

                <Route path="/zonelist" element={<Zonelist />} />
                <Route path="/addzone" element={<Addzone />} />
                <Route path="/editzone/:id" element={<Editzone />} />
                <Route path="/viewzone/:id" element={<Viewzone />} />
                
                <Route path="/businesstypelist" element={<Businesstypelist />} />
                <Route path="/addbusinesstype" element={<Addbusinesstype />} />
                <Route path="/editbusinesstype/:id" element={<Editbusinesstype />} />
                <Route path="/viewbusinesstype/:id" element={<Viewbusinesstype />} />
               
                <Route path="/powersupplylist" element={<Powersupplylist />} />
                <Route path="/addpowersupply" element={<Addpowersupply />} />
                <Route path="/editpowersupply/:id" element={<Editpowersupply />} />
                <Route path="/viewpowersupply/:id" element={<Viewpowersupply />} />
                
                <Route path="/associationlist" element={<Associationlist />} />
                <Route path="/addassociation" element={<Addassociation />} />
                <Route path="/editassociation/:id" element={<Editassociation />} />
                <Route path="/viewassociation/:id" element={<Viewassociation />} />
               
                <Route path="/userlist" element={<Userlist />} />
                <Route path="/adduser" element={<Adduser />} />
                <Route path="/viewuser/:id" element={<Viewuser />} />



               
              </Routes>
            </div>
          </div>}
      </>}
    </BrowserRouter>
  );
}

export default App;
