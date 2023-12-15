import React from "react";
import { NavLink } from "react-router-dom";

function NavViev({ page }) {
    return (
        <section className="w-full h-[20vh] bg-clr-primary-10 flex items-center">
            <div className="max-w-[1170px] w-full h-auto mx-auto">
                <h1 className="text-4xl tracking-spacing font-bold text-clr-primary-1">
                    <NavLink
                        to="/"
                        className="text-clr-primary-3 hover:text-clr-primary-1"
                    >
                        Home /{" "}
                    </NavLink>

                    {page}
                </h1>
            </div>
        </section>
    );
}

export default NavViev;
