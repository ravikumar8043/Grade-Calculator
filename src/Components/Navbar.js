import React from 'react'
import { Link } from 'react-router-dom';

const linkStyle = {
    textDecoration: 'none',
    color: 'blue',
    padding: '10px',
    marginRight: '10px',
    marginTop:'15px',
    borderBottom: '2px solid transparent',
    transition: 'border-color 0.3s',
};

export const Navbar = () => {
    return (
        <nav style={{
            position:'fixed',
            top:'0',
            backgroundColor:'rgba(238, 217, 236, 1)',
            boxShadow:'0 5px 9px rgb(0,0,0,0.5)',
             display: 'flex', alignItems: 'center',
            margin: 'auto', width: '100%', height: '50px', marginTop: '0px'
        }}>
            <div>
                <h1 style={{ fontSize: '20px', padding: '30px', fontWeight: 'bolder' }}>Grade Calculator</h1>
            </div>
            <ul style={{ display: 'flex', listStyle: 'none', padding: 0 }}>
                <li className="nav-item">
                    <Link className="nav-link" to="/" style={linkStyle}>Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about" style={linkStyle}>About</Link>
                </li>
            </ul>

        </nav>
    )
}
export default Navbar;
