import React from "react";

import Banner from "../components/nonShared/HomePage/Banner";
import BlogCard from "../components/shared/BlogCard";
import BlogRow from "../components/shared/BlogRow";
import SeeMoreBtn from "../components/shared/SeeMoreBtn";
import SecTitle from "../components/shared/SecTitle";

const HomePage = () => {
    return (
        <>
            <Banner />
            <div>
                <SecTitle first="tech" second="related" third="blog" />
                <BlogRow>
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </BlogRow>
                <SeeMoreBtn />
            </div>
        </>
    );
};

export default HomePage;
