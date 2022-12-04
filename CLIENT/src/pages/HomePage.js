import React, { useEffect, useState } from "react";

import Banner from "../components/nonShared/HomePage/Banner";
import BlogCard from "../components/shared/BlogCard";
import BlogRow from "../components/shared/BlogRow";
import SeeMoreBtn from "../components/shared/SeeMoreBtn";
import SecTitle from "../components/shared/SecTitle";
import axios from "axios";

const HomePage = () => {
    const [blogs, setBlogs] = useState([]);
    const [bannarBlog, setBannarBlog] = useState([]);

    // Blog-data fetching handler
    const blogDataFetchHandler = async () => {
        const response = await axios.get(
            "http://localhost:2000/api/v1/blog/get-blog"
        );
        response?.data?.status && setBlogs(response.data.result);
        response?.data?.status &&
            setBannarBlog(response.data.result.slice(0, 3));
    };
    useEffect(() => {
        blogDataFetchHandler();
    }, []);
    return (
        <>
            <Banner bannarBlog={bannarBlog} />
            <div>
                <SecTitle first="tech" second="related" third="blog" />
                <BlogRow>
                    {blogs.map((blog) => {
                        return <BlogCard key={blog._id} blogData={blog} />;
                    })}
                </BlogRow>
                <SeeMoreBtn />
            </div>
        </>
    );
};

export default HomePage;
