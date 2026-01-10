import { useEffect, useState } from "react";
import { employeeApi } from "../api/employeeApi";

export default function EmployeeForm({ selectedEmployee, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: 0
  });

  useEffect(() => {
    if (selectedEmployee) {
      setForm(selectedEmployee);
    }
  }, [selectedEmployee]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (selectedEmployee) {
      await employeeApi.update(selectedEmployee.id, form);
    } else {
      await employeeApi.create(form);
    }

    setForm({ name: "", email: "", department: "", salary: 0 });
    onSuccess();
  }

  return (
    <>
      <h2>{selectedEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} placeholder="Name" onChange={handleChange} />
        <input name="email" value={form.email} placeholder="Email" onChange={handleChange} />
        <input name="department" value={form.department} placeholder="Department" onChange={handleChange} />
        <input name="salary" type="number" value={form.salary} onChange={handleChange} />
        <button type="submit">
          {selectedEmployee ? "Update" : "Create"}
        </button>
      </form>
    </>
  );
}
