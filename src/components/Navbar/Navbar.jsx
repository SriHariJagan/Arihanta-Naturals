import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon, AlignJustify, X } from "lucide-react";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [theme, setTheme] = useState("light");

  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  /* =====================
     Scroll Hide / Show
  ===================== */
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  /* =====================
     Close Mobile on Outside Click
  ===================== */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  /* =====================
     Theme Toggle
  ===================== */
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <nav className={`navbar ${visible ? "" : "navbar-hidden"}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" end className="logo-link" onClick={handleLinkClick}>
            <span className="logo-text">🌿 Arihanta Naturals</span>
          </NavLink>
        </div>

        {/* ================= Desktop Menu ================= */}
        <div className="navbar-menu">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/products" className="nav-link">
            Products
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </div>

        {/* ================= Right Actions ================= */}
        <div className="navbar-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className="mobile-menu-button"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={22} /> : <AlignJustify size={22} />}
          </button>
        </div>
      </div>

      {/* ================= Mobile Menu ================= */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="mobile-menu open">
          <div className="mobile-menu-content">
            <NavLink to="/" end className="mobile-nav-link" onClick={handleLinkClick}>
              Home
            </NavLink>
            <NavLink to="/products" className="mobile-nav-link" onClick={handleLinkClick}>
              Products
            </NavLink>
            <NavLink to="/about" className="mobile-nav-link" onClick={handleLinkClick}>
              About
            </NavLink>
            <NavLink to="/gallery" className="mobile-nav-link" onClick={handleLinkClick}>
              Gallery
            </NavLink>
            <NavLink to="/contact" className="mobile-nav-link" onClick={handleLinkClick}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
