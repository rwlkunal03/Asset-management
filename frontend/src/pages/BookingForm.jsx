import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm() {
  const [assetName, setAssetName] = useState("DSLR Camera");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!fromDate || !toDate) {
      setError("Please fill in all fields");
      return;
    }
    setSuccess(true);
    setError("");
  };

  if (success) return (
    <div style={{ display:"flex", justifyContent:"center",
      alignItems:"center", height:"100vh", background:"#f0f2f5" }}>
      <div style={{ background:"#fff", padding:"40px",
        borderRadius:"12px", textAlign:"center",
        boxShadow:"0 4px 20px rgba(0,0,0,0.1)" }}>
        <h2 style={{ color:"#16a34a" }}>Booking Submitted!</h2>
        <p style={{ color:"#666" }}>Your request is pending approval.</p>
        <button onClick={() => navigate("/assets")}
          style={{ marginTop:"16px", padding:"10px 24px",
            background:"#4f46e5", color:"#fff", border:"none",
            borderRadius:"8px", cursor:"pointer" }}>
          Back to Assets
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display:"flex", justifyContent:"center",
      alignItems:"center", height:"100vh", background:"#f0f2f5" }}>
      <div style={{ background:"#fff", padding:"40px",
        borderRadius:"12px", width:"380px",
        boxShadow:"0 4px 20px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom:"24px", color:"#333" }}>New Booking</h2>
        {error && <p style={{ color:"red", fontSize:"13px",
          marginBottom:"12px" }}>{error}</p>}
        <label style={{ fontSize:"13px", color:"#555" }}>Select Asset</label>
        <select value={assetName} onChange={e => setAssetName(e.target.value)}
          style={{ width:"100%", padding:"10px", marginBottom:"14px",
            marginTop:"4px", borderRadius:"8px", border:"1px solid #ddd",
            boxSizing:"border-box", fontSize:"14px" }}>
          <option>DSLR Camera</option>
          <option>Microphone</option>
          <option>Tripod</option>
          <option>Spotlight</option>
          <option>Costume Set</option>
        </select>
        <label style={{ fontSize:"13px", color:"#555" }}>From Date</label>
        <input type="date" value={fromDate}
          onChange={e => setFromDate(e.target.value)}
          style={{ width:"100%", padding:"10px", marginBottom:"14px",
            marginTop:"4px", borderRadius:"8px", border:"1px solid #ddd",
            boxSizing:"border-box", fontSize:"14px" }} />
        <label style={{ fontSize:"13px", color:"#555" }}>To Date</label>
        <input type="date" value={toDate}
          onChange={e => setToDate(e.target.value)}
          style={{ width:"100%", padding:"10px", marginBottom:"20px",
            marginTop:"4px", borderRadius:"8px", border:"1px solid #ddd",
            boxSizing:"border-box", fontSize:"14px" }} />
        <button onClick={handleSubmit}
          style={{ width:"100%", padding:"12px",
            background:"#4f46e5", color:"#fff", border:"none",
            borderRadius:"8px", fontSize:"15px", cursor:"pointer" }}>
          Submit Booking
        </button>
        <button onClick={() => navigate("/assets")}
          style={{ width:"100%", padding:"10px", marginTop:"10px",
            background:"transparent", color:"#666",
            border:"1px solid #ddd", borderRadius:"8px",
            fontSize:"14px", cursor:"pointer" }}>
          Cancel
        </button>
      </div>
    </div>
  );
}