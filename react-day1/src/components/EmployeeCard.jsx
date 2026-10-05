function EmployeeCard({ name,role,experience,skills }) {
return (
    <div className="employee-card">
        
     <h2>{name}</h2>
       <p className="role">{role}</p>
        <p>Experience={experience} years </p>

        <h4>Skills</h4>
        <ul>
            {skills.map((skill,index)=>(
                <li key={index}>{skill}</li>

            ))}
        </ul>
    </div>
  );
}

export default EmployeeCard;