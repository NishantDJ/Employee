export default function EmployeeDetails({ employee }) {
  return (
    <>
      <h2>Employee Details</h2>
      <p><b>ID:</b> {employee.id}</p>
      <p><b>Name:</b> {employee.name}</p>
      <p><b>Email:</b> {employee.email}</p>
      <p><b>Department:</b> {employee.department}</p>
      <p><b>Salary:</b> {employee.salary}</p>
      <p><b>Status:</b> {employee.isActive ? "Active" : "Inactive"}</p>
    </>
  );
}
