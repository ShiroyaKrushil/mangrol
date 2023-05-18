import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="container-fluid py-5">
        <div className="row">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-md-3 col-sm-4 py-5 m-3 box ">
              <p className="text-center">Company</p>
              <span className="span text-center">10</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Vehicle</p>
              <span className="span text-center">50</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Driver</p>
              <span className="span text-center">50</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Customer</p>
              <span className="span text-center">100</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Task</p>
              <span className="span text-center">5</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">TaskCategory</p>
              <span className="span text-center">5</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Lead</p>
              <span className="span text-center">5</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">LeadCategory</p>
              <span className="span text-center">5</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Expense</p>
              <span className="span text-center">10</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">ExpenseCategory</p>
              <span className="span text-center">10</span>
            </div>
            <div className="col-md-3 col-sm-4 py-5 m-3 box">
              <p className="text-center">Site</p>
              <span className="span text-center">25</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
