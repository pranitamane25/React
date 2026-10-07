import { useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {

    const [employeeCount, setEmployeeCount] = useState(3);

    const [search, setSearch] = useState("");

    const employees = [
        {
            id: 1,
            name: "Pranita Mane",
            role: "Software Engineer",
            experience: "2 years",
            skills: ["React", "Node.js", "Express.js"]
        },
        {
            id: 2,
            name: "Kirti",
            role: "Software Tester",
            experience: "3 years",
            skills: [".NET", "Node.js", "Express.js"]
        },
        {
            id: 3,
            name: "Nikita",
            role: "Software Developer",
            experience: "4 years",
            skills: ["AI", "Java", "Express.js"]
        }
    ];

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app">

            <h1>Employee Management</h1>

            {/* Employee Counter */}

            <div className="employee-counter">

                <h2>Total Employees: {employeeCount}</h2>

                <button
                    onClick={() => setEmployeeCount(employeeCount + 1)}
                >
                    Add Employee
                </button>

                <button
                    onClick={() => {
                        if (employeeCount > 0) {
                            setEmployeeCount(employeeCount - 1);
                        }
                    }}
                >
                    Remove Employee
                </button>

            </div>

            {/* Search */}

            <div className="search-box">

                <label>Search Employee: </label>

                <input
                    type="text"
                    placeholder="Enter employee name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

            </div>

            {/* Employee Cards */}

            <div className="employee-container">

                {filteredEmployees.map((employee) => (
                    <EmployeeCard
                        key={employee.id}
                        name={employee.name}
                        role={employee.role}
                        experience={employee.experience}
                        skills={employee.skills}
                    />
                ))}

            </div>

        </div>
    );
}

export default App;