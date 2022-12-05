import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";
import Slider from "react-slick";

const Banner = ({ bannarBlog }) => {
    // slider controller
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000,
        pauseOnHover: true,
        arrows: false,
    };

    return (
        <div className="px-6 lg:px-16 mt-4 md:mt-12">
            <Slider {...settings}>
                {bannarBlog.map((bannar) => {
                    return (
                        <div className="rounded-md relative w-full h-70 md:h-[500px]">
                            <div className="w-full ">
                                <img
                                    src={`${process.env.REACT_APP_BLOG_THUMBNAIL_BASE_URL}/${bannar?.postThumbnail}`}
                                    className="object-cover w-full"
                                    alt="'slider"
                                />
                                <div className=" absolute w-full left-0 bottom-[-7px] px-4 py-4 lg:py-8 bg-neutral bg-opacity-80">
                                    <h2 className="text-lg sm:text-2xl text-primary uppercase font-bold max-w-screen-md">
                                        {bannar?.postTitle.slice(0, 30)}
                                    </h2>
                                    <p className="text-base sm:text-lg mt-4 text-primary font-medium max-w-screen-lg  pr-10 sm:pr-24 lg:pr-4">
                                        this is the description of the article
                                        this is the description of the article
                                        this is the description of the article
                                        this is the description of the article
                                    </p>

                                    <Button
                                        btnPath={`/singleBlog/${bannar?._id}`}
                                        btnName="details"
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
};

export default Banner;
