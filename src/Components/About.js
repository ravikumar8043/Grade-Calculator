import React from 'react';

const About = () => {
  return (
    <div style={aboutContainerStyle}>
      <h1 style={headingStyle}>About Grade Calculator</h1>
      <p style={paragraphStyle}>
        Welcome to the Grade Calculator app! This app allows you to calculate your grades according to your branch and current semester of IITG.
        Steps to use this web app:-
        1.Choose your current semester and branch.
        2.Choose your grade according your course.
        3.Calculate
      </p>
      <p style={paragraphStyle}>
        Our mission is to provide an easy-to-use and efficient way to calculate your grades and understand your academic performance. We value accuracy and simplicity.
      </p>
    </div>
  );
};

// Styles
const aboutContainerStyle = {
  textAlign: 'center',
  margin:'60px auto',
  padding: '20px',
  maxWidth: '600px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  backgroundColor: 'rgba(255, 255, 255, 0.4)', // Added transparency
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)', // Added 3D effect
};

const headingStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const paragraphStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.5',
  marginBottom: '15px',
};

export default About;
