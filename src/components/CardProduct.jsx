import React from "react";
import { useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import {
    increase,
    decrease,
    removeProduct,
} from "../stores/reducers/cartSlice";

function CardProduct({ cardProducts }) {
    const dispatch = useDispatch();
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {cardProducts
                ? cardProducts.map((item) => (
                      <div className="flex items-center justify-around my-10">
                          <div className="flex items-center">
                              <img
                                  src={item.image}
                                  alt="main"
                                  className="w-24 h-20 object-cover rounded-lg mb-4"
                              />
                              <span className="ml-6">
                                  <h2 className="uppercase text-sm font-semibold text-black tracking-spacing mb-1">
                                      {item.name}
                                  </h2>
                                  <p className="flex items-center gap-4 text-clr-grey-5 text-sm font-normal">
                                      Color:{" "}
                                      <span
                                          className="rounded-md p-2"
                                          style={{
                                              backgroundColor: item.color,
                                          }}
                                      />
                                  </p>
                              </span>
                          </div>
                          <h4 className="text-base font-normal text-clr-primary-5 tracking-widest">
                              {`$${Math.floor(item.price / 100)},${
                                  item.price % 100
                              }`}
                          </h4>
                          <div className="flex items-center gap-6 ">
                              <button
                                  type="button"
                                  onClick={() => dispatch(decrease(item.id))}
                                  className="font-semibold text-2xl"
                              >
                                  -
                              </button>
                              <h4 className="font-semibold text-5xl">
                                  {item.quantity}
                              </h4>
                              <button
                                  type="button"
                                  onClick={() => dispatch(increase(item.id))}
                                  className="font-semibold text-2xl"
                              >
                                  +
                              </button>
                          </div>
                          <h4 className="text-base font-normal text-clr-primary-5 tracking-widest">
                              {`$${Math.floor(
                                  (item.price * item.quantity) / 100,
                              )},${(item.price * item.quantity) % 100}`}
                          </h4>
                          <button
                              type="button"
                              className="bg-red-700 p-2 rounded-md"
                              onClick={() => dispatch(removeProduct(item.id))}
                          >
                              <FaTrash color="white" size={12} />
                          </button>
                      </div>
                  ))
                : "Add Product"}
        </>
    );
}

export default CardProduct;
