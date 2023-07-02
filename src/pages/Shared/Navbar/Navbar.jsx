import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navOptions = <>
        <Link className='font-bold text-2xl text-cyan-300' to="/">Home</Link>
        <Link className='font-bold text-2xl text-cyan-300' to="/about">About</Link>
        <Link className='font-bold text-2xl text-cyan-300' to="/portfolio">Portfolio</Link>
        <Link className='font-bold text-2xl text-cyan-300' to="/contact">Contact</Link>
    </>
    return (
        <>
            <div className="navbar z-10 bg-opacity-80 px-28 bg-black text-white">
                <div className="navbar-start">
                    <a className="btn btn-ghost normal-case text-xl">Portfolio Website</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className="flex justify-center items-center gap-8">
                        {navOptions}
                    </div>
                </div>
                <div className="navbar-end">
                    <a className="btn font-bold">Get in Touch</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;