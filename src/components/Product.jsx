import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Product({ id, image, name, price }) {
    const [mousehover, setMouseHover] = useState(false);
    return (
        <div className="flex flex-col w-full gap-4">
            <div
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
                className="relative after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:opacity-0 after:hover:opacity-30 after:bg-black after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700"
            >
                <img
                    className="w-full h-56 rounded-md object-cover bg-black"
                    src={image}
                    alt=""
                />
                <NavLink
                    to={`/products/${id}`}
                    type="button"
                    className="absolute top-2/4 left-2/4 z-20"
                >
                    <IoSearch
                        className={`${
                            mousehover ? "inline-block" : "hidden"
                        } bg-clr-primary-5 cursor-pointer w-11 h-11 rounded-full p-2 transofrm -translate-x-2/4 -translate-y-2/4  transition-all duration-500 z-20 text-white`}
                    />
                </NavLink>
            </div>
            <div className="flex flex-row items-center justify-between">
                <h4 className="font-normal text-base text-bg-clr-grey-1 leading-[0.1rem]">
                    {name}
                </h4>
                <p className="font-normal text-base text-clr-primary-5 leading-[0.1rem]">
                    {`$${Math.floor(price / 100)},${price % 100}`}
                </p>
            </div>
        </div>
    );
}

export default Product;
