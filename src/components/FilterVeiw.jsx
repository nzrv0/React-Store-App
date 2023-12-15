import React from "react";
import {
    AiOutlineInsertRowBelow,
    AiOutlineInsertRowRight,
} from "react-icons/ai";
import { BsList } from "react-icons/bs";
import { BsFillGridFill } from "react-icons/bs";

import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "../stores/reducers/filterSlice";

function FilterVeiw({ setProductsView, productsView }) {
    const dispatch = useDispatch();
    const productsLength = useSelector((state) => state.filter.productsLength);

    return (
        <div className="flex flex-row items-center justify-between mb-8">
            <div className="flex items-center gap-2 mr-2">
                <button
                    type="button"
                    className={`${
                        productsView && "bg-black"
                    } border-[1px] p-[3px] rounded-md border-black`}
                    onClick={() => setProductsView(true)}
                >
                    <BsFillGridFill size={14} color={productsView && "white"} />
                </button>
                <button
                    type="button"
                    onClick={() => setProductsView(false)}
                    className={`${
                        !productsView && "bg-black"
                    } border-[1px] p-[3px] rounded-md border-black`}
                >
                    <BsList size={14} color={!productsView && "white"} />
                </button>
            </div>
            <p className="text-base text-clr-grey-3 font-normal inline-block whitespace-nowrap">{`${productsLength} Products Found`}</p>
            <hr className="w-full h-0.5 bg-black opacity-20 inline-block mx-8" />
            <div className="whitespace-nowrap">
                Sort By
                <select
                    onChange={(e) => dispatch(sortProducts(e.target.value))}
                >
                    <option value="lowest">Price (Lowest)</option>
                    <option value="highest">Price (Highest)</option>
                    <option value="a-z">Name (A - Z)</option>
                    <option value="z-a">Name (Z - A)</option>
                </select>
            </div>
        </div>
    );
}

export default FilterVeiw;
