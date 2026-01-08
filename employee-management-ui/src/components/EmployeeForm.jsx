import { useState } from "react";
import { createEmployee } from "../api/employeeApi";

export default function EmployeeForm({ onEmployeeAdded }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await createEmployee(form);
      setForm({ name: "", email: "", department: "", salary: "" });
      onEmployeeAdded();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      {error && <p className="error">{error}</p>}

      <div className="form-grid">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} />
        <input name="salary" type="number" placeholder="Salary" value={form.salary} onChange={handleChange} />
      </div>

      <button type="submit">Save Employee</button>
    </form>
  );
}
