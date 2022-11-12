import React from "react";
import { BsFillStarFill } from "react-icons/bs";

const SecTitle = () => {
    return (
        <div className="text-primary  uppercase font-bold text-xl sm:text-2xl md:text-3xl text-center w-full max-w-screen-xl mx-auto mt-12">
            <div className=" divider my-1">
                <BsFillStarFill className="-3xl" />
                <BsFillStarFill className="text-accent text-3xl" />
                <BsFillStarFill className="text-3xl" />
            </div>
            <h2 className="">
                <span className="text-accent">Tech</span>{" "}
                <span className="text-primary">Related</span>{" "}
                <span className="text-accent">blogs</span>
            </h2>
            <div className=" divider my-1">
                <BsFillStarFill className="-3xl" />
                <BsFillStarFill className="text-accent text-3xl" />
                <BsFillStarFill className="text-3xl" />
            </div>
        </div>
    );
};

export default SecTitle;
