import React, { useEffect, useState } from "react";
import BlogCard from "../components/shared/BlogCard";
import BlogRow from "../components/shared/BlogRow";
import SeeMoreBtn from "../components/shared/SeeMoreBtn";
import TextHero from "../components/shared/TextHero";
import { AiOutlineSearch } from "react-icons/ai";
import axios from "axios";
import useFetchBlog from "../Hooks/useFetchBlog";

const BlogPage = () => {
    // const [blogs, setBlogs] = useState([]);
    const [blogs, loading, error] = useFetchBlog("get-blog");

    // Blog-data fetching handler
    // const blogDataFetchHandler = async () => {
    //     const response = await axios.get(
    //         "http://localhost:2000/api/v1/blog/get-blog"
    //     );
    //     response?.data?.status && setBlogs(response.data.result);
    // };
    // useEffect(() => {
    //     blogDataFetchHandler();
    // }, []);

    return (
        <>
            {/* Hero Section */}
            <TextHero>
                <h2 className="text-lg font-semibold sm:text-xl md:text-3xl uppercase xl:pl-4">
                    our blogs
                </h2>
            </TextHero>

            {/* Filters and Search */}
            <div className="flex flex-wrap justify-center items-center mt-16 w-full max-w-7xl mx-auto px-4 xl:px-4">
                <div className="mb-4 sm:mb-0 mr-4">
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected className="capitalize">
                            Category
                        </option>
                        <option className="capitalize">Normal Apple</option>
                        <option className="capitalize">Normal Orange</option>
                        <option className="capitalize">Normal Tomato</option>
                    </select>
                </div>
                <div className="mb-4 sm:mb-0 mr-4">
                    <select className="select select-bordered w-full max-w-xs">
                        <option disabled selected className="capitalize">
                            Filtered By
                        </option>
                        <option className="capitalize">Normal Apple</option>
                        <option className="capitalize">Normal Orange</option>
                        <option className="capitalize">Normal Tomato</option>
                    </select>
                </div>
                <div className="mr-4">
                    <form action="" className="flex justify-end items-center">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-md w-full max-w-xs"
                        />
                        <button className="btn btn-xs min-[240px]:btn-md  ml-1">
                            <AiOutlineSearch className="text-lg text-primary" />
                        </button>
                    </form>
                </div>
            </div>

            {/* All Blogs */}
            <div className="">
                <BlogRow>
                    {blogs.map((blog) => {
                        return <BlogCard key={blog._id} blogData={blog} />;
                    })}
                </BlogRow>
                <SeeMoreBtn />
            </div>

            {/* Pagination */}
            <div className="flex justify-center my-16">
                <div className="btn-group">
                    <button className="btn">1</button>
                    <button className="btn btn-active">2</button>
                    <button className="btn">3</button>
                    <button className="btn">4</button>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
