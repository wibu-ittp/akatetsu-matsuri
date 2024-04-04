import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-[#EC1337] shadow-lg sticky top-0">
      <nav className="container relative flex justify-between items-center py-4 px-8 md:px-0 m-auto">
        <a href="/"><img className="h-[3rem]" src="../images/logo.png" alt="Akatetsu Matsuri Logo" /></a>
        <button className="md:hidden text-2xl" onClick={toggleMenu}><FontAwesomeIcon icon={faBars} /></button>
        <ul className={`absolute md:static top-20 left-0 w-full md:w-auto bg-white shadow-lg md:shadow-none md:flex gap-4 font-medium text-xl text-center ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className='my-4'><a className="hover:font-black" href="./">Home</a></li>
          {/* <li className='my-4'><a className="hover:font-black" href="./about">About</a></li> */}
          <li className='my-4'><a className="hover:font-black" href="./recruitment">Recruitment</a></li>
          {/* <li className='my-4'><a className="hover:font-black" href="./">Contact</a></li> */}
        </ul>
      </nav>
    </header>
  );
}
