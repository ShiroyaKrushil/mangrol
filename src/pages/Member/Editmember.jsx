import React, { useEffect } from "react";
import Button from "../../Components/Button";
import Footer from "../../Components/Footer_two";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { useState } from "react";
import { api } from "../../helper/api";
import { useParams ,useNavigate} from "react-router-dom";
import Joi from "joi";
import { resetError, showError } from "../../helper/error";
import moment from "moment";

const Editmember = () => {
  const [representative, setRepresentative] = useState([
    { name: "", designation: "" },
  ]);
  const params = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [form_no, setForm_no] = useState("");
  const [company_name, setCompany_name] = useState("");
  const [zone, setZone] = useState("");
  const [block_no, setBlock_no] = useState("");
  const [plot_no, setPlot_no] = useState("");
  const [estate, setEstate] = useState("");
  const [gram_panchayat, setGram_panchayat] = useState("");
  const [district, setDistrict] = useState("");
  const [taluka, setTaluka] = useState("");
  const [office_address, setOffice_address] = useState("");
  const [mobile_no, setMobile_no] = useState("");
  const [alter_mobile_no, setAlter_mobile_no] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [gst_no, setgst_no] = useState("");
  const [business_type, setbusiness_type] = useState("");
  const [no_of_machine, setNo_of_machine] = useState("");
  const [male_workers, setMale_workers] = useState("");
  const [female_workers, setFemale_workers] = useState("");
  const [total_workers, setTotal_workers] = useState("");
  const [power_supply, setPower_supply] = useState("");
  const [remark, setRemark] = useState("");
  const [renewal_date, setRenewal_date] = useState("");

  const [businessTypeData, setBusinessTypeData] = useState([]);
  const [powerSupplyData, setPowerSupplyData] = useState([]);
  const [talukaData, setTalukaData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [zoneData, setZoneData] = useState([]);

  const saveHandler = async () => {
    resetError();
    let factoryAddress = {
      block_no: block_no,
      plot_no: plot_no,
      estate: estate,
      gram_panchayat: gram_panchayat,
      taluka: taluka,
      district: district,
    };
    let data = {
      _id: params.id,
      date: date,
      form_no: form_no,
      company_name: company_name,
      zone: zone,
      representative: representative,
      factory_address: factoryAddress,
      office_address: office_address,
      mobile_no: mobile_no,
      alt_mobile_no: alter_mobile_no,
      email_id: email,
      website: website,
      gst_no: gst_no,
      business_types: business_type,
      no_of_machine: no_of_machine,
      male_workers: male_workers,
      female_workers: female_workers,
      total_workers: total_workers,
      power_supply: power_supply,
      remark: remark,
      renewal_date: renewal_date,
    };

    const response = await api("member/edit", data);

    if (response && response.status === 200) {
      navigate(`/viewMember/${params.id}`);
    }
  };

  const fetchdata = async () => {
    let data = {
      _id: params.id,
      master_request: 1,
    };
    const response = await api("member/view", data);

    if (response && response.status === 200) {
      setForm_no(response.data.data?.form_no);
      setDate(moment(response.data.data?.date).format("yyyy-MM-DD"));
      setZone(response.data.data.zone?._id);
      setCompany_name(response.data.data?.company_name);
      setRepresentative(response.data.data?.representative);
      setBlock_no(response.data.data?.factory_address?.block_no);
      setPlot_no(response.data.data?.factory_address?.plot_no);
      setEstate(response.data.data?.factory_address?.estate);
      setGram_panchayat(response.data.data?.factory_address?.gram_panchayat);
      setTaluka(response.data.data?.factory_address?.taluka?._id);
      setDistrict(response.data.data?.factory_address?.district?._id);
      setOffice_address(response.data.data?.office_address);
      setMobile_no(response.data.data?.mobile_no);
      setAlter_mobile_no(response.data.data?.alt_mobile_no);
      setEmail(response.data.data?.email_id);
      setWebsite(response.data.data?.website);
      setgst_no(response.data.data?.gst_no);
      setbusiness_type(response.data.data?.business_types?._id);
      setNo_of_machine(response.data.data?.no_of_machine);
      setMale_workers(response.data.data?.male_workers);
      setFemale_workers(response.data.data?.female_workers);
      setTotal_workers(response.data.data?.total_workers);
      setPower_supply(response.data.data?.power_supply?._id);
      setRemark(response.data.data?.remark);
      setRenewal_date(
        moment(response.data.data?.renewal_date).format("yyyy-MM-DD")
      );
      setBusinessTypeData(response.data.master?.business_types);
      setPowerSupplyData(response.data.master?.power_supplys);
      setTalukaData(response.data.master?.talukas);
      setDistrictData(response.data.master?.districts);
      setZoneData(response.data.master?.zone);
      console.log(response.data.master?.zone);
    }
  };
  const addrepresentative = () => {
    setRepresentative([
      ...representative,
      {
        name: "",
        designation: "",
      },
    ]);
  };
  const removeInputFields = (index) => {
    let rows = [...representative];
    rows.splice(index, 1);
    setRepresentative(rows);
  };
  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const list = [...representative];
    list[index][name] = value;
    setRepresentative(list);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div class="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-md-6">
          <h2>Edit Member</h2>
        </div>
        <div className="col-md-6">
          <Button
            name="Back"
            icon={<i class="fa-solid fa-arrow-left"></i>}
            link="/memberlist"
          />
        </div>
      </div>
      <div class="row p-4 mt-5 d-flex justify-content-center align-items-center">
        <form className="p-4 mb-5">
          <div class="row">
            <div class="col-md-4">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Date*
              </label>
              <input
                type="date"
                className="form-control"
                name=""
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div class="col-md-4 mt-sm-3 mt-md-0">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Form-no
              </label>
              <input
                type="number"
                className="form-control"
                name=""
                id="form_no"
                placeholder="Form No."
                value={form_no}
                onChange={(e) => setForm_no(e.target.value)}
              />
            </div>
            <div class="col-md-4 mt-sm-3 mt-md-0">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Company-name*
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id="company_name"
                placeholder="Company Name"
                value={company_name}
                onChange={(e) => setCompany_name(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <h6 className="mb-3 fw-bold">
              Representatives*
              <span style={{ float: "right", color: "blue" }}>
                <button
                  type="button"
                  onClick={addrepresentative}
                  style={{ border: "none", background: "none", color: "blue" }}
                >
                  {representative.length !== 2 ? <FaPlusCircle /> : ""}
                </button>
              </span>
            </h6>
            {representative.map((data, index) => {
              return (
                <>
                  <div className="col-md-5 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      id={`representative_${index}_name`}
                      placeholder={`(${index + 1}) name`}
                      value={data.name}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                  <div className="col-md-5">
                    <input
                      type="text"
                      className="form-control"
                      id={`representative_${index}_designation`}
                      placeholder="Designation"
                      value={data.designation}
                      onChange={(e) => handleChange(index, e)}
                    />
                  </div>
                  <div className="col-md-2">
                    <span style={{ float: "right", color: "red" }}>
                      <button
                        type="button"
                        onClick={removeInputFields}
                        style={{
                          border: "none",
                          background: "none",
                          color: "red",
                        }}
                      >
                         {representative.length !== 1 ? <FaMinusCircle /> : ""}
                      </button>
                    </span>
                  </div>
                </>
              );
            })}
          </div>
          <div className="row mt-3">
            <div className="col-md-12">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Zone*
              </label>
              <select
                name=""
                id="zone"
                className="form-select"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
              >
                <option value="">Select Zone</option>
                {zoneData.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <label htmlFor="" className="fs-6 fw-bold">
              Factory Address*
            </label>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name=""
                id="factory_address_block_no"
                placeholder="Block No."
                value={block_no}
                onChange={(e) => setBlock_no(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name=""
                id="factory_address_plot_no"
                placeholder="Plot No."
                value={plot_no}
                onChange={(e) => setPlot_no(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <input
                type="text"
                className="form-control"
                name=""
                id="state"
                placeholder="Estate"
                value={estate}
                onChange={(e) => setEstate(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 mt-sm-0 mt-md-0">
              <input
                type="text"
                className="form-control"
                name=""
                id="gram_panchayat"
                placeholder="Gram Panchayat"
                value={gram_panchayat}
                onChange={(e) => setGram_panchayat(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <select
                name=""
                className="form-select"
                id="factory_address_district"
                onChange={(e) => setDistrict(e.target.value)}
                value={district}
              >
                <option value="Select District">Select District</option>
                {districtData.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <select
                name=""
                className="form-select"
                id="factory_address_taluka"
                onChange={(e) => setTaluka(e.target.value)}
                value={taluka}
              >
                <option value="Select Taluka">Select Taluka</option>
                {talukaData.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Office Address
              </label>
              <textarea
                name=""
                className="form-control"
                id=""
                cols="30"
                rows="1"
                placeholder="Office Address"
                value={office_address}
                onChange={(e) => setOffice_address(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="row mt-3">
            <label for="formGroupExampleInput" className="fs-6 fw-bold">
              Mobile No.*
            </label>
            <div className="col-md-6 mt-sm-0 mt-md-0">
              <input
                type="tenumberxt"
                className="form-control"
                name=""
                id="mobile_no"
                placeholder="Mobile No."
                value={mobile_no}
                onChange={(e) => setMobile_no(e.target.value)}
              />
            </div>
            <div className="col-md-6 mt-sm-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name=""
                id=""
                placeholder="Alter Mobile No."
                value={alter_mobile_no}
                onChange={(e) => setAlter_mobile_no(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 mt-sm-0 mt-md-0">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                name=""
                id=""
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Website
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                placeholder="Website"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                GST NO.
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id="gst_no"
                placeholder="GST NO."
                value={gst_no}
                onChange={(e) => setgst_no(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6 mt-sm-0 mt-md-0">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                Business Type
              </label>
              <select
                name=""
                id=""
                className="form-select"
                value={business_type}
                onChange={(e) => setbusiness_type(e.target.value)}
              >
                <option value="">Select Business Type</option>
                {businessTypeData.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="col-md-6 mt-sm-3 mt-md-0">
              <label for="formGroupExampleInput" className="fs-6 fw-bold">
                No. of Machine
              </label>
              <input
                type="number"
                className="form-control"
                name=""
                id=""
                value={no_of_machine}
                onChange={(e) => setNo_of_machine(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <label for="formGroupExampleInput" className="fs-6 fw-bold">
              No. of Worker
            </label>
            <div className="col-md-4 mt-sm-0 mt-md-0">
              <input
                type="number"
                className="form-control"
                name=""
                id=""
                placeholder="Male"
                value={male_workers}
                onChange={(e) => setMale_workers(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name=""
                id=""
                placeholder="Female"
                value={female_workers}
                onChange={(e) => setFemale_workers(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <input
                type="number"
                className="form-control"
                name=""
                id=""
                placeholder="Total"
                value={total_workers}
                onChange={(e) => setTotal_workers(e.target.value)}
              />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-4 mt-sm-0 mt-md-0">
              <label for="" className="fs-6 fw-bold">
                Power Supply
              </label>
              <select
                name=""
                id=""
                className="form-select"
                value={power_supply}
                onChange={(e) => setPower_supply(e.target.value)}
              >
                <option value="">Select Power Supply</option>
                {powerSupplyData.map((item) => {
                  return <option value={item._id}>{item.name}</option>;
                })}
              </select>
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <label for="" className="fs-6 fw-bold">
                Remark
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                placeholder="Remark"
                value={remark}
                onChange={(e) => setRemark(e.target.value)}
              />
            </div>
            <div className="col-md-4 mt-sm-3 mt-md-0">
              <label for="" className="fs-6 fw-bold">
                Renewal Date
              </label>
              <input
                type="date"
                className="form-control"
                name=""
                id=""
                value={renewal_date}
                onChange={(e) => setRenewal_date(e.target.value)}
              />
            </div>
          </div>
        </form>
        <div>
          <Footer add={saveHandler} />
        </div>
      </div>
    </div>
  );
};

export default Editmember;
