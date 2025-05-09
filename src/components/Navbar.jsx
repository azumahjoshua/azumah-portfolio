import { navLinks } from "../data/navLinks";
import logo from "../assets/jaz.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Azumah Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>

          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-black"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white shadow-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-gray-600 hover:text-black"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

// import { navLinks as links } from "../data/navLinks";
// import logo from "../assets/jaz.jpg";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);
//     const toggleMenu = () => setIsOpen(!isOpen);
  
//     return (
//       <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16">
//             {/* Logo */}
//             <div className="flex items-center">
//                 <img
//                   src={logo}
//                   alt="Joshua Azumah"
//                   className="h-10 w-10 rounded-full object-cover"
//                 />
//                 {/* <span className="ml-2 text-xl font-bold text-gray-800">Azumah</span> */}
//             </div>

//             {/* <div className="text-xl font-bold text-gray-800">Azumah</div> */}
  
//             {/* Desktop Menu */}
//             <div className="hidden md:flex space-x-6">
//               {links.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-600 hover:text-black"
//                 >
//                   {link.name}
//                 </a>
//               ))}
//             </div>
  
//             {/* Mobile Toggle */}
//             <div className="md:hidden">
//               <button
//                 onClick={toggleMenu}
//                 className="text-gray-600 focus:outline-none"
//               >
//                 {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//               </button>
//             </div>
//           </div>
//         </div>
  
//         {/* Mobile Dropdown */}
//         {isOpen && (
//           <div className="md:hidden px-4 pb-4 bg-white shadow-md">
//             {links.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="block py-2 text-gray-600 hover:text-black"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>
//     );
//   }