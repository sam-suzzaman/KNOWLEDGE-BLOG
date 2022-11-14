import React from "react";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter, BsGithub } from "react-icons/bs";

const MyInfoPage = () => {
    return (
        <>
            <div className="border-neutral border-2 rounded-md py-4 px-4">
                {/* top row */}
                <div className="">
                    <div className="hero lg:place-items-start">
                        <div className="hero-content flex-col lg:flex-row lg:gap-6 justify-start">
                            <div className="avatar">
                                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src="https://placeimg.com/192/192/people"
                                        alt="avater"
                                    />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-secondary mb-1 text-center lg:text-left">
                                    Samsuzzaman
                                </h3>
                                <p className="text-base font-semibold capitalize text-base-200 text-center lg:text-left">
                                    junior frontend Developer
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* middle row (aboutMe and Address) */}
                <div className="mt-8">
                    <h4 className="capitalize text-xl font-medium text-secondary ">
                        about me:
                    </h4>
                    <p className="mt-4 text-justify text-base font-normal text-base-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur est repudiandae quisquam animi cumque quo
                        placeat atque doloribus eos aspernatur!
                    </p>
                    <div className="mt-10 flex flex-col min-[1165px]:flex-row justify-between gap-2">
                        <div className="border-2 border-neutral rounded-sm shadow-sm p-1 w-full max-w-max">
                            <h5 className="text-base capitalize font-semibold text-secondary">
                                address:{" "}
                                <span className="text-base text-base-200">
                                    N.K Road, Dhaka Bangladesh
                                </span>
                            </h5>
                        </div>
                        <div className="border-2 border-neutral rounded-sm shadow-sm p-1 w-full max-w-max">
                            <h5 className="text-base font-semibold text-secondary">
                                Gmail:{" "}
                                <span className="text-base text-base-200">
                                    demo@gmail.com
                                </span>
                            </h5>
                        </div>
                        <div className="border-2 border-neutral rounded-sm shadow-sm p-1 w-full max-w-max">
                            <h5 className="text-base capitalize font-semibold text-secondary">
                                contact:{" "}
                                <span className="text-base text-base-200">
                                    +880-1700000000
                                </span>
                            </h5>
                        </div>
                    </div>
                </div>

                {/* Bottom row (socal icons) */}
                <div className="mt-10">
                    <h5 className="text-xl font-semibold text-secondary capitalize">
                        social links:
                    </h5>
                    <div className="mt-3 flex flex-col sm:flex-row justify-start gap-3">
                        <button className="btn btn-accent btn-outline group btn-sm gap-2 w-full max-w-max">
                            <span className="text-primary group-hover:text-base-100">
                                Facebook
                            </span>
                            <FaFacebook className="text-primary group-hover:text-base-100" />
                        </button>
                        <button className="btn btn-accent btn-outline group btn-sm gap-2 w-full max-w-max">
                            <span className="text-primary group-hover:text-base-100">
                                twitter
                            </span>
                            <BsTwitter className="text-primary group-hover:text-base-100" />
                        </button>
                        <button className="btn btn-accent btn-outline group btn-sm gap-2 w-full max-w-max">
                            <span className="text-primary group-hover:text-base-100">
                                github
                            </span>
                            <BsGithub className="text-primary group-hover:text-base-100" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyInfoPage;
