import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCheck } from "react-icons/ai";
import {
    SearchFilter,
    FilterCategory,
    FilterCompany,
    FilterColor,
    FilterPrice,
    FilterShipping,
    clearFilters,
    filterProducts,
} from "../stores/reducers/filterSlice";

const categories = [
    "All",
    "Office",
    "Living Room",
    "Kitchen",
    "Bedroom",
    "Dining",
    "Kids",
];
const companies = ["All", "marcos", "liddy", "ikea", "caressa"];
const colors = ["#ff0000", "#00ff00", "#0000ff", "#000", "#ffb900"];
function Sidebar() {
    const search = useSelector((state) => state.filter.search);
    const category = useSelector((state) => state.filter.category);
    const company = useSelector((state) => state.filter.company);
    const color = useSelector((state) => state.filter.color);
    const price = useSelector((state) => state.filter.price);
    const shipping = useSelector((state) => state.filter.shipping);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(filterProducts());
    }, [search, category, company, color, price, shipping]);
    return (
        <aside className="max-w-[200px] h-min w-full flex flex-col items-start ">
            <div className="md:sticky md:top-4">
                <input
                    type="text"
                    value={search}
                    placeholder="Search"
                    onChange={(e) => dispatch(SearchFilter(e.target.value))}
                    className="w-full bg-clr-grey-10 p-2 mb-9"
                />
                <div className="text-clr-grey-1 text-base font-bold tracking-widest mb-5">
                    Category
                    <div>
                        {categories.map((item, id) => (
                            <button
                                type="button"
                                key={id}
                                onClick={() => {
                                    dispatch(FilterCategory(item));
                                }}
                                className={`relative font-normal tracking-spacing block text-sm text-clr-grey-5 my-1.5 ${
                                    item === category &&
                                    "after:content-[''] after:w-full after:h-px after:bg-clr-grey-5 after:absolute after:bottom-0 after:left-0"
                                }`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-clr-grey-1 text-base font-bold tracking-widest mb-5">
                    Company
                    <select
                        className="block bg-clr-grey-10 p-1 font-normal outline-none"
                        value={company}
                        onChange={(e) =>
                            dispatch(FilterCompany(e.target.value))
                        }
                    >
                        {companies.map((item, id) => (
                            <option key={id} className="font-normal">
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="text-clr-grey-1 text-base font-bold tracking-widest mb-5">
                    Colors
                    <div className="flex items-center">
                        <button
                            type="button"
                            onClick={() => dispatch(FilterColor("All"))}
                            className={`relative font-normal tracking-spacing text-sm text-clr-grey-5 inline-block mr-2 ${
                                color === "All" &&
                                "after:content-[''] after:w-full after:h-px after:bg-clr-grey-5 after:absolute after:bottom-0 after:left-0 "
                            }`}
                        >
                            All
                        </button>
                        {colors.map((item, id) => (
                            <button
                                type="button"
                                key={id}
                                onClick={() => dispatch(FilterColor(item))}
                                className={`w-4 h-4 p-2 inline-block relative mr-2 rounded-full opacity-50 ${
                                    color === item && "p-2 opacity-100"
                                }`}
                                style={{ backgroundColor: `${item}` }}
                            >
                                {color === item && (
                                    <AiOutlineCheck className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3 h-3 text-white" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-clr-grey-1 text-base font-bold tracking-widest mb-5">
                    Price
                    <p className="font-normal tracking-spacing block text-sm text-clr-grey-3 my-2">{`$${price}`}</p>
                    <input
                        type="range"
                        className="block"
                        onChange={(e) => dispatch(FilterPrice(e.target.value))}
                        step={0.01}
                        min={0.0}
                        max={`${3099.99}`}
                        value={price}
                    />
                </div>
                <div className="flex items-center mb-4">
                    Free Shipping
                    <input
                        type="checkbox"
                        checked={shipping}
                        onClick={() => dispatch(FilterShipping(!shipping))}
                        onChange={() => {}}
                        className="ml-auto"
                    />
                </div>
                <button
                    type="button"
                    onClick={clearFilters}
                    className="px-2 py-1 bg-red-700 text-white font-normal rounded-md text-xs tracking-spacing"
                >
                    Clear Filters
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
