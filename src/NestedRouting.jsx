import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router-dom";

// Parent layout for dashboard
function DashboardLayout() {
  return (
    <div style={{ padding: "20px", border: "2px solid black" }}>
      <h1>Dashboard (Parent Layout)</h1>

      <nav style={{ marginBottom: "20px" }}>

        <NavLink to="profile" style={({ isActive }) => ({   color: isActive ? "red" : "blue",   marginRight: "10px",  })}>
          Profile
        </NavLink>

        <NavLink to="settings" style={({ isActive }) => ({  color: isActive ? "red" : "blue", })}>
          Settings
        </NavLink>

      </nav>

      <div style={{ padding: "20px", border: "2px dashed gray", minHeight: "100px", }} >
      
        <Outlet />
      </div>
    </div>
  );
}

// Child components
function Profile() {
  return (
    <div style={{ backgroundColor: "#f9c2ff", padding: "10px" }}>
      <h2>Profile Page (Child Profile Route)</h2>
      <p>This content is rendered inside the parent dashboard layout.</p>
    </div>
  );
}

function Settings() {
  return (
    <div style={{ backgroundColor: "#c2f9ff", padding: "10px" }}>
      <h2>Settings Page (Child Settings Route)</h2>
      <p>This content is rendered inside the parent dashboard layout.</p>
    </div>
  );
}

// Main App / Routing
function NestedRouting() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent route */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
             <Route
            index
            element={
              <div style={{ padding: "10px" }}>
                <h2>Welcome to Dashboard!</h2>
                <p>Select a link above to see child route content.</p>
              </div>
            }
          />
        </Route>

        {/* Home route */}
        <Route path="/" element={<h1>Home Page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default NestedRouting;