import React from "react";
import { AiOutlineDoubleLeft } from "react-icons/ai";
import { BiHappy } from "react-icons/bi";
import { Link } from "react-router-dom";

const CommingSoonPage = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-neutral">
            <div className=" px-4 flex justify-center flex-col items-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide uppercase flex items-center text-secondary mb-1 md:mb-3">
                    comming soon <BiHappy className="text-base-200" />
                </h2>
                <p className="text-base-200 text-sm md:text-base max-w-sm text-center mb-3 md:mb-5">
                    The page you are looking is under development state. It will
                    come soon
                </p>
                <Link
                    to="/"
                    className=" flex items-center px-4 py-1 md:px-8 md:py-2 border-2 border-secondary rounded-3xl text-primary uppercase font-medium text-sm md:text-base hover:text-base-100 hover:bg-secondary duration-300 group"
                >
                    <AiOutlineDoubleLeft className="font-bold text-primary group-hover:text-base-100 duration-300" />{" "}
                    <span className="group-hover:ml-1 duration-300">
                        back to home
                    </span>
                </Link>
            </div>
        </div>
    );
};

export default CommingSoonPage;
