import React from 'react'
import './nav.css';
import {Link} from 'react-router-dom'
export default function nav() {
    return (
        <div className="nav">
            <div className="logo"><h1>LOGO</h1></div>
            <ul className="unlist">
                <Link to="/about"><li className="li">About</li></Link>
                <Link to='/'><li className="li">Home</li></Link>
                <Link to="/movies"><li className="li">Movies</li></Link>
            </ul>
        </div>
    )
}
