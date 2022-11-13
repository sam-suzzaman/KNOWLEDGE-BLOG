import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
    AiFillEye,
    AiFillEyeInvisible,
    AiFillGoogleCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [showPassowrd, setShowPassword] = useState(false);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleFormSubmit = (data) => console.log(data);

    return (
        <>
            <div className="w-full max-w-lg mx-auto py-16">
                <h2 className="capitalize font-bold text-secondary text-xl sm:text-3xl mb-8 border-l-4  pl-2 border-primary -mt-4 bg-neutral mx-3 sm:mx-0">
                    login
                </h2>

                <div className="w-full">
                    <div className="bg-base-100 rounded-md shadow-md px-2 py-8 border-2 border-neutral">
                        <form
                            action=""
                            onSubmit={handleSubmit(handleFormSubmit)}
                        >
                            {/* Email Single Input Field */}
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text font-semibold capitalize text-primary text-base">
                                        Your email{" "}
                                        <sup className="text-red-600 font-bold text-sm">
                                            *
                                        </sup>
                                    </span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="Type here"
                                    className="input input-bordered"
                                />
                                <label className="label">
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        Alt label
                                    </span>
                                </label>
                            </div>

                            {/* Password Single Input Field */}
                            <div className="form-control relative">
                                <label className="label ">
                                    <span className="label-text font-semibold capitalize text-primary text-base">
                                        enter password{" "}
                                        <sup className="text-red-600 font-bold text-sm">
                                            *
                                        </sup>
                                    </span>
                                </label>
                                <input
                                    type={`${
                                        showPassowrd ? "text" : "password"
                                    }`}
                                    placeholder="Type here"
                                    className="input input-bordered "
                                />
                                {!showPassowrd ? (
                                    <AiFillEye
                                        className="absolute right-2 top-14"
                                        onClick={() =>
                                            setShowPassword(!showPassowrd)
                                        }
                                    />
                                ) : (
                                    <AiFillEyeInvisible
                                        className="absolute right-2 top-14"
                                        onClick={() =>
                                            setShowPassword(!showPassowrd)
                                        }
                                    />
                                )}
                                <label className="label">
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        Alt label
                                    </span>
                                </label>
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                                >
                                    login
                                </button>
                            </div>
                        </form>
                        <p className="text-center text-sm text-primary mt-3">
                            Don't have an account?{" "}
                            <Link
                                to="/register"
                                className="text-accent underline font-medium capitalize"
                            >
                                SignUp
                            </Link>
                        </p>
                        <div className="divider uppercase">or</div>
                        <div className="flex justify-center">
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                                >
                                    <span className=" mr-1">
                                        <AiFillGoogleCircle className="text-lg" />
                                    </span>{" "}
                                    google
                                </button>
                            </div>
                            <div className="flex justify-center ml-4">
                                <button
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                                >
                                    <span className="mr-1">
                                        <BsFacebook />
                                    </span>{" "}
                                    facebook
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
