import React from 'react';
import '../css/Button.css';

export default function Button() {
    return (
        <section className="dark__mode--container">
        <span className="dm">Dark Mode</span>
        <label for="checkbox" className="toggler"> 
            <input type="checkbox" id="checkbox" />
            <span className="ball"></span>
        </label>
        </section>
    );
}