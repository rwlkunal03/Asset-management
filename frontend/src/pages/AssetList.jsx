import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AssetList() {
  const [assets, setAssets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAssets([
      { id:1, name:"DSLR Camera", category:"Photography",
        description:"Canon EOS camera", quantity:3, status:"available" },
      { id:2, name:"Microphone", category:"Audio",
        description:"Condenser mic", quantity:5, status:"available" },
      { id:3, name:"Tripod", category:"Photography",
        description:"Heavy duty tripod", quantity:4, status:"available" },
      { id:4, name:"Spotlight", category:"Lighting",
        description:"Stage spotlight", quantity:2, status:"available" },
      { id:5, name:"Costume Set", category:"Theatre",
        description:"Full costume set", quantity:6, status:"available" },
    ]);
  }, []);

  return (
    <div style={{ padding:"30px", background:"#f0f2f5", minHeight:"100vh" }}>
      <div style={{ display:"flex", justifyContent:"space-between",
        alignItems:"center", marginBottom:"24px" }}>
        <h2 style={{ color:"#333", margin:0 }}>Available Assets</h2>
        <button onClick={() => navigate("/book")}
          style={{ background:"#4f46e5", color:"#fff", border:"none",
            padding:"10px 20px", borderRadius:"8px",
            cursor:"pointer", fontSize:"14px" }}>
          + New Booking
        </button>
      </div>
      <div style={{ display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(260px,1fr))",
        gap:"20px" }}>
        {assets.map(asset => (
          <div key={asset.id} style={{ background:"#fff",
            borderRadius:"12px", padding:"20px",
            boxShadow:"0 2px 10px rgba(0,0,0,0.08)" }}>
            <h3 style={{ margin:"0 0 8px", color:"#333" }}>{asset.name}</h3>
            <p style={{ margin:"0 0 4px", color:"#666",
              fontSize:"13px" }}>Category: {asset.category}</p>
            <p style={{ margin:"0 0 4px", color:"#666",
              fontSize:"13px" }}>{asset.description}</p>
            <p style={{ margin:"0 0 12px", color:"#666",
              fontSize:"13px" }}>Qty: {asset.quantity}</p>
            <span style={{ background:"#dcfce7", color:"#16a34a",
              padding:"3px 10px", borderRadius:"20px",
              fontSize:"12px", fontWeight:"500" }}>
              {asset.status}
            </span>
            <br/><br/>
            <button onClick={() => navigate("/book")}
              style={{ width:"100%", padding:"9px",
                background:"#4f46e5", color:"#fff", border:"none",
                borderRadius:"8px", cursor:"pointer", fontSize:"14px" }}>
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}