import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import { api } from "../../helper/api";
import Pagination from "../../Components/Pagination";
import {
  TiArrowSortedUp,
  TiArrowSortedDown,
  TiArrowUnsorted,
} from "react-icons/ti";
import { RiCloseCircleFill } from "react-icons/ri";
import { HiCheckCircle } from "react-icons/hi";

const Memberlist = () => {
  return (
    <div className="container- px-3 mt-5">
      <div className="row p-4">
        <div className="col-6">
          <h2>Member List</h2>
        </div>
        <div className="col-6">
          <Button
            name="Add"
            icon={<i class="fa-solid fa-plus p-1"></i>}
            link="/adddistrict"
            className="float-end"
          />
        </div>
      </div>

      <div className="row p-4">
        <table class="table mt-5">
          <thead>
            <tr className="text-center  fs-6">
              <th scope="col">#</th>
              <th scope="col">
                Date
                {/* <button
                  onClick={() => sortingHandler("name")}
                  style={{ border: "none", background: "none" }}
                >
                  {getSortIcon("name")}
                </button> */}
              </th>
              <th scope="col">
                MEMBERSHIP-NO
                {/* <button
                  onClick={() => sortingHandler("status")}
                  style={{ border: "none", background: "none" }}
                >
                  {getSortIcon("status")}
                </button> */}
              </th>
              <th scope="col">COMPANY-NAME</th>
              <th scope="col">Factory-Address</th>
              <th scope="col">Mobile-No</th>
              <th scope="col">Business-Type</th>
              <th scope="col">Power Supply</th>
              <th scope="col">Renewal-Date</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {/* <tbody>
            {district.map((item, index) => {
              return (
                <>
                  <tr className="text-center fs-6" key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>
                      <button className="fs-5" style={{border:'none',background:'none'}} onClick={() => editHandler(item)}>{item.status === true ? <HiCheckCircle className='focus:outline-none text-green-700 text-lg' /> : <RiCloseCircleFill className='focus:outline-none text-red-700 text-lg' />}</button>
                    </td>
                    <td>
                      <Link to={`/viewdistrict/${item._id}`}>
                        <i class="fa-sharp fa-solid fa-eye text-black"></i>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody> */}
        </table>
        {/* <Pagination
          setRecordPerPage={setRecordPerPage}
          pageCount={pageCount}
          onPaginationChange={onPaginationChange}
          currentPage={currentPage}
        /> */}
      </div>
    </div>
  );
};

export default Memberlist;
