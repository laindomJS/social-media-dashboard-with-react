import React from 'react';
import '../css/Navbar.css';

export default function navBar() {
    return (
        <nav className="navbar">
            <section className="title__section">
                <h1 className="title">Social Media Dashboard</h1>
                <span className="total">Total Followers: 23,004</span>
            </section>

            <span className="border"></span>

            <section className="dark__mode--container">
                <span className="dm">Dark Mode</span>
                <label for="checkbox" className="toggler"> 
                    <input type="checkbox" id="checkbox" />
                    <span className="ball"></span>
                </label>
            </section>
        </nav>
    )
}