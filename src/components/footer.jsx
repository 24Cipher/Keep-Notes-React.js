import React from 'react';

function Footer(){
    const year = new Date().getFullYear();
    const user = 'Cipher';
    return (
        <footer>
            <p>Copyright © {year} - {user}</p>
        </footer>
    );
}

export default Footer;