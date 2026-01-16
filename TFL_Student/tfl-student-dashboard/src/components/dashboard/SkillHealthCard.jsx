export default function SkillHealthCard() {
  const skills = [
    { name: 'C#', val: 80 },
    { name: 'OOP', val: 65 },
    { name: 'ASP.NET Core', val: 55 },
    { name: 'SQL', val: 75 },
    { name: 'Git', val: 60 },
    { name: 'Cloud', val: 40 },
  ];
  return (
    <div className="card mb-3">
      <div className="card-header">Skill Health</div>
      <div className="card-body">
        {skills.map(skill => (
          <div key={skill.name} className="mb-2">
            <small>{skill.name}</small>
            <div className="progress">
              <div className="progress-bar" style={{ width: skill.val + '%' }}>{skill.val}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}