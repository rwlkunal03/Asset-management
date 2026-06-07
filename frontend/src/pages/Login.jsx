import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "" || password === "") {
      setError("Please fill in all fields");
      return;
    }
    if (email === "admin@cult.com" && password === "admin123") {
      localStorage.setItem("role", "admin");
      navigate("/admin");
    } else {
      localStorage.setItem("role", "user");
      navigate("/assets");
    }
  };

  return (
    <div style={{ display:"flex", justifyContent:"center",
      alignItems:"center", height:"100vh", background:"#f0f2f5" }}>
      <div style={{ background:"#fff", padding:"40px", borderRadius:"12px",
        boxShadow:"0 4px 20px rgba(0,0,0,0.1)", width:"360px" }}>
        <h2 style={{ textAlign:"center", marginBottom:"24px",
          color:"#333" }}>Asset Management Login</h2>
        {error && <p style={{ color:"red", fontSize:"13px",
          marginBottom:"12px" }}>{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width:"100%", padding:"10px", marginBottom:"12px",
            borderRadius:"8px", border:"1px solid #ddd",
            boxSizing:"border-box", fontSize:"14px" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width:"100%", padding:"10px", marginBottom:"16px",
            borderRadius:"8px", border:"1px solid #ddd",
            boxSizing:"border-box", fontSize:"14px" }}
        />
        <button
          onClick={handleLogin}
          style={{ width:"100%", padding:"12px",
            background:"#4f46e5", color:"#fff", border:"none",
            borderRadius:"8px", fontSize:"15px", cursor:"pointer" }}>
          Login
        </button>
        <p style={{ fontSize:"12px", color:"#999",
          textAlign:"center", marginTop:"16px" }}>
          Admin: admin@cult.com / admin123
        </p>
      </div>
    </div>
  );
}