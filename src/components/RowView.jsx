import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

function RowView() {
    const products = useSelector((state) => state.filter.productItems);
    return (
        <div className="max-w-full h-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-8">
            {products
                ? products.map((product) => {
                      return (
                          <Product
                              id={product.id}
                              image={product.image}
                              name={product.name}
                              price={product.price}
                          />
                      );
                  })
                : "loading"}
        </div>
    );
}

export default RowView;
