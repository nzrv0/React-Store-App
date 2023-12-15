import React from "react";
import { NavLink } from "react-router-dom";

function ProductList({ id, image, name, price, description }) {
    return (
        <div className="flex flex-row lg:flex-nowrap flex-wrap items-center max-w-full gap-x-8">
            <img
                src={image}
                alt=""
                className="max-w-[300px] h-[200px] w-full object-cover rounded-radius"
            />
            <div className="w-full h-auto">
                <h2 className="mb-2 text-2xl text-black font-bold tracking-spacing">
                    {name}
                </h2>
                <h4 className="mb-3 text-base text-clr-primary-6 font-bold tracking-spacing">
                    {`$${Math.floor(price / 100)},${price % 100}`}
                </h4>
                <p className="mb-4 max-w-full text-base text-clr-grey-3 ">
                    {`${description.slice(0, 200)}...`}
                </p>
                <NavLink to={`/products/${id}`}>
                    <button
                        type="button"
                        className="cursor-pointer text-[0.5rem] py-[0.25rem] px-2 bg-clr-primary-5 rounded-radius font-normal text-white hover:text-black hover:bg-clr-primary-7 transition-all duration-500"
                    >
                        DETAILS
                    </button>
                </NavLink>
            </div>
        </div>
    );
}

export default ProductList;
