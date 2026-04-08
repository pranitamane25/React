using System.Text.Json;
using EmployeeManagement.Models;

namespace EmployeeManagement.DAL
{
    public class EmployeeDAL
    {
        private readonly string filePath = "Data/Employee.json";

        private List<Employee> ReadData()
        {
            if (!File.Exists(filePath))
                return new List<Employee>();

            var json = File.ReadAllText(filePath);
            return JsonSerializer.Deserialize<List<Employee>>(json) ?? new List<Employee>();
        }

        private void WriteData(List<Employee> employees)
        {
            var json = JsonSerializer.Serialize(employees, new JsonSerializerOptions
            {
                WriteIndented = true
            });

            File.WriteAllText(filePath, json);
        }

        // GET ALL
        public List<Employee> GetEmployees()
        {
            return ReadData();
        }

        // GET BY ID
        public Employee GetEmployeeById(int id)
        {
            return ReadData().FirstOrDefault(e => e.Id == id);
        }

        // CREATE
        public Employee CreateEmployee(Employee emp)
        {
            var employees = ReadData();
            emp.Id = employees.Count > 0 ? employees.Max(e => e.Id) + 1 : 1;

            employees.Add(emp);
            WriteData(employees);

            return emp;
        }

        // UPDATE
        public bool UpdateEmployee(int id, Employee updatedEmp)
        {
            var employees = ReadData();
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null) return false;

            emp.FirstName = updatedEmp.FirstName;
            emp.LastName = updatedEmp.LastName;
            emp.EmailId = updatedEmp.EmailId;

            WriteData(employees);
            return true;
        }

        // DELETE
        public bool DeleteEmployee(int id)
        {
            var employees = ReadData();
            var emp = employees.FirstOrDefault(e => e.Id == id);

            if (emp == null) return false;

            employees.Remove(emp);
            WriteData(employees);
            return true;
        }
    }
}