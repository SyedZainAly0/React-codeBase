import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams } from "react-router-dom";

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function User() {
  const { id } = useParams(); 
  return <h1>User Page: {id}</h1>;
}

function Contact() {
  const navigate = useNavigate(); 

  return (
    <div>
      <h1>Contact Page</h1>
      <button onClick={() => navigate("/")}>
        Go Back Home
      </button>
    </div>
  );
}

function Routing() {
  return (
    <BrowserRouter>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "10px" }}>About</Link>
        <NavLink 
          to="/contact" 
          style={({ isActive }) => ({ color: isActive ? "red" : "blue", marginRight: "10px" })}
        >
          Contact 
        </NavLink>
        <NavLink 
          to="/user/0" 
          style={({ isActive }) => ({ color: isActive ? "red" : "green" })}
        >
          User 
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;