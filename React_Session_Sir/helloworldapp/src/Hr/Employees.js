
import React,{useState,useEffect}from 'react';
import { useNavigate } from "react-router-dom";


const ListEmployeeComponent=()=>{
    const[employees, setEmployees] = useState([]);
    const navigate =useNavigate();

    useEffect(()=>{
        fetch("http://localhost:5283/api/employees/get")
        .then(res=>res.json())
        .then(data=>{
            setEmployees(data);
        });
    },[]);


    const deleteEmployee = (id)=>{
        fetch(`http://localhost:5283/api/employee/${id}`,{
            method:'DELETE'
        }).then(()=>{
            setEmployees(employees.filter(employee=>employee.id !==id));
        });
    };

   const viewEmployee = (id)=>{
   navigate(`/view-employee/${id}`);
};

 const editEmployee =(id)=>{
    navigate(`/edit-employee/${id}`);
 };
    
 const addEmployee = ()=>{
   navigate(`/add-employee`);
 };
        return(
           <div>
               <h2 className="text-center">Employee List</h2>
               <div className="row"> 
                   <button className="btn btn-primary" onClick={addEmployee}>
                        Add Employee
                    </button>
               </div>
               <div className="row">
                   <table className="table table-striped">
                       <thead>
                           <tr>
                               <th>Employee ID</th>
                               <th>Employee First Name</th>
                               <th>Employee Last Name</th>
                               <th>Employee Email Id</th>
                               <th>Actions</th>
                           </tr>
                       </thead>
                       <tbody>
                           {
                               employees.map(
                                   employee =>
                                   <tr key={employee.id}>
                                       <td>{employee.id}</td>
                                       <td>{employee.firstName}</td>
                                       <td>{employee.lastName}</td>
                                       <td>{employee.emailId}</td>
                                       <td>
                                           <button
                                           className="btn btn-info"
                                           onClick={()=>viewEmployee(employee.id)}>
                                            view
                                            </button>

                                            <button
                                            style={{marginLeft:"10px"}}
                                            className='btn btn-warning'
                                            onClick={()=>editEmployee(employee.id)}>
                                                edit
                                            </button>

                                            <button
                                            style={{marginLeft:"10px"}}
                                            className='btn btn-danger'
                                            onClick={()=>deleteEmployee(employee.id)}>
                                                Delete
                                            </button>
                                       </td>
                                   </tr>
                               )
                           }
                       </tbody>
                   </table>
               </div>
           </div>
        )
    }

export default ListEmployeeComponent;

