import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import { NavView, Sidebar, RowView, FilterVeiw, ListView } from "../components";
import { fetchProducts } from "../stores/reducers/filterSlice";

function Products() {
    const [productsView, setProductsView] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);
    return (
        <>
            <NavView page="Products" />
            <div className="max-w-[1170px] w-full mx-auto h-auto  p-5 grid md:grid-cols-[1fr_4fr] relative gap-6">
                <Sidebar />
                <div className="max-w-[904px] ">
                    <FilterVeiw
                        setProductsView={setProductsView}
                        productsView={productsView}
                    />
                    {productsView ? <RowView /> : <ListView />}
                </div>
            </div>
        </>
    );
}

export default Products;
