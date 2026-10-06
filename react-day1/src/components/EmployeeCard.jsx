import { useState } from "react";

function EmployeeCard({ name,role,experience,skills }) {

    const[likes,setLikes]=useState(0);
    const[showSkills,setShowSkills]=useState(true);
return (
    <div className="employee-card">
        
     <h2>{name}</h2>
       <p className="role">{role}</p>
        <p>Experience={experience} years </p>

        <div className="likes"></div>
        <span> ❤️{likes}</span>
        <button onClick={()=>setLikes(likes+1)}>
            Like
        </button>


        <h4>Skills</h4>
         {/* Show skills only when showSkills is true */}
            {showSkills && (
                <ul>
                    {skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            )}


        <button onClick={()=>setShowSkills(!showSkills)}
        >
            {showSkills? "Hide Skills":"Show Skills"}
            </button>
    </div>
  );
}

export default EmployeeCard;