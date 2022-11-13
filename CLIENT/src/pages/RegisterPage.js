import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
                    create an account
                </h2>

                <div className="w-full">
                    <div className="bg-base-100 rounded-md shadow-md px-2 py-8 border-2 border-neutral">
                        <form
                            action=""
                            onSubmit={handleSubmit(handleFormSubmit)}
                        >
                            {/* Name Single Input Field */}
                            <div className="form-control">
                                <label className="label ">
                                    <span className="label-text font-semibold capitalize text-primary text-base">
                                        Your name{" "}
                                        <sup className="text-red-600 font-bold text-sm">
                                            *
                                        </sup>
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered"
                                    {...register("username", {
                                        required: true,
                                        minLength: 3,
                                        maxLength: 20,
                                        pattern: /^[A-Za-z]+$/i,
                                    })}
                                />

                                {errors.username?.type === "required" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        username is required
                                    </span>
                                )}
                                {errors.username?.type === "minLength" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        username must be 3 character
                                    </span>
                                )}
                                {errors.username?.type === "maxLength" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        username must be in 20 character
                                    </span>
                                )}
                                {errors.username?.type === "pattern" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        username only contains letter
                                    </span>
                                )}
                            </div>

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

                            {/* confirm password Input Field */}
                            <div className="form-control relative">
                                <label className="label ">
                                    <span className="label-text font-semibold capitalize text-primary text-base">
                                        confirm password{" "}
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
                                    {...register("confirmPassword", {
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
                                {errors.confirmPassword?.type ===
                                    "required" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        password is required
                                    </span>
                                )}
                                {errors.confirmPassword?.type ===
                                    "minLength" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        password at least 8 character
                                    </span>
                                )}
                                {errors.confirmPassword?.type ===
                                    "maxLength" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        password must be in 20 character
                                    </span>
                                )}
                                {errors.confirmPassword?.type === "pattern" && (
                                    <span className="label-text-alt text-red-600 font-medium ">
                                        must contain one digit and a special
                                        character
                                    </span>
                                )}
                            </div>

                            {/* Submit button */}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                                >
                                    create account
                                </button>
                            </div>
                        </form>
                        
                        <p className="text-center text-sm text-primary mt-3">
                            Already have an account?{" "}
                            <Link
                                to="/login"
                                className="text-accent underline font-medium capitalize"
                            >
                                login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
