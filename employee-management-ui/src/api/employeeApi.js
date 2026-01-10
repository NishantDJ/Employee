const BASE_URL = "http://localhost:5078/api/Employees";

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Something went wrong");
  }
  return response.status === 204 ? null : response.json();
}

export const employeeApi = {
  getAll: () => fetch(BASE_URL).then(handleResponse),

  getById: (id) =>
    fetch(`${BASE_URL}/${id}`).then(handleResponse),

  create: (data) =>
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(handleResponse),

  update: (id, data) =>
    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(handleResponse),

  remove: (id) =>
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE"
    }).then(handleResponse)
};
