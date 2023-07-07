import React, { useState, useEffect } from 'react';

function Navbar() {
//   const [show, setShow] = React.useState(true);
//   const controlNavbar = () => {
//       if (window.scrollY > 100) {
//           setShow(false);
//       } else {
//           setShow(true);
//       }

//   }
//   React.useEffect(() => {
//     window.addEventListener("scroll", controlNavbar);
//     return () => {
//         window.removeEventListener("scroll", controlNavbar);
//     };
// }, []);
const [show, setShow] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.pageYOffset;

    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const shouldShow = currentScrollPos < prevScrollPos;
      setShow(shouldShow);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`fixed w-full z-10 transition-timing-function: cubic-bezier(0.4, 0, 1, 1) duration-500  ${show ? "top-0" : "-top-16"}`}>
        <nav class="bg-navbar_background bg-no-repeat bg-cover  top-0 w-full z-10
        ">
          <ul class=" flex justify-between items-center h-16 bg-transparent text-black relative shadow-sm font-mono">
            <div>
            <li><a href="/" class="text">Taxi-link</a></li>
            </div>
            <div class="flex justify-end space-x-4">
            <li><a href="/Homepage" class="text-white">Home</a></li>
            <li><a href="/" class="text-white">About</a></li>
            <li><a href="/" class="text-white">Services</a></li>
            <li><a href="/" class="text-white">Contact</a></li>
            </div>
          </ul>
        </nav>
    </div>
  );
}

export default Navbar;