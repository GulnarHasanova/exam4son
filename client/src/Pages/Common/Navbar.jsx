import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return (
        <>
            <nav>
                <div className="con">
                    <div className="logo">
                        <h3>Flora Studio</h3>
                    </div>

                    <div className="ul">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="about">About</Link></li>
                            <li><Link to="#">Portfolio</Link></li>
                            <li><Link to="#">Pricing</Link></li>
                            <li><Link to="#">Contacts</Link></li>



                        </ul>
                    </div>

                </div>



            </nav>
        </>
    )
}

export default Navbar