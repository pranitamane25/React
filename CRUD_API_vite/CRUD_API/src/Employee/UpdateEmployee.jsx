import React, { useState, useEffect } from "react";

const UpdateEmployee = ({ selectedEmployee, refresh }) => {

    const [employee, setEmployee] = useState({});

    useEffect(() => {
        if (selectedEmployee) {
            setEmployee(selectedEmployee);
        }
    }, [selectedEmployee]);

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const updateEmployee = () => {
        fetch(`http://localhost:5283/api/employees/${employee.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(() => {
            alert("Employee Updated");
            refresh();
        });
    };

    return (
        <div>
            <h3>Update Employee</h3>
             <input name="id" value={employee.id || ""} onChange={handleChange} />


            <input name="firstName" value={employee.firstName || ""} onChange={handleChange} />
            <input name="lastName" value={employee.lastName || ""} onChange={handleChange} />
            <input name="emailId" value={employee.emailId || ""} onChange={handleChange} />

            <button onClick={updateEmployee}>Update</button>
        </div>
    );
};

export default UpdateEmployee;