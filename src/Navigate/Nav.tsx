import { Link, useLocation } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaChessPawn, FaBars } from "react-icons/fa";
import './Nav.css';
import { useState } from "react";

function Nav() {
    const { pathname } = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="nav">
            <div className="nav-header">
                <div className="socials">
                    <a href="https://www.chess.com/member/alanzhang" target="_blank" rel="noreferrer"><FaChessPawn /></a>
                    <a href="https://www.instagram.com/alanzhangatang/" target="_blank" rel="noreferrer"><FaInstagram /></a>
                    <a href="https://github.com/alanZhang0813" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/alanlzhang" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                </div>
                <button className="menu-toggle" onClick={toggleMenu}>
                    <FaBars/>
                </button>
            </div>
            <div className={`menu-items ${menuOpen ? "open" : ""}`}>
                <Link to="/HomePage" className={`nav-link ${pathname.includes("HomePage") ? "active" : ""}`}>Home Page</Link>
                <Link to="/AboutMe" className={`nav-link ${pathname.includes("AboutMe") ? "active" : ""}`}>About Me</Link>
                <Link to="/Contact" className={`nav-link ${pathname.includes("Contact") ? "active" : ""}`}>Contact</Link>
                <Link to="/Scrapbook" className={`nav-link ${pathname.includes("Scrapbook") ? "active" : ""}`}>Scrapbook</Link>
                <Link to="/ReadingList" className={`nav-link ${pathname.includes("ReadingList") ? "active" : ""}`}>Reading List</Link>
                <Link to="/ChallengeMe" className={`nav-link ${pathname.includes("ChallengeMe") ? "active" : ""}`}>Challenge Me!</Link>
                <Link to="/MyGames" className={`nav-link ${pathname.includes("MyGames") ? "active" : ""}`}>My Games</Link>
            </div>
        </nav>
    );
}

export default Nav;
