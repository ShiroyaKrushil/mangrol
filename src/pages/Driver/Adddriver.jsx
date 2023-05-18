import React from 'react'
import { Link } from 'react-router-dom'

const Adddriver = () => {
  return (
    <div class="container mt-5">
      <div className="row">
        <div className="col-6">
          <h2>Add Driver</h2>
        </div>
        <div className="col-6">
          <Link
            to="/driver"
            className="px-4 py-2 rounded bg-primary float-end"
          >
            <i class="fa-solid fa-arrow-left"></i> Back
          </Link>
        </div>
      </div>
      <div class="row d-flex justify-content-center mt-5">
                  
      </div>
    </div>
  )
}

export default Adddriver
