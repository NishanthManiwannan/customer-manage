import React, { useState, useEffect } from 'react';
import { Link , useLocation} from 'react-router-dom';
import "./Header.css";


function Header() {

    const [active, activeNav] = useState("Home")
    const vieved = useLocation();

    useEffect(() => {
        if(vieved.pathname === "/"){
            activeNav("Home")
        } else if (vieved.pathname === "/add"){
            activeNav("AddCustomer")
        }
    }, [vieved])

    return (
        <div className="navbar">
            <div className="navbar-container">
                <Link to="/" className="nav-links"> 
                    <h4 className={`${active === "Home" ? "active" : "" }`}
                    onClick={() => activeNav("Home")}>
                      List of Customers
                    </h4>
                </Link>

                <Link to="/add" className="nav-links2"> 
                    <h4 className={`${active === "AddCustomer" ? "active" : "" }`}
                    onClick={() => activeNav("AddCustomer")}>
                      Add new Customers
                    </h4>
                </Link>
            </div>
        </div>
    )
}

export default Header
