import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { FaUserPlus } from "react-icons/fa";

export function NavButtons({ style }) {
    const product = useSelector((state) => state.cart.cardProducts);
    return (
        <div className={style}>
            <NavLink
                to="/cart"
                className="text-[1.5rem] tracking-spacing text-clr-grey-1 flex items-center gap-2"
            >
                Cart
                <div className="relative inline-block">
                    <span className="absolute w-full text-center text-white bg-clr-primary-5 -top-2 left-3 text-base font-normal rounded-full">
                        {product.length}
                    </span>
                    <BsFillCartFill
                        style={{
                            width: "24px",
                            height: "24px",
                        }}
                    />
                </div>
            </NavLink>
            <NavLink className="text-[1.5rem] tracking-spacing text-clr-grey-1 flex items-center gap-2">
                Login
                <FaUserPlus
                    style={{
                        width: "24px",
                        height: "24px",
                    }}
                >
                    <span>{0}</span>
                </FaUserPlus>
            </NavLink>
        </div>
    );
}
