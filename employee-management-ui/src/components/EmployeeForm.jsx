import { useState } from "react";
import { createEmployee } from "../api/employeeApi";

export default function EmployeeForm({ onEmployeeAdded }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: 0
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      await createEmployee(form);
      setForm({ name: "", email: "", department: "", salary: 0 });
      onEmployeeAdded(); // refresh list
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Employee</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="department" placeholder="Department" onChange={handleChange} />
      <input name="salary" type="number" onChange={handleChange} />

      <button type="submit">Save</button>
    </form>
  );
}
