import React, { useState, useEffect } from 'react';

const Footer = () => {
    const [footerStyle, setFooterStyle] = useState({
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        position: 'fixed', // Initially positioned at the bottom
        bottom: '0', // Initially stick to the bottom
        width: '100%', // Make the footer full width
    });

    useEffect(() => {
        const handleScroll = () => {
            const contentHeight = document.body.scrollHeight;
            const viewportHeight = window.innerHeight;

            // Calculate the position of the footer based on content height and viewport height
            if (contentHeight > viewportHeight-100) {
                setFooterStyle({
                    ...footerStyle,
                    position: 'static', // Move the footer down
                });
            } else {
                setFooterStyle({
                    ...footerStyle,
                    position: 'fixed', // Keep the footer at the bottom
                });
            }
        };

        // Initial call to handleScroll to set the initial state of the footer
        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array, this effect runs only once

    return (
        <footer className="bg-light text-center text-lg-start" style={footerStyle}>
            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-dark" href="/">Grade Calculator</a>
            </div>
        </footer>
    );
};

export default Footer;
