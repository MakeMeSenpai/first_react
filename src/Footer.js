// src/footer.js

import React from 'react';
import './Footer.css';

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className="footer">
            <h4>The Year is {year}! ~ Anthony S. Protho ©2020 </h4>
        </div>
    )
}

export default Footer;