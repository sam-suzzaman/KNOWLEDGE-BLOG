import React from "react";
import { AiOutlineEye, AiFillLike } from "react-icons/ai";
import Button from "./Button";

const BlogCard = () => {
    return (
        <div className="card shadow-xl group">
            <figure className="relative">
                <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
                {/* tags */}
                <div className="absolute top-2 right-2 hidden group-hover:inline-block transition duration-300 ">
                    <span className="badge bg-secondary border-secondary text-base-100 capitalize ml-2">
                        web
                    </span>
                    <span className="badge bg-secondary border-secondary text-base-100 capitalize ml-2">
                        tech
                    </span>
                </div>
            </figure>

            <div className="card-body">
                <h3 className="text-lg sm:text-xl font-semibold text-secondary text-justify hover:text-primary">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Aut, neque!
                </h3>
                {/* like and view */}
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
                <p className="">
                    <span className="badge text-primary text-xs font-normal capitalize">
                        samsuzzaman
                    </span>{" "}
                    ||{" "}
                    <span className="badge text-primary text-xs font-normal capitalize">
                        11 Jan 2022
                    </span>
                </p>

                <p className="text-primary text-base text-justify mt-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                    quo voluptatum numquam sequi dolorem sunt?
                </p>
            </div>
            <div className=" flex justify-center mb-6">
                <Button btnPath="/" btnName="read more" />
            </div>
        </div>
    );
};

export default BlogCard;
