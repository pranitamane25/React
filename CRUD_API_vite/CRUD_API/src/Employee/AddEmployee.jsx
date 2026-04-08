import React, { useState } from "react";

const AddEmployee = ({ refresh }) => {

    const [employee, setEmployee] = useState({
        firstName: "",
        lastName: "",
        emailId: ""
    });

    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    const saveEmployee = () => {
        fetch("http://localhost:5283/api/employees", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employee)
        }).then(() => {
            alert("Employee Added");
            refresh();
        });
    };

    return (
        <div>
            <h3>Add Employee</h3>

            <input name="firstName" placeholder="First Name" onChange={handleChange} />
            <input name="lastName" placeholder="Last Name" onChange={handleChange} />
            <input name="emailId" placeholder="Email" onChange={handleChange} />

            <button onClick={saveEmployee}>Save</button>
        </div>
    );
};

export default AddEmployee;