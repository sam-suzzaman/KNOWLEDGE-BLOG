import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import LoadingPage from "./LoginPage";
import {
    AiFillEye,
    AiFillEyeInvisible,
    AiFillGoogleCircle,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { userContext } from "../context/userContext";

const LoginPage = () => {
    const [showPassowrd, setShowPassword] = useState(false);
    const [signInWithGoogle, googleUser, loading, error] =
        useSignInWithGoogle(auth);

    const { handleLoginToken } = useContext(userContext);

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const handleFormSubmit = async (data) => {
        try {
            const response = await axios.post(
                "http://localhost:2000/api/v1/people/login-people",
                data
            );
            const accessToken = response.data.TOKEN;
            localStorage.setItem("access-token", accessToken);
            handleLoginToken(accessToken);
            toast.info("Login Successfully");
            reset();
        } catch (error) {
            console.log(error);
            !error.response.success && toast.error("Login Failed");
        }
    };

    if (error) {
        console.log(error);
        return (
            <div>
                <p>Error: {error?.message}</p>
            </div>
        );
    }
    if (loading) {
        return <LoadingPage />;
    }

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
                                    {...register("email", {
                                        required: true,
                                        pattern:
                                            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i,
                                    })}
                                />
                                {errors.email?.type === "required" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        email is required
                                    </span>
                                )}
                                {errors.email?.type === "pattern" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        enter a valid email
                                    </span>
                                )}
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
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 20,
                                        pattern:
                                            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/gi,
                                    })}
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
                                {errors.password?.type === "required" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        password is required
                                    </span>
                                )}
                                {errors.password?.type === "minLength" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        password at least 8 character
                                    </span>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        password must be in 20 character
                                    </span>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        must contain one digit and a special
                                        character
                                    </span>
                                )}
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
                                    onClick={() => {
                                        signInWithGoogle();
                                    }}
                                    nh
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
