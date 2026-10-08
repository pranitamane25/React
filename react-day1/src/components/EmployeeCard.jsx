import { useState } from "react";

function EmployeeCard({ name,role,experience,skills }) {

    const[likes,setLikes]=useState(0);
    const[showSkills,setShowSkills]=useState(true);
    const[isAvailable,setIsAvailable]=useState(true);
   
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

        
 
         
    </div>
  );
}

export default EmployeeCard;