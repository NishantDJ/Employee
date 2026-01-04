import React from "react";
import { useEffect, useState } from "react";
import { getEmployees } from "../api/employeeApi";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";

export default function EmployeesPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadEmployees();
  }, []);

  async function loadEmployees() {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Employee Management</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <EmployeeForm onEmployeeAdded={loadEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
}
