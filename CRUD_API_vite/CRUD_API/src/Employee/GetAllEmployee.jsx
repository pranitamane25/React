import React, { useEffect, useState } from "react";

const GetAllEmployees = ({ onSelectEmployee }) => {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5283/api/employees/get")
            .then(res => res.json())
            .then(data => setEmployees(data));
    }, []);

    const deleteEmployee = (id) => {
        fetch(`http://localhost:5283/api/employees/${id}`, {
            method: "DELETE"
        }).then(() => {
            setEmployees(employees.filter(emp => emp.id !== id));
        });
    };

   

    return (
        <div>
            <h2>Employee List</h2>

            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map(emp => (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.firstName}</td>
                                <td>{emp.emailId}</td>

                                <td>
                                    <button onClick={() => onSelectEmployee(emp)}>
                                        View
                                    </button>

                                    <button onClick={() => deleteEmployee(emp.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default GetAllEmployees;