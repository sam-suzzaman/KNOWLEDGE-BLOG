import React, { useEffect, useState } from "react";
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import SmallBlogCard from "../components/nonShared/SingleBlogPage/SmallBlogCard";
import TextHero from "../components/shared/TextHero";
import axios from "axios";

const SingleBlogPage = () => {
    let { blogID } = useParams();
    const [blog, setBlog] = useState([]);

    // fetch single-blog data handler
    const fetchSingleBlog = async () => {
        try {
            const url = `http://localhost:2000/api/v1/blog/single-blog/${blogID}`;
            const response = await axios.get(url);
            response.data.status && setBlog(response.data.result);
            console.log(response.data.result);
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        fetchSingleBlog();
    }, [blogID]);
    return (
        <>
            <div className="single_blog_wrapper">
                <TextHero>
                    <div className="text-xs sm:text-lg md:text-3xl font-bold breadcrumbs">
                        <ul>
                            <li className="">
                                <a>Home</a>
                            </li>
                            <li>
                                <a>Documents</a>
                            </li>
                            <li>Add Document</li>
                        </ul>
                    </div>
                </TextHero>
            </div>
            {/* Content Part */}
            <div className="w-full max-w-7xl mx-auto rounded-t-md my-16 px-6">
                <div className="grid grid-cols-3 gap-8">
                    <div className="left col-span-3 md:col-span-2">
                        {/* blog title */}
                        <h2 className="text-primary font-semibold text-lg sm:text-2xl text-justify mb-12">
                            {blog.postTitle}
                        </h2>
                        <div className="flex justify-center">
                            <img
                                src={`${process.env.REACT_APP_BLOG_THUMBNAIL_BASE_URL}/${blog.postThumbnail}`}
                                alt=""
                                className="w-1/2"
                            />
                        </div>

                        {/* text content */}
                        <div
                            className=" mt-16"
                            dangerouslySetInnerHTML={{
                                __html: blog.postDescription,
                            }}
                        ></div>
                    </div>
                    <div className="right bg-neutral rounded-md col-span-3 md:col-span-1">
                        {/* Author Part */}
                        <div className=" my-6">
                            <div className="avatar flex justify-center">
                                <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                                    <img src="https://placeimg.com/192/192/people" />
                                </div>
                            </div>
                            <h4 className="text-center capitalize mt-4 text-lg font-semibold text-primary">
                                author name
                            </h4>
                            <p className="text-center font-medium capitalize text-secondary text-base">
                                <span className="font-bold">20</span> posts
                            </p>
                            <p className=" font-medium capitalize text-base-200 text-base px-2 sm:px-4">
                                frontend junior web developer, ABC company. for
                                more information:
                            </p>
                            <ul className="mt-3 px-2 sm:px-4 flex">
                                <li className="mr-2">
                                    <Link to="#" className="">
                                        <CiFacebook className="text-3xl text-accent hover:text-primary duration-300" />
                                    </Link>
                                </li>
                                <li className="mr-2">
                                    <Link to="#" className="">
                                        <AiFillTwitterCircle className="text-3xl text-accent hover:text-primary duration-300" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="">
                                        <AiOutlineGithub className="text-3xl text-accent hover:text-primary duration-300" />
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Related Blog */}
                        <div className="">
                            <h3 className="text-xl font-semibold text-accent px-1 bg-base-200 py-1">
                                Related Blogs
                            </h3>
                            <div className="px-2">
                                <SmallBlogCard />
                                <SmallBlogCard />
                                <SmallBlogCard />
                                <SmallBlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleBlogPage;
