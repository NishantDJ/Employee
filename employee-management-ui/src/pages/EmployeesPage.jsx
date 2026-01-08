import React, { useEffect, useState } from "react";
import { getEmployees } from "../api/employeeApi";
import EmployeeList from "../components/EmployeeList";
import EmployeeForm from "../components/EmployeeForm";
import "../styles/Employee.css";

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
    <div className="container">
      <h1>Employee Management</h1>

      {loading && <p className="loading">Loading employees...</p>}
      {error && <p className="error">{error}</p>}

      <EmployeeForm onEmployeeAdded={loadEmployees} />
      <EmployeeList employees={employees} />
    </div>
  );
}
