
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";
import { useState } from "react";

function App(){
   const[employeeCount,setEmployeeCount]=useState(3);

  return <div className="app">
    <h1>Employee Management</h1>
    <div className="employee-counter"/>
    <h2>Total Employees:{employeeCount}</h2>

    <button 
    onClick={()=>setEmployeeCount(employeeCount+1)} >
      Add Employee
    </button>

     <button 
    onClick={()=>setEmployeeCount(employeeCount - 1)} >
      Remove Employee
    </button>

      <div className="employee-container"></div>
    
    <EmployeeCard
    name="Pranita Mane"
    role="Software Engineer"
    experience="2 years"
    skills={["React","Node.js","Express.js"]}
    />

     <EmployeeCard
    name="kirti "
    role="Software tester"
    experience="3 years"
    skills={[".net","Node.js","Express.js"]}
    />
     <EmployeeCard
    name="nikita"
    role="Software developer"
    experience="4 years"
    skills={["AI","java","Express.js"]}
    />
  </div>
}

  export default App;
