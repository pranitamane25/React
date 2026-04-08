import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EmployeeService from "./EmployeeService";

function ViewEmployeeComponent() {

    const { id } = useParams(); // ✅ GET ID FROM URL
    const [employee, setEmployee] = useState({});


    useEffect(() => {
        const fetchEmployee=async()=>{
            try{
                if(!id) return;
                const response= await fetch(`http://localhost:5283/api/employee/${id}`);
                const data= await response.json();
                console.log("Fetched employee data:",data,"for ID:",id);
                setEmployee(data);

            }
            catch(error){
                console.error(error);
            }

        };
        fetchEmployee();
    },[id]);
    

    return (
        <div>
            <br />
            <div className="card col-md-6 offset-md-3">
                <h3 className="text-center">View Employee Details</h3>
                <div className="card-body">
                    
                    <div className="row">
                        <label>Employee First Name: </label>
                        <div>{employee.firstName}</div>
                    </div>

                    <div className="row">
                        <label>Employee Last Name: </label>
                        <div>{employee.lastName}</div>
                    </div>

                    <div className="row">
                        <label>Employee Email: </label>
                        <div>{employee.emailId}</div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ViewEmployeeComponent;