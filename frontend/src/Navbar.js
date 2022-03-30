import React, { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => window.removeEventListener("scroll");
  }, []);

  return (
    <nav className={`nav ${show && "nav--black"}`}>
      <img
        className="logo"
        src="https://assets.brand.microsites.netflix.io/assets/7dc497e2-4975-11ec-a9ce-066b49664af6_cm_1440w.jpg?v=1"
        alt="Netflix Logo"
      />
      <img
        className="avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Avatar"
      />
    </nav>
  );
}
