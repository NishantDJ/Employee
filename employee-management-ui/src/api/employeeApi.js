const BASE_URL = "http://localhost:5078/api/Employees";
const token = localStorage.getItem("accessToken");
async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Something went wrong");
  }
  return response.status === 204 ? null : response.json();
}

export const employeeApi = {
  getAll: (page =1,pagesize) => fetch(BASE_URL+`?page=${page}&pageSize=${pagesize}`,{
    headers: {"Content-Type":"application/json",
    "Authorization":`Bearer ${token}` }
  }).then(handleResponse),

  getById: (id) =>
    fetch(`${BASE_URL}/${id}`,{
    headers: {"Content-Type":"application/json",
    "Authorization":`Bearer ${token}` }}).then(handleResponse),

  create: (data) =>
    fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization":`Bearer ${token}` },
      body: JSON.stringify(data)
    }).then(handleResponse),

  update: (id, data) =>
    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", "Authorization":`Bearer ${token}` },
      body: JSON.stringify(data)
    }).then(handleResponse),

  remove: (id) =>
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: { "Authorization":`Bearer ${token}` }
    }).then(handleResponse)
};
