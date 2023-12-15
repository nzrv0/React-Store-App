import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";

export const links = [
    {
        id: 1,
        text: "home",
        url: "/",
    },
    {
        id: 2,
        text: "about",
        url: "/about",
    },
    {
        id: 3,
        text: "products",
        url: "/products",
    },
];

export const services = [
    {
        id: 1,
        icon: (
            <GiCompass className="bg-clr-primary-10 text-clr-primary-1 cursor-pointer w-16 h-16 rounded-full p-4 inline-block" />
        ),
        title: "Mission",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
        id: 2,
        icon: (
            <GiDiamondHard className="bg-clr-primary-10 text-clr-primary-1 cursor-pointer w-16 h-16 rounded-full p-4 inline-block" />
        ),
        title: "Vision",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
    {
        id: 3,
        icon: (
            <GiStabbedNote className="bg-clr-primary-10 text-clr-primary-1 cursor-pointer w-16 h-16 rounded-full p-4 inline-block" />
        ),
        title: "History",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi",
    },
];

export const Products = "https://course-api.com/react-store-products";
export const SingleProduct =
    "https://course-api.com/react-store-single-product?id=";
