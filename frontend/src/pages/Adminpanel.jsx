import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([
    { id:1, user_id:"User A", asset_id:"DSLR Camera",
      from_date:"2026-06-10", to_date:"2026-06-12", status:"pending" },
    { id:2, user_id:"User B", asset_id:"Microphone",
      from_date:"2026-06-11", to_date:"2026-06-13", status:"pending" },
    { id:3, user_id:"User C", asset_id:"Tripod",
      from_date:"2026-06-14", to_date:"2026-06-15", status:"approved" },
  ]);

  const handleUpdate = (id, status) => {
    setBookings(prev => prev.map(b =>
      b.id === id ? { ...b, status } : b
    ));
  };

  return (
    <div style={{ padding:"30px", background:"#f0f2f5", minHeight:"100vh" }}>
      <div style={{ display:"flex", justifyContent:"space-between",
        alignItems:"center", marginBottom:"24px" }}>
        <h2 style={{ color:"#333", margin:0 }}>Admin Panel — All Bookings</h2>
        <button onClick={() => navigate("/dashboard")}
          style={{ background:"#16a34a", color:"#fff", border:"none",
            padding:"10px 20px", borderRadius:"8px",
            cursor:"pointer", fontSize:"14px" }}>
          View Dashboard
        </button>
      </div>
      <div style={{ background:"#fff", borderRadius:"12px",
        boxShadow:"0 2px 10px rgba(0,0,0,0.08)", overflow:"hidden" }}>
        <table style={{ width:"100%", borderCollapse:"collapse" }}>
          <thead>
            <tr style={{ background:"#4f46e5", color:"#fff" }}>
              <th style={{ padding:"14px 16px", textAlign:"left", fontSize:"13px" }}>User</th>
              <th style={{ padding:"14px 16px", textAlign:"left", fontSize:"13px" }}>Asset</th>
              <th style={{ padding:"14px 16px", textAlign:"left", fontSize:"13px" }}>From</th>
              <th style={{ padding:"14px 16px", textAlign:"left", fontSize:"13px" }}>To</th>
              <th style={{ padding:"14px 16px", textAlign:"left", fontSize:"13px" }}>Status</th>
              <th style={{ padding:"14px 16px", textAlign:"left", fontSize:"13px" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((b, i) => (
              <tr key={b.id} style={{
                background: i%2===0 ? "#fff" : "#f9f9f9",
                borderBottom:"1px solid #eee" }}>
                <td style={{ padding:"12px 16px", fontSize:"13px" }}>{b.user_id}</td>
                <td style={{ padding:"12px 16px", fontSize:"13px" }}>{b.asset_id}</td>
                <td style={{ padding:"12px 16px", fontSize:"13px" }}>{b.from_date}</td>
                <td style={{ padding:"12px 16px", fontSize:"13px" }}>{b.to_date}</td>
                <td style={{ padding:"12px 16px" }}>
                  <span style={{
                    background: b.status==="approved" ? "#dcfce7"
                      : b.status==="rejected" ? "#fee2e2" : "#fef9c3",
                    color: b.status==="approved" ? "#16a34a"
                      : b.status==="rejected" ? "#dc2626" : "#854d0e",
                    padding:"3px 10px", borderRadius:"20px",
                    fontSize:"12px", fontWeight:"500" }}>
                    {b.status}
                  </span>
                </td>
                <td style={{ padding:"12px 16px" }}>
                  {b.status === "pending" && (
                    <>
                      <button onClick={() => handleUpdate(b.id, "approved")}
                        style={{ background:"#16a34a", color:"#fff",
                          border:"none", padding:"6px 12px",
                          borderRadius:"6px", cursor:"pointer",
                          fontSize:"12px", marginRight:"8px" }}>
                        Approve
                      </button>
                      <button onClick={() => handleUpdate(b.id, "rejected")}
                        style={{ background:"#dc2626", color:"#fff",
                          border:"none", padding:"6px 12px",
                          borderRadius:"6px", cursor:"pointer",
                          fontSize:"12px" }}>
                        Reject
                      </button>
                    </>
                  )}
                  {b.status !== "pending" && (
                    <span style={{ color:"#999", fontSize:"12px" }}>Done</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}