import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Button = ({ btnPath, btnName }) => {
    return (
        <Link
            to={`${btnPath}`}
            className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
        >
            {btnName}{" "}
            <span className=" text-base-100 text-lg pl-1">
                <AiOutlineArrowRight />
            </span>
        </Link>
    );
};

export default Button;
