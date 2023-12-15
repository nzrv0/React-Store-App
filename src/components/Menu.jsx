import React from "react";
import { links } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { GrFormClose } from "react-icons/gr";
import { NavButtons } from "./index";

function Menu({ active, setActive }) {
    return (
        <div
            className={`w-full h-full bg-white fixed top-0 left-0 ${
                active ? "lg:hidden" : "block"
            } `}
        >
            <div className="flex flex-row items-center justify-between p-4">
                <img src="../src/assets/logo.svg" alt="" className="w-44" />
                <button type="button" onClick={() => setActive(!active)}>
                    <GrFormClose style={{ width: "32px", height: "32px" }} />
                </button>
            </div>
            <nav className="flex flex-col">
                <ul>
                    {links.map((e) => (
                        <li key={e.id} className="hover:bg-clr-grey-10">
                            <NavLink
                                key={e.id}
                                to={e.url}
                                className="block py-4 px-6 transition-all duration-300 text-clr-grey-3 text-lg tracking-spacing hover:translate-x-2"
                            >
                                {e.text.charAt(0).toUpperCase() +
                                    e.text.slice(1)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <NavButtons
                style={"flex flex-row items-center justify-center gap-6 my-9"}
            />
        </div>
    );
}

export default Menu;
