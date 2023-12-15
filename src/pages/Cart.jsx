import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavView, CardProduct } from "../components";
import { clearCart, totalAmount } from "../stores/reducers/cartSlice";

function Cart() {
    const dispatch = useDispatch();
    const cardProducts = useSelector((state) => state.cart.cardProducts);
    const amount = useSelector((state) => state.cart.amount);
    const shippingFee = 5.34;
    const newAmount = shippingFee + amount;
    useEffect(() => {
        dispatch(totalAmount());
    }, [dispatch, cardProducts]);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {cardProducts.length !== 0 ? (
                <>
                    <NavView page="Product" />
                    <div className="max-w-[1170px] w-full mx-auto my-16">
                        <div className="flex items-center justify-around">
                            <h4 className="text-base font-normal text-clr-grey-3 w-full text-center">
                                Item
                            </h4>
                            <h4 className="text-base font-normal text-clr-grey-3 w-full text-center">
                                Price
                            </h4>
                            <h4 className="text-base font-normal text-clr-grey-3 w-full text-center">
                                Quantity
                            </h4>
                            <h4 className="text-base font-normal text-clr-grey-3 w-full text-center">
                                Subtotal
                            </h4>

                            <span />
                        </div>
                        <hr className="w-full h-px bg-clr-grey-3 my-4" />
                        <CardProduct cardProducts={cardProducts} />
                        <hr className="w-full h-px bg-clr-grey-3 my-4" />
                        <div className="flex items-center justify-between">
                            <NavLink
                                to="/products"
                                className="tracking-spacing px-3 py-2 bg-clr-primary-5 rounded-md text-gray-200 text-sm font-normal"
                            >
                                Continue Shopping
                            </NavLink>
                            <button
                                type="button"
                                className="tracking-spacing px-3 py-2 bg-clr-black
                        rounded-md text-gray-200 text-sm font-normal "
                                onClick={() => dispatch(clearCart())}
                            >
                                Clear Shopping Card
                            </button>
                        </div>
                        <div className="flex justify-end mt-10">
                            <div className="sticky right-0 max-w-sm w-full h-auto py-6 px-12 border border-black border-opacity-20">
                                <span className="flex itmes-center justify-between mb-3 text-base font-bold text-black tracking-spacing">
                                    Subtotal:
                                    <h4>
                                        {`$${Math.floor(amount / 100)},${
                                            amount % 100
                                        }`}
                                    </h4>
                                </span>
                                <span className="flex itmes-center justify-between mb-3 text-base font-normal text-black tracking-spacing">
                                    Shipping Fee:
                                    <h4>$5.34</h4>
                                </span>
                                <hr />
                                <span className="flex itmes-center justify-between mb-3 mt-8 text-2xl font-bold text-black tracking-spacing ">
                                    Order Total:
                                    <h4>
                                        {`$${Math.floor(newAmount / 100)},${
                                            newAmount % 100
                                        }`}
                                    </h4>
                                </span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="flex items-center flex-col py-20">
                    <h2 className="text-4xl font-bold text-clr-grey-1 mb-4 tracking-space">
                        Your Cart is empty
                    </h2>
                    <NavLink
                        to="/products"
                        className="tracking-spacing px-3 py-2 bg-clr-primary-5 rounded-md text-gray-200 text-sm font-normal"
                    >
                        Fill It
                    </NavLink>
                </div>
            )}
        </>
    );
}

export default Cart;
