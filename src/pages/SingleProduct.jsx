import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import {
    fetchSingleProduct,
    increaseQuantity,
    decreaseQuantity,
} from "../stores/reducers/filterSlice";
import { addToCard } from "../stores/reducers/cartSlice";
import NavView from "../components/NavView";

function SingleProduct() {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    const product = useSelector((state) => state.filter.singleProduct);
    const [image, setImage] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchSingleProduct(id));
    }, [id, dispatch]);
    useEffect(() => {
        if (color === "" && product) {
            setColor(product.colors[0]);
        }
    }, [product, color]);
    return (
        <>
            <NavView page="Product" />
            <div className="max-w-[1170px] w-full h-auto mx-auto mt-20">
                <NavLink
                    to="/products"
                    className="tracking-spacing px-3 py-2 bg-clr-primary-5 rounded-md text-gray-200 text-sm font-normal"
                >
                    BACK TO PRODUCTS
                </NavLink>
                {product ? (
                    <div className="my-8 grid grid-cols-2 items-center">
                        <div className="max-w-[553px] h-auto">
                            <div className="w-full h-full">
                                <img
                                    src={!image ? product.images[0].url : image}
                                    alt="main"
                                    className="w-full h-[500px] object-cover rounded-lg mb-4"
                                />
                                <div className="flex items-center justify-between">
                                    {product.images.map((item) => (
                                        <img
                                            src={item.url}
                                            alt="thumbnail"
                                            onClick={() => setImage(item.url)}
                                            className="w-24 h-20 object-cover rounded-lg"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-col">
                                <h2 className="text-4xl font-bold text-black tracking-wider mb-3">
                                    {product.name.toUpperCase()}
                                </h2>
                                <span className="mb-2">
                                    <h4>
                                        ({product.reviews} customer reviwes)
                                    </h4>
                                </span>
                                <h4 className="text-xl font-bold text-clr-primary-5 mb-3">
                                    {`$${Math.floor(product.price / 100)},${
                                        product.price % 100
                                    }`}
                                </h4>
                                <p className="mb-5 text-base text-clr-grey-3 leading-loose">
                                    {product.description}
                                </p>
                                <div className="flex flex-col gap-5">
                                    <span className="flex items-center gap-10 text-base font-bold text-black">
                                        Available:
                                        <p className="text-base font-normal">
                                            {product.stock !== 0
                                                ? "In Stock"
                                                : "Out of Stock"}
                                        </p>
                                    </span>
                                    <span className="flex items-center gap-10 text-base font-bold text-black ">
                                        SKU:
                                        <p className="text-base font-normal">
                                            {product.id}
                                        </p>
                                    </span>
                                    <span className="flex items-center gap-10 text-base font-bold text-black">
                                        Brand:
                                        <p className="text-base font-normal">
                                            {product.company.toUpperCase()}
                                        </p>
                                    </span>
                                </div>
                                <hr className="my-8" />
                                {product.stock && (
                                    <>
                                        <div className="flex items-center gap-10">
                                            Colors:{" "}
                                            <div className="flex items-center ml-2">
                                                {product.colors.map(
                                                    (item, id) => (
                                                        <button
                                                            type="button"
                                                            key={id}
                                                            onClick={() =>
                                                                setColor(item)
                                                            }
                                                            className="w-6 h-6 p-2 inline-block relative mr-2 rounded-full opacity-50"
                                                            style={{
                                                                backgroundColor: `${item}`,
                                                            }}
                                                        >
                                                            {color === item && (
                                                                <AiOutlineCheck className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-4 h-4 text-white" />
                                                            )}
                                                        </button>
                                                    ),
                                                )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-6 mb-4 mx-4">
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    dispatch(decreaseQuantity())
                                                }
                                                className="font-semibold text-2xl"
                                            >
                                                -
                                            </button>
                                            <h4 className="font-semibold text-5xl">
                                                {product.quantity}
                                            </h4>
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    dispatch(increaseQuantity())
                                                }
                                                className="font-semibold text-2xl"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <NavLink to="/cart">
                                            <button
                                                type="button"
                                                className="tracking-spacing px-3 py-2 bg-clr-primary-5 rounded-md text-gray-200 text-sm font-normal"
                                                onClick={() =>
                                                    dispatch(
                                                        addToCard({
                                                            product,
                                                            color,
                                                        }),
                                                    )
                                                }
                                            >
                                                ADD TO CART
                                            </button>
                                        </NavLink>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                ) : (
                    "loading"
                )}
            </div>
        </>
    );
}

export default SingleProduct;
