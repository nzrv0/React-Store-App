import React from "react";
import { services } from "../utils/constants";

function Services() {
    return (
        <>
            {services.map((e) => (
                <div
                    key={e.id}
                    className="py-10 px-8 bg-clr-primary-7 flex flex-col items-center gap-3 w-full rounded-md"
                >
                    {e.icon}
                    <h2 className="text-clr-primary-1 text-2xl font-bold tracking-spacing">
                        {e.title}
                    </h2>
                    <p className="text-clr-primary-2 text-sm leading-5 text-center">
                        {e.text}
                    </p>
                </div>
            ))}
        </>
    );
}

export default Services;
