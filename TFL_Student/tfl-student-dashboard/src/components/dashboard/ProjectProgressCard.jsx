export default function ProjectProgressCard() {
  return (
    <div className="card mb-3">
      <div className="card-header">Project Progress</div>
      <div className="card-body">
        <h6>E-Commerce API (65%)</h6>
        <ul>
          <li>✔ API Design</li>
          <li>✔ Database Schema</li>
          <li>✔ Authentication</li>
          <li>⏳ Exception Handling</li>
          <li>⏳ Deployment</li>
        </ul>
      </div>
    </div>
  );
}