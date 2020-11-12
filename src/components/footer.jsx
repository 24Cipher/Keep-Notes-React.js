import react from 'react';
import reactDOM from 'react-dom';

function Footer(){
    const date = new Date();
    const year = date.getFullYear();
    const user = 'Cipher';
    return <p>© {year} Copyright: {user}</p>;
}

export default Footer;