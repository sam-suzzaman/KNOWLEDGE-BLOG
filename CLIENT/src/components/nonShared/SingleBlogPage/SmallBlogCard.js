import React from "react";
import { AiOutlineEye, AiFillLike } from "react-icons/ai";
import { Link } from "react-router-dom";

const SmallBlogCard = () => {
    return (
        <Link
            to="/singleBlog/2"
            className="w-full rounded-md mt-6 grid grid-cols-3 items-center gap-3 shadow-lg bg-base-100 px-2 py-2 group"
        >
            {/* left image */}
            <div className=" col-span-1">
                <img
                    src="https://placeimg.com/1000/800/arch"
                    alt="card placeholder"
                    className="w-full rounded-md"
                />
            </div>
            {/* right text */}
            <div className="col-span-2">
                <h4 className="text-base font-semibold text-justify group-hover:text-accent pr-1 duration-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, officiis!
                </h4>
                <div className="flex justify-end mb-1">
                    <p className="flex items-center flex-grow-0">
                        <span className=" text-secondary text-lg font-normal bg-transparent capitalize">
                            <AiOutlineEye />
                        </span>{" "}
                        <span className="text-primary text-sm font-normal capitalize">
                            10
                        </span>
                    </p>
                    <p className="flex items-center text-end flex-grow-0 ml-2">
                        <span className=" text-secondary text-lg font-normal bg-transparent capitalize">
                            <AiFillLike />
                        </span>{" "}
                        <span className="text-primary text-sm font-normal capitalize">
                            10
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default SmallBlogCard;
