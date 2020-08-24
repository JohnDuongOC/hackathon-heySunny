import React from "react"
import "../styles/index.scss"
import NavBar__Style from "./NavBar.module.scss"
import { Link } from "gatsby"
import logo from "../imgs/Logo.svg"

const NavBar = () => {
    return (
        <div>
            <nav className={NavBar__Style.container}>
                <div>
                    <img className={NavBar__Style.logo} src={logo} />
                </div>
                <ul className={NavBar__Style.linkContainer}>
                    <li><Link className={NavBar__Style.links} to="#">Education</Link></li>
                    <li><Link className={NavBar__Style.links} to="#">Sign Up</Link></li>
                    <li><Link className={NavBar__Style.links} to="#">Sign In</Link></li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar