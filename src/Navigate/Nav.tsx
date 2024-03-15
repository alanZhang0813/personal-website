import { Link, useLocation } from "react-router-dom";
import {FaLinkedin, FaGithub, FaInstagram, FaChessPawn} from "react-icons/fa";
import './Nav.css';

function Nav() {
    const {pathname} = useLocation();
    return(
        <nav className={"nav nav-tabs"} style={{backgroundColor: "black"}}>
            <Link to={"/HomePage"}
                  className={`nav-link ${pathname.includes("HomePage") ? "active" : ""} tab`}>Home Page</Link>
            <Link to={"/AboutMe"}
                  className={`nav-link ${pathname.includes("AboutMe") ? "active" : ""} tab`}>About Me</Link>
            <Link to={"/Contact"}
                  className={`nav-link ${pathname.includes("Contact") ? "active" : ""} tab`}>Contact</Link>
            <Link to={"/Scrapbook"}
                  className={`nav-link ${pathname.includes("Scrapbook") ? "active" : ""} tab`}>Scrapbook</Link>
            <Link to={"/ReadingList"}
                  className={`nav-link ${pathname.includes("ReadingList") ? "active" : ""} tab`}>Reading List</Link>
            <Link to={"/ChallengeMe"}
                  className={`nav-link ${pathname.includes("ChallengeMe") ? "active" : ""} tab`}>Challenge Me!</Link>
            <div className={"socials"} style={{marginLeft: "600px"}}>
                <a href={"https://www.chess.com/member/alanzhang"} target={"_blank"} rel="noreferrer"><FaChessPawn/></a>
                <a href={"https://www.instagram.com/alanzhangatang/"} target={"_blank"} rel="noreferrer"><FaInstagram/></a>
                <a href={"https://github.com/alanZhang0813"} target={"_blank"} rel="noreferrer"><FaGithub/></a>
                <a href={"https://linkedin.com/in/alanlzhang"} target={"_blank"} rel="noreferrer"><FaLinkedin/></a>
            </div>
        </nav>
    )
}

export default Nav;