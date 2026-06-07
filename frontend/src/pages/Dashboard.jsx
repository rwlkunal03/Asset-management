import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis,
  Tooltip, Legend, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";

const bookingData = [
  { name: "DSLR Camera", bookings: 12 },
  { name: "Microphone", bookings: 8 },
  { name: "Tripod", bookings: 6 },
  { name: "Spotlight", bookings: 9 },
  { name: "Costume Set", bookings: 4 },
];

const statusData = [
  { name: "Approved", value: 18 },
  { name: "Pending", value: 7 },
  { name: "Rejected", value: 3 },
];

const weeklyData = [
  { day: "Mon", bookings: 4 },
  { day: "Tue", bookings: 7 },
  { day: "Wed", bookings: 5 },
  { day: "Thu", bookings: 9 },
  { day: "Fri", bookings: 6 },
  { day: "Sat", bookings: 3 },
  { day: "Sun", bookings: 2 },
];

const COLORS = ["#16a34a", "#f59e0b", "#dc2626"];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding:"30px", background:"#f0f2f5", minHeight:"100vh" }}>

      {/* Header */}
      <div style={{ display:"flex", justifyContent:"space-between",
        alignItems:"center", marginBottom:"24px" }}>
        <h2 style={{ color:"#333", margin:0 }}>Analytics Dashboard</h2>
        <button onClick={() => navigate("/admin")}
          style={{ background:"#4f46e5", color:"#fff", border:"none",
            padding:"10px 20px", borderRadius:"8px",
            cursor:"pointer", fontSize:"14px" }}>
          Back to Admin
        </button>
      </div>

      {/* Top stat cards */}
      <div style={{ display:"grid",
        gridTemplateColumns:"repeat(auto-fill, minmax(200px,1fr))",
        gap:"16px", marginBottom:"30px" }}>
        {[
          { label:"Total Assets", value:"5", color:"#4f46e5" },
          { label:"Total Bookings", value:"28", color:"#16a34a" },
          { label:"Pending", value:"7", color:"#f59e0b" },
          { label:"Rejected", value:"3", color:"#dc2626" },
        ].map((card, i) => (
          <div key={i} style={{ background:"#fff", borderRadius:"12px",
            padding:"20px", boxShadow:"0 2px 10px rgba(0,0,0,0.08)",
            borderLeft:`4px solid ${card.color}` }}>
            <p style={{ margin:"0 0 8px", color:"#666",
              fontSize:"13px" }}>{card.label}</p>
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
          </div>
        ))}
      </div>

      {/* Charts row */}
      <div style={{ display:"grid",
        gridTemplateColumns:"1fr 1fr", gap:"20px",
        marginBottom:"20px" }}>

        {/* Bar chart */}
        <div style={{ background:"#fff", borderRadius:"12px",
          padding:"20px", boxShadow:"0 2px 10px rgba(0,0,0,0.08)" }}>
          <h3 style={{ margin:"0 0 16px", color:"#333",
            fontSize:"15px" }}>Bookings by Asset</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={bookingData}>
              <XAxis dataKey="name" tick={{ fontSize:11 }} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="#4f46e5" radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie chart */}
        <div style={{ background:"#fff", borderRadius:"12px",
          padding:"20px", boxShadow:"0 2px 10px rgba(0,0,0,0.08)" }}>
          <h3 style={{ margin:"0 0 16px", color:"#333",
            fontSize:"15px" }}>Booking Status</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={statusData} cx="50%" cy="50%"
                outerRadius={90} dataKey="value" label>
                {statusData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Weekly bar chart */}
      <div style={{ background:"#fff", borderRadius:"12px",
        padding:"20px", boxShadow:"0 2px 10px rgba(0,0,0,0.08)" }}>
        <h3 style={{ margin:"0 0 16px", color:"#333",
          fontSize:"15px" }}>Weekly Booking Trend</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={weeklyData}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="bookings" fill="#16a34a" radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}