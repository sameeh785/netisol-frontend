import React from 'react'
import EmployeNav from '../../components/nav/EmployeNav'
const EmployeDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <EmployeNav/>
        </div>
        <div className="col">
          <h4>Display Employe Data</h4>
        </div>

      </div>

    </div>
  )
}

export default EmployeDashboard;