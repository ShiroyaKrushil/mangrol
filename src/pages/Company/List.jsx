import React from "react";
import { Link } from "react-router-dom";

const List = () => {
  const data = [
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Active",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    },
    {
      Name: "jay",
      Email: "jay@gmail.com",
      Phone: "820006515",
      Status: "Dective",
    }
  ];

  return (
    <div className="container- px-5 mt-5">
      <div className="row">
        <h2 className="mb-4">Company</h2>
        <table class="table mt-5" >
          <thead>
            <tr className="text-center  fs-6">
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <>
                  <tr className="text-center fs-6">
                    <td>{item.Name}</td>
                    <td>{item.Email}</td>
                    <td>{item.Phone}</td>
                    <td>{item.Status}</td>
                    <td>
                      <Link to="/viewcompany">
                        <i class="fa-sharp fa-solid fa-eye text-black"></i>
                      </Link>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
