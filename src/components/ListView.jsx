import React from "react";
import { useSelector } from "react-redux";
import ProductList from "./ProductList";

function ProductsList() {
    const products = useSelector((state) => state.filter.productItems);
    return (
        <div className="max-w-full flex flex-col gap-y-12">
            {products
                ? products.map((product) => {
                      return (
                          <ProductList
                              id={product.id}
                              image={product.image}
                              name={product.name}
                              price={product.price}
                              description={product.description}
                          />
                      );
                  })
                : "loading"}
        </div>
    );
}

export default ProductsList;
