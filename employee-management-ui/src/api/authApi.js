const BASE_URL = "http://localhost:5078/api/auth";

async function handleResponse(response) {
  if (!response.ok) {
       const message = await response.text();
    throw new Error(message || "Request failed");
  }

  return response.json();
}

export const authApi = {

    login: async (credentials) =>{
     const data = await fetch(`${BASE_URL}/login`, {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(credentials)
        }).then(handleResponse);
return data.token;
},
register:(dto)=>
  fetch(`${BASE_URL}/register`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(dto)
  }).then(handleResponse),
  refreshToken:(dto)=>
    fetch(`${BASE_URL}/refresh-token`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(dto)
    }).then(handleResponse)

}