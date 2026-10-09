import { useEffect , useState } from "react";
import EmployeeCard from "./components/EmployeeCard";
import "./App.css";

function App() {

    useEffect(() => {
        console.log("Employee Management Loaded");
    },[]);


    const [employeeName, setEmployeeName] = useState("");
    const [employeeRole, setEmployeeRole] = useState("");
    const [employeeExperience, setEmployeeExperience] = useState("");

    const [search, setSearch] = useState("");

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            console.log("API Users:", data);
        })
        .catch((error) => {
            console.error("API Error:", error);
        });
}, []);

    const [employees, setEmployees] = useState([
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
    ]);

     useEffect(()=>{
        console.log("Search value", search)
    },[search]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (
            employeeName === "" ||
            employeeRole === "" ||
            employeeExperience === ""
        ) {
            alert("Please fill all fields");
            return;
        }

        // Create new employee
        const newEmployee = {
            id: employees.length + 1,
            name: employeeName,
            role: employeeRole,
            experience: employeeExperience + " years",
            skills: []
        };

        // Add new employee
        setEmployees([...employees, newEmployee]);

        // Clear form
        setEmployeeName("");
        setEmployeeRole("");
        setEmployeeExperience("");
    };

    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="app">

            <h1>Employee Management</h1>

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

            {/* Add Employee Form */}

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={employeeName}
                    onChange={(e) => setEmployeeName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Enter Your Role"
                    value={employeeRole}
                    onChange={(e) => setEmployeeRole(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Enter Your Experience"
                    value={employeeExperience}
                    onChange={(e) => setEmployeeExperience(e.target.value)}
                />

                <button type="submit">
                    Add Employee
                </button>

            </form>

            {/* Employee Count */}

            <h2>Total Employees: {employees.length}</h2>

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