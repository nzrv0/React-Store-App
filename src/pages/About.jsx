import React from "react";
import NavViev from "../components/NavView";
import Hero from "../assets/hero2.jpeg";

function About() {
    return (
        <>
            <NavViev page="About" />
            <div className="max-w-6xl py-20 flex items-start gap-20  mx-auto">
                <img
                    src={Hero}
                    alt="hero"
                    className="rounded-md w-[500px] h-[500px] block"
                />
                <div>
                    <h2 className="text-4xl text-clr-grey-1 tracking-spacing mb-3 font-bold">
                        Our Story
                    </h2>
                    <hr className="w-24 h-1 bg-clr-primary-5 mb-8" />
                    <p className="text-base mb-8 text-clr-grey-5 font-normal">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Fugiat accusantium sapiente tempora sed dolore
                        esse deserunt eaque excepturi, delectus error accusamus
                        vel eligendi, omnis beatae. Quisquam, dicta. Eos quod
                        quisquam esse recusandae vitae neque dolore, obcaecati
                        incidunt sequi blanditiis est exercitationem molestiae
                        delectus saepe odio eligendi modi porro eaque in libero
                        minus unde sapiente consectetur architecto. Ullam rerum,
                        nemo iste ex, eaque perspiciatis nisi, eum totam velit
                        saepe sed quos similique amet. Ex, voluptate accusamus
                        nesciunt totam vitae esse iste.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;
