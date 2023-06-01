import React from "react";
import { api } from "../../helper/api";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [member, setMember] = useState([]);
  const [district,setDistrict] = useState([]);
  const [taluka,setTaluka] = useState([]);
  const [zone,setZone] = useState([]);
  const [business_types,setBusiness_types] = useState([]);
  const [power_supply,setPower_supply] = useState([]);
  const [association,setAssociation] = useState([]);
  const [user,setUser] = useState([]);

  const Member = async () => {
    let response = await api("member");
    if (response && response.status === 200) {
      setMember(response.data.total_records);
    } else {
      alert("error");
    }
    console.log(response)

  };


  const District = async () => {
    let response = await api("master/district");
    if (response && response.status === 200) {
      setDistrict(response.data.total_records);
    } else {
      alert("error");
    }
  };

  const Taluka = async () => {
    let response = await api("master/district");
    if (response && response.status === 200) {
      setTaluka(response.data.total_records);
    } else {
      alert("error");
    }
  };

  const Zone = async () => {
    let response = await api("master/zone");
    if (response && response.status === 200) {
      setZone(response.data.total_records);
    } else {
      alert("error");
    }
  };

  const Business_types = async () => {
    let response = await api("master/business_type");
    if (response && response.status === 200) {
      setBusiness_types(response.data.total_records);
    } else {
      alert("error");
    }
  };

  const Power_supply = async () => {
    let response = await api("master/Power_supply");
    if (response && response.status === 200) {
      setPower_supply(response.data.total_records);
    } else {
      alert("error");
    }
  };

  const Association = async () => {
    let response = await api("association/view");
    if (response && response.status === 200) {
      setAssociation(response.data.total_records);
    } else {
      alert("error");
    }
  };

  const User = async () => {
    let response = await api("user");
    if (response && response.status === 200) {
      setUser(response.data.total_records);
    } else {
      alert("error");
    }
  };
  

  useEffect(() => {
    Member();
    District();
    Taluka();
    Zone();
    Business_types();
    Power_supply();
    Association();
    User();
  }, []);

  return (
    <div>
      <div className="container py-5">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Member</p>
              {<span className="span text-center">{member}</span>}
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">District</p>
              <span className="span text-center">{district}</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Taluka</p>
              <span className="span text-center">{taluka}</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Zone</p>
              <span className="span text-center">{zone}</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Business Types</p>
              <span className="span text-center">{business_types}</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Power Supply</p>
              <span className="span text-center">{power_supply}</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">User</p>
              <span className="span text-center">{user}</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
