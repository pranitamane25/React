

using Microsoft.AspNetCore.Mvc;
using EmployeeManagement.Models;
using EmployeeManagement.DAL;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
        private readonly EmployeeDAL _dal = new EmployeeDAL();

        [HttpGet ("get")]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return _dal.GetEmployees();
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployeeById(int id)
        {
            var emp = _dal.GetEmployeeById(id);
            if (emp == null) return NotFound();
            return emp;
        }

        [HttpPost]
        public ActionResult<Employee> CreateEmployee(Employee emp)
        {
            var created = _dal.CreateEmployee(emp);
            return created;
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(int id, Employee emp)
        {
            var updated = _dal.UpdateEmployee(id, emp);
            if (!updated) return NotFound();
            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            var deleted = _dal.DeleteEmployee(id);
            if (!deleted) return NotFound();
            return NoContent();
        }
    }
}