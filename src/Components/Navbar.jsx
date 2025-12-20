import React from 'react';
import { Link } from 'react-router';
import { Github } from 'lucide-react';
import logo from '../../public/logo-D9NHcesw 1.png'
const Navbar = () => {
    const navList = <>
        <li className='hover:border-b-2 hover:border-b-[#905DEC] hover:text-[#905DEC]'><Link>
        Home</Link></li>
        <li className='hover:border-b-2 hover:border-b-[#905DEC] hover:text-[#905DEC]'><Link >Apps</Link></li>
        <li className='hover:border-b-2 hover:border-b-[#905DEC] hover:text-[#905DEC]'><Link>Installation</Link></li>
    </>
    
    return (
        <div>
            <div className="navbar bg-white shadow-sm">
                <div className='w-11/12 mx-auto flex items-center'>
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navList}
                        </ul>
                        </div>
                        <a className="btn btn-ghost text-xl mx-[-20px]">
                            <img src={logo} alt="" />
                             <span className='bg-[linear-gradient(135deg,#4e34de,#b46ff4)] bg-clip-text text-transparent'>Hero.IO</span>
                        </a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal space-x-4">
                            {navList}
                        </ul>
                    </div>
                    <div className="navbar-end space-x-4">
                        <a  href="https://github.com/sukanta022"
                            target="_blank"
                            className="btn p-4 border-none text-white rounded-md"
                            style={{ background: "linear-gradient(135deg, #4e34de 0%, #b46ff4 100%)" }}
                        >    
                            <Github className="text-black rounded-full" />
                            Contribute
                        </a>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;