import { useEffect, useState } from "react";
import { products_url } from "../utils/data.jsx";

export function useFeaturedProducts() {
    const [data, setData] = useState([]);
    useEffect(() => {
        setData(products_url);
    }, []);
    if (products_url !== undefined) {
        return data;
    } else {
        return [];
    }
}
