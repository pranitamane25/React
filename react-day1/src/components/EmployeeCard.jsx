import { useState } from "react";

function EmployeeCard({ name,role,experience,skills }) {

    const[likes,setLikes]=useState(0);
    const[showSkills,setShowSkills]=useState(true);
    const[isAvailable,setIsAvailable]=useState(true);
    const[employeeName,setEmployeeName]=useState("");
    const[employeeRole,setEmployeeRole]=useState("");
    const[employeeExperience,setEmployeeExperience]=useState("");

    return (
    <div className="employee-card">
        
     <h2>{name}</h2>
       <p className="role">{role}</p>
        <p>Experience={experience}  </p>

        <div className="likes">
        <span> ❤️ {likes}   </span>
        <button onClick={()=>setLikes(likes+1)}>
            Like
        </button>
        </div>


        <h4>Skills</h4>
         {/* Show skills only when showSkills is true */}
            {showSkills && (
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            )}


            <div className="skills-button">
            <button onClick={()=>setShowSkills(!showSkills)}>
            {showSkills? "Hide Skills":"Show Skills"}
            </button>
            </div>

           <div className="availability-button">
            <button onClick={()=>setIsAvailable(!isAvailable)}> 
            {isAvailable?"Available":"Not Available"}
            </button>
            </div>

            <input 
            type="text"
            placeholder="Enter Your Name: " 
            value={employeeName}
            onChange={(e)=>setEmployeeName(e.target.value)} 
            />

            <input 
            type="text"
            placeholder="Enter Your Role: " 
            value={employeeRole}
            onChange={(e)=>setEmployeeRole(e.target.value)} 
            />

            <input 
            type="number"
            placeholder="Enter Your Experience: " 
            value={employeeExperience}
            onChange={(e)=>setEmployeeExperience(e.target.value)} 
            />

            <p>Employee Name:{employeeName}</p>
            <p>Employee Role:{employeeRole}</p>
            <p>Employee Experience:{employeeExperience}</p>
    </div>
  );
}

export default EmployeeCard;