import React from "react";
import Button from "./Button";
import { AiOutlineEye, AiFillLike } from "react-icons/ai";

const BlogRow = ({ children }) => {
    return (
        <div className="grid min-[550px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 w-full max-w-7xl mx-auto pt-16 pb-4">
            {children}
        </div>
    );
};

export default BlogRow;
