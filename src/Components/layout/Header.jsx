import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="top-banner">
                <p className="banner-text">Get Z's Membership, 30-day return or refund guarantee.</p>
                <div className="banner-links">
                    <Link to="/contact" className="banner-link">SIGN IN</Link>
                    <Link to="/contact" className="banner-link">SIGN UP</Link>
                </div>
            </div>
            <header className="navbar-header">
                <div className="logo">ZFlix</div>
                <nav className={`navbar-nav ${menuOpen ? "open" : ""}`}>
                    <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
                    <NavLink to="/movie" className="nav-link" onClick={() => setMenuOpen(false)}>Movie</NavLink>
                    <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
                </nav>
                <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>
            </header>
        </>
    );
}
