import { useEffect, useState } from "react";
import { employeeApi } from "../api/employeeApi";
import EmployeeForm from "../components/EmployeeForm";
import EmployeeList from "../components/EmployeeList";
import EmployeeDetails from "../components/EmployeeDetails";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadEmployees() {
    try {
      setLoading(true);
      setEmployees(await employeeApi.getAll());
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadEmployees();
  }, []);

  return (
    <div>
      <h1>Employee Management System</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      <EmployeeForm
        selectedEmployee={selectedEmployee}
        onSuccess={() => {
          setSelectedEmployee(null);
          loadEmployees();
        }}
      />

      <EmployeeList
        employees={employees}
        onView={setSelectedEmployee}
        onDelete={async (id) => {
          await employeeApi.remove(id);
          loadEmployees();
        }}
      />

      {selectedEmployee && (
        <EmployeeDetails employee={selectedEmployee} />
      )}
    </div>
  );
}
