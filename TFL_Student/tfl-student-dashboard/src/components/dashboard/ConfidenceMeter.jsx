export default function ConfidenceMeter() {
  const confidence = [
    { name: 'Concepts', val: 70 },
    { name: 'Coding', val: 60 },
    { name: 'Debugging', val: 65 },
    { name: 'Interview', val: 40 },
  ];
  return (
    <div className="card mb-3">
      <div className="card-header">Confidence Meter</div>
      <div className="card-body">
        {confidence.map(c => (
          <div key={c.name} className="mb-2">
            <small>{c.name}</small>
            <div className="progress">
              <div className="progress-bar bg-info" style={{ width: c.val + '%' }}>{c.val}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}