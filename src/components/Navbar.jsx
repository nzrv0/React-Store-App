import React from "react";
import { links } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { NavButtons, Menu } from "./index";
import { useState } from "react";
import { HiOutlineViewList } from "react-icons/hi";

function Navbar() {
    const [active, setActive] = useState(false);
    return (
        <>
            <header className="max-w-7xl h-auto flex flex-row justify-between items-center mx-auto p-4">
                <NavLink to="/">
                    <img src="../src/assets/logo.svg" alt="" className="w-44" />
                </NavLink>
                <nav className="hidden lg:block">
                    {links.map((e) => (
                        <NavLink
                            key={e.id}
                            to={e.url}
                            className="text-clr-grey-3 text-lg tracking-spacing mr-8"
                        >
                            {e.text.charAt(0).toUpperCase() + e.text.slice(1)}
                        </NavLink>
                    ))}
                </nav>
                <NavButtons style="hidden lg:flex lg:flex-row lg:items-center lg:gap-6" />
                <button
                    type="button"
                    className="lg:hidden block"
                    onClick={() => setActive(!active)}
                >
                    <HiOutlineViewList
                        style={{
                            width: "52px",
                            height: "52px",
                            color: "hsl(22, 31%, 52%)",
                        }}
                    />
                </button>
            </header>
            {active && <Menu active={active} setActive={setActive} />}
        </>
    );
}

export default Navbar;
