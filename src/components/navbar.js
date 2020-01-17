import React from 'react'

const Navbar = () =>{
    return(
        <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <a className="nav-link" href="/about">Spring 2019</a>
                    </li>
                    <li className="nav-item">
                        <a className ="nav-link" href="/">Winter 2018</a>
                    </li>
                </ul>
        </div>
    )
}

export default Navbar