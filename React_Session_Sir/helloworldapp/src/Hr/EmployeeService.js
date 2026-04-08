import React, { useEffect, useState } from "react";

function EmployeeService() {

  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5283/api/employees/get")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setEmployees(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Loading UI
  if (loading) {
    return <p className="text-center">Loading Employees.....</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">Employee List</h2>

      {/* Error UI */}
      {error && (
        <div className="alert alert-danger">
          Error: {error.message || error.toString()}
        </div>
      )}

      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email ID</th>
          </tr>
        </thead>

        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.emailId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Employees Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeService;