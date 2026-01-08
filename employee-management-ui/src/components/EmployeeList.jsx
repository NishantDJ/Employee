export default function EmployeeList({ employees }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map(emp => (
          <tr key={emp.id}>
            <td>{emp.name}</td>
            <td>{emp.email}</td>
            <td>{emp.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
