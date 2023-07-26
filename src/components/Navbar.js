import React, { useState } from "react";
import logo from '../images/logo.webp';
import hamburger from '../images/hamburger.svg';

export default function Navbar({ fixed }) {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <nav className="flex flex-wrap items-start justify-between px-2 py-5 bg-transparent md:h-52 relative z-10 font-mono">
            <div className="container p-5 mx-auto flex flex-wrap items-start justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <a
                        className="text-2xl md:text-sm font-semibold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-900"
                        href="#"
                    >
                        <img src={logo} width={88} alt="" />
                    </a>
                    <button
                        className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <img src={hamburger} width={48} alt="" />
                    </button>
                </div>
                <div
                    className={
                        "md:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col mx-auto md:mx-0 md:flex-row list-none md:ml-auto text-center">
                        <li className="nav-item md:pe-4 mt-7 md:mt-0">
                            <a
                                className="px-3 py-2 flex items-center text-2xl md:text-sm uppercase tracking-widest font-semibold leading-snug text-slate-900 hover:text-orange-600 duration-150"
                                href="#"
                            >
                                features                                </a>
                        </li>
                        <li className="nav-item md:pe-4 mt-5 md:mt-0">
                            <a
                                className="px-3 py-2 flex items-center text-2xl md:text-sm uppercase tracking-widest font-semibold leading-snug text-slate-900 hover:text-orange-600 duration-150"
                                href="#"
                            >
                                concept
                            </a>
                        </li>
                        <li className="nav-item md:pe-4 mt-5 md:mt-0">
                            <a
                                className="px-3 py-2 flex items-center text-2xl md:text-sm uppercase tracking-widest font-semibold leading-snug text-slate-900 hover:text-orange-600 duration-150"
                                href="#"
                            >
                                contact
                            </a>
                        </li>
                        <li className="nav-item mt-5 md:mt-0">
                            <button
                                className="px-8 drop-shadow-lg py-2 duration-150 flex items-center tracking-widest text-2xl md:text-sm uppercase font-semibold leading-snug text-white hover:bg-transparent hover:text-orange-600 border-2 border-orange-600 rounded-md bg-orange-600"
                                href="#"
                            >
                                buy scads
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};