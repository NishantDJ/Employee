const BASE_URL = "http://localhost:5078/api/Employees";

export async function getEmployees() {
  const response = await fetch(BASE_URL);


  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
}

export async function createEmployee(employee) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }

  return response.json();
}
