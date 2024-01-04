import React from "react";
import { NavLink, useFetcher } from "react-router-dom";
import { useEffect, useState } from "react";

import { Product, Services, Loading } from "../components";

import { useFeaturedProducts } from "../services/FetchFuturedProducts";
import Hero1 from "../assets/hero1.jpeg";
import Hero2 from "../assets/hero2.jpeg";

function Home() {
    let product = useFeaturedProducts();
    product = product.filter((e) => e.featured === true);
    return (
        <div className="max-w-screen h-auto">
            <main className="max-w-full ">
                <section
                    id="hero"
                    className="flex flex-row items-center gap-56 max-w-7xl mx-auto px-4"
                >
                    <div className="w-[70%] mx-auto ">
                        <h1 className="text-black text-4xl lg:text-5xl lg:leading-[1.2] font-bold">
                            Design Your
                            <br />
                            Comfort Zone
                        </h1>
                        <p className="text-lg text-clr-grey-5 leading-[2] my-8">
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Iusto, at sed omnis corporis doloremque
                            possimus velit! Repudiandae nisi odit, aperiam odio
                            ducimus, obcaecati libero et quia tempora excepturi
                            quis alias?
                        </p>
                        <button
                            type="button"
                            className="lg:px-6 lg:py-3 rounded-md bg-clr-primary-5 text-clr-primary-10 text-base font-medium hover:bg-clr-primary-7 hover:text-clr-primary-2 px-4 py-1 transition-all duration-500"
                        >
                            <NavLink to="/products">SHOP NOW</NavLink>
                        </button>
                    </div>
                    <div className="w-full hidden relative lg:block">
                        <img
                            className="w-[250px] h-40 absolute bottom-0 left-0 -translate-x-[50%] z-30 rounded-md"
                            src={Hero1}
                            alt=""
                        />
                        <img
                            className="max-w-full h-[550px] rounded-md before:contents-[''] before:inline-block before:h-24 before:w-4 before:bg-pink-500"
                            src={Hero2}
                            alt=""
                        />
                    </div>
                </section>
                <section className="w-full h-auto bg-clr-grey-10 py-8">
                    <h1 className="text-center text-4xl leading-[1] tracking-[0.1rem]">
                        Featured Products
                    </h1>
                    <div className="w-24 h-1 bg-clr-primary-5 mx-auto mt-2" />
                    <div className="lg:grid lg:grid-cols-2 xl:grid-cols-3 my-16 px-5 gap-10 place-items-center grid grid-cols-1 max-w-[1170px] mx-auto">
                        <Product
                            image={product[0]?.image}
                            name={product[0]?.name}
                            price={product[0]?.price}
                        />
                        <Product
                            image={product[1]?.image}
                            name={product[1]?.name}
                            price={product[1]?.price}
                        />

                        <Product
                            image={product[2]?.image}
                            name={product[2]?.name}
                            price={product[2]?.price}
                        />
                    </div>
                    <button
                        type="button"
                        className="px-3 py-2 rounded-md bg-clr-primary-5 text-clr-primary-10 text-sm font-medium hover:bg-clr-primary-7 hover:text-clr-primary-2 block mx-auto transition-all duration-500"
                    >
                        <NavLink to="/products">ALL PRODUCTS</NavLink>
                    </button>
                </section>
                <section className="w-full xl:h-[470px] h-auto bg-clr-primary-10 px-4 ">
                    <div className="max-w-[1170px] mx-auto flex flex-wrap gap-x-72 gap-y-7 relative py-24">
                        <h1 className="text-clr-primary-1 text-4xl font-bold mr-auto">
                            Custom Furniture
                            <br />
                            Built Only For You
                        </h1>
                        <p className="text-base text-clr-primary-3 w-[450px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe dolorum debitis consectetur
                            reprehenderit non aliquam voluptates dolore aut vero
                            consequuntur.
                        </p>
                        <div className="lg:relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full top-16 gap-12">
                            <Services />
                        </div>
                    </div>
                </section>
                <section className="max-w-[1170px] h-auto xl:my-60 my-20 mx-auto px-5">
                    <h2 className="text-4xl font-bold text-black tracking-spacing mb-3">
                        Join our newsletter and get 20% off
                    </h2>
                    <div className="flex items-center flex-wrap  gap-y-3 ">
                        <p className="text-clr-grey-5 leading-[2] lg:max-w-md mr-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Placeat sint unde quaerat ratione soluta
                            veniam provident adipisci cumque eveniet tempore?
                        </p>
                        <form className="flex items-center">
                            <input
                                type="text"
                                placeholder="Enter Email"
                                className="w-full placeholder:text-black py-2 px-4 placeholder:text-base border-solid border-black border-[2px] rounded-l-md"
                            />
                            <input
                                type="submit"
                                className="py-2 px-4 bg-clr-primary-5 border-solid border-black border-[2px] rounded-r-md"
                            />
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
