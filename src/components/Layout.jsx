import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import bannerImage from "../assets/banner.png";
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <Navbar />
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0" />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8">
          <h1 className="text-4xl font-bold mb-2">Hi, I'm Azumah</h1>
          <h2 className="text-2xl">DevOps & Cloud Engineer | Software Engineering Enthusiast</h2>
        </div>
      </div>
      <main className="mt-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}

export default Layout;
// import React from 'react';
// import Navbar from './Navbar';
// import bannerImage from "../assets/banner.png";

// function Layout({ children }) {
//   return (
//     <div>
//       <Navbar />
//       <div
//         className="relative w-full h-64 bg-cover bg-center"
//         style={{ backgroundImage: `url(${bannerImage})` }}
//       >
//         {/* Optional dark overlay for better text contrast */}
//         <div className="absolute inset-0" />

//         {/* Centered Text */}
//         <div className="absolute inset-0 flex flex-col items-start justify-center text-left text-white px-8">
//           <h1 className="text-4xl font-bold mb-2">Hi, I'm Azumah</h1>
//           <h2 className="text-2xl">DevOps & Cloud Engineer | Software Engineering</h2>
//         </div>
//       </div>
//       <main>{children}</main>
//     </div>
//   );
// }

// export default Layout;

// import React from 'react'
// import Navbar from './Navbar'
// import bannerImage from "../assets/banner.png";

// function Layout({ children }) {
//     return (
//         <div>
//             <Navbar />
//             <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImage})` }} >
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
//           <h1 className="text-4xl font-bold mb-2">Hi, I'm Azumah</h1>
//           <h2 className="text-2xl">DevOps & Cloud Engineer | Software Engineering Enthusiast</h2>
//         </div>
//             </div>
//             <main>{children}</main>
//     </div>
//     )
// }

// export default Layout
