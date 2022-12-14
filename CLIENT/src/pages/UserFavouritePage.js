import React from "react";
import BlogCard from "../components/shared/BlogCard";
import BlogRow from "../components/shared/BlogRow";
import SeeMoreBtn from "../components/shared/SeeMoreBtn";
import TextHero from "../components/shared/TextHero";
import useFetchBlog from "../Hooks/useFetchBlog";
import Loading from "../components/shared/Loading";

const UserFavouritePage = () => {
    const [blogs, loading, error] = useFetchBlog("get-blog");

    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <TextHero>
                <h2 className="text-lg font-semibold sm:text-xl md:text-3xl uppercase xl:pl-4">
                    my faourite blogs
                </h2>
            </TextHero>
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

export default UserFavouritePage;
