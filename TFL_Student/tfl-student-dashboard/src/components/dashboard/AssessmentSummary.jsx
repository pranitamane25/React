export default function AssessmentSummary() {
  return (
    <div className="card mb-3">
      <div className="card-header">Assessment Summary</div>
      <div className="card-body">
        <p>Last Assessment: Web API</p>
        <p>Score: 72%</p>
        <ul>
          <li>✔ REST understanding</li>
          <li>⚠ Improve error handling</li>
        </ul>
      </div>
    </div>
  );
}