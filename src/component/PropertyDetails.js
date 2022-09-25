import React from "react";
import { Route, Routes } from "react-router";
import SignIn from "./SignIn";
import { Link } from "react-router-dom";
import PropertiesDetail from "./PropertyDetail";

export default function Dashboard() {
  return (
    <div>
      <p>
        <Link to="/sighin">Sign In</Link>
      </p>
      <p><Link to='/Property' >Property Details</Link></p>

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/Property" element={<PropertiesDetail />} />
      </Routes>
    </div>
  );
}
