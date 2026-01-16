export default function Header() {
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between">
        <div>
          <h5>Student Name</h5>
          <small>Target Role: Full Stack Developer</small>
        </div>
        <div>
          <span className="badge bg-success me-2">Readiness: 68%</span>
          <span className="badge bg-warning text-dark">Confidence: Medium</span>
        </div>
      </div>
    </div>
  );
}