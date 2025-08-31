import React from "react";
import '../assets/css/acceuil.css'
import logo from "../assets/img/Black & Grey Elegant Typography Monogram Initials Logo/1.png"


const Navbar = () => {
    return (
        <>
            <nav className="bg-white/30 absolute w-full flex items-center justify-between px-6 py-3">
                <img src={logo} alt="logo de l'hotel" className="h-15 -mt-1 -mb-2" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Click Me
                </button>
            </nav>

            <main className="main h-150"

            >
            </main>
        </>
    );
}

export default Navbar;