import React from "react";
import { Link, Outlet } from "react-router-dom";

// Contact component
const Contact = () => {
  return (
    <div>
      <p>contact us page</p>
      <Link to={"/contact/email"}>get email</Link>
      <br />
      <Link to={"/contact/phone"}>get phone</Link>
      <Outlet />
    </div>
  );
};

export default Contact;
