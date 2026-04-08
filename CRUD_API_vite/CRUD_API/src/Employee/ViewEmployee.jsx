import React from "react";

const ViewEmployee = ({ employee }) => {

    if (!employee) return <p>Select Employee</p>;

    return (
        <div>
            <h3>Employee Details</h3>

            <p>First Name: {employee.firstName}</p>
            <p>Last Name: {employee.lastName}</p>
            <p>Email: {employee.emailId}</p>
        </div>
    );
};

export default ViewEmployee;