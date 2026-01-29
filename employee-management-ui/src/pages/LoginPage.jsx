import { useEffect, useState } from "react";
import { authApi  } from "../api/authApi";

export default function LoginPage() {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [loading,setLoading]=useState(false);

const handleSubmit=async(e)=>{
    e.preventDefault();
    setError("");
    setLoading(true);
    try{
        const {accessToken,refreshToken}=await authApi.login({
            username,password});

            localStorage.setItem("accessToken",accessToken);
            localStorage.setItem("refreshToken",refreshToken);

            alert("Login successful!");
    }catch(err){
        setError(err.message);
    }finally{
        setLoading(false);
    }
};
return(
    <div>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{color:"red"}}>{error}</p>}
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />            
            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    </div>
)




}