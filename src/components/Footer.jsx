import React from 'react';
import { FaLinkedin } from 'react-icons/fa';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 text-center mt-12">
      <div className="flex justify-center items-center gap-2">
        <p className="text-sm">&copy; {year} Azumah | All Rights Reserved.</p>
        <a
          href="https://www.linkedin.com/in/azumahjoshua/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition-colors duration-300"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
