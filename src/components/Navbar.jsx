import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    return(
        <nav className="container">
            {/* <containerWrapper> */}

            
            <div>
            <h1>Admin</h1>
            </div>
            <ul className="menu">
                <li><Link to="/customer" className="link">Customer</Link></li>
                <li><Link to="/Progres" className="link">Progres </Link></li> 
                <li><Link to="/karyawan" className="link">Anggota tim</Link></li>  
                <li><Link to="/status" className="link">Status Proyek</Link></li>  
                <li><Link to="/proyek" className="link">Waktu kerja</Link></li> 
            </ul> 
            {/* </containerWrapper> */}

        </nav>
    )
}

export default Navbar