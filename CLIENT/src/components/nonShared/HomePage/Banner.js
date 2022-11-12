import React from "react";
import { Link } from "react-router-dom";
import Button from "../../shared/Button";

const Banner = () => {
    return (
        <div className="px-6 lg:px-16 mt-4 md:mt-12">
            <div className="carousel rounded-md w-full h-80 md:h-auto">
                {/* Slide Content -1 */}
                <div
                    id="slide1"
                    className="carousel-item relative w-full
            "
                >
                    <img
                        src="https://placeimg.com/800/200/arch"
                        className="w-full"
                        alt="'slider"
                    />
                    <div className="absolute right-0 top-0 mr-2 mt-2 z-10">
                        <a
                            href="#slide4"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide2"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100 ml-2"
                        >
                            ❯
                        </a>
                    </div>
                    <div className=" absolute w-full left-0 bottom-0 px-4 py-4 bg-primary bg-opacity-60">
                        <h2 className="text-lg sm:text-2xl text-accent uppercase font-bold max-w-screen-md">
                            this is title 1
                        </h2>
                        <p className="text-base sm:text-lg mt-4 text-base-100 max-w-screen-lg  pr-10 sm:pr-24 lg:pr-4">
                            this is the description of the article this is the
                            description of the article this is the description
                            of the article this is the description of the
                            article
                        </p>

                        <Button btnPath="/" btnName="details" />
                    </div>
                </div>
                {/* Slide Content -2 */}
                <div
                    id="slide2"
                    className="carousel-item relative w-full
            "
                >
                    <img
                        src="https://placeimg.com/800/200/arch"
                        className="w-full"
                        alt="'slider"
                    />
                    <div className="absolute right-0 top-0 mr-2 mt-2 z-10">
                        <a
                            href="#slide1"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide3"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100 ml-2"
                        >
                            ❯
                        </a>
                    </div>
                    <div className=" absolute w-full left-0 bottom-0 px-4 py-4 bg-primary bg-opacity-60">
                        <h2 className="text-lg sm:text-2xl text-accent uppercase font-bold max-w-screen-md">
                            this is title 2
                        </h2>
                        <p className="text-base sm:text-lg mt-4 text-base-100 max-w-screen-lg  pr-10 sm:pr-24 lg:pr-4">
                            this is the description of the article this is the
                            description of the article this is the description
                            of the article this is the description of the
                            article
                        </p>
                        <Link
                            to="/"
                            className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                        >
                            Details
                        </Link>
                    </div>
                </div>
                {/* Slide Content -3 */}
                <div
                    id="slide3"
                    className="carousel-item relative w-full
            "
                >
                    <img
                        src="https://placeimg.com/800/200/arch"
                        className="w-full"
                        alt="'slider"
                    />
                    <div className="absolute right-0 top-0 mr-2 mt-2 z-10">
                        <a
                            href="#slide2"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide4"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100 ml-2"
                        >
                            ❯
                        </a>
                    </div>
                    <div className=" absolute w-full left-0 bottom-0 px-4 py-4 bg-primary bg-opacity-60">
                        <h2 className="text-lg sm:text-2xl text-accent uppercase font-bold max-w-screen-md">
                            this is title 3
                        </h2>
                        <p className="text-base sm:text-lg mt-4 text-base-100 max-w-screen-lg  pr-10 sm:pr-24 lg:pr-4">
                            this is the description of the article this is the
                            description of the article this is the description
                            of the article this is the description of the
                            article
                        </p>
                        <Link
                            to="/"
                            className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                        >
                            Details
                        </Link>
                    </div>
                </div>
                {/* Slide Content -4 */}
                <div
                    id="slide4"
                    className="carousel-item relative w-full
            "
                >
                    <img
                        src="https://placeimg.com/800/200/arch"
                        className="w-full"
                        alt="'slider"
                    />
                    <div className="absolute right-0 top-0 mr-2 mt-2 z-10">
                        <a
                            href="#slide3"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100"
                        >
                            ❮
                        </a>
                        <a
                            href="#slide1"
                            className="btn btn-xs sm:btn-sm md:btn-md btn-circle hover:bg-accent hover:border-accent hover:text-base-100 ml-2"
                        >
                            ❯
                        </a>
                    </div>
                    <div className=" absolute w-full left-0 bottom-0 px-4 py-4 bg-primary bg-opacity-60">
                        <h2 className="text-lg sm:text-2xl text-accent uppercase font-bold max-w-screen-md">
                            this is title 4
                        </h2>
                        <p className="text-base sm:text-lg mt-4 text-base-100 max-w-screen-lg  pr-10 sm:pr-24 lg:pr-4">
                            this is the description of the article this is the
                            description of the article this is the description
                            of the article this is the description of the
                            article
                        </p>
                        <Link
                            to="/"
                            className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
