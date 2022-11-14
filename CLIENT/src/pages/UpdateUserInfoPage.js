import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const UpdateUserInfoPage = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleFormSubmit = (data) => console.log(data);
    return (
        <>
            <div className="border-2 border-neutral rounded-md p-4">
                <h3 className="text-xl md:text-2xl capitalize font-bold text-secondary">
                    update my informations
                </h3>
                <div className=" mt-16 mb-8 w-full max-w-md mx-auto shadow-md p-4 border-neutral border-2">
                    {/* Image Preview */}
                    <div className=" mb-8 flex justify-center">
                        <img
                            className="mask mask-square"
                            src="https://placeimg.com/160/160/arch"
                            alt="avater"
                        />
                    </div>
                    {/* Information form */}
                    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                        {/* Avater Image Input */}

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    Your Photo
                                </span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-md w-full"
                            />
                            {/* <label className="label">
                                <span className="label-text-alt">
                                    Alt label
                                </span>
                            </label> */}
                        </div>
                        {/* Name Single Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    user name
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
                        {/* Description Single Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    description
                                </span>
                            </label>
                            <textarea
                                className="textarea textarea-bordered"
                                placeholder="Write here..."
                                {...register("description", {
                                    required: true,
                                    minLength: 80,
                                    maxLength: 300,
                                })}
                            ></textarea>

                            {errors.description?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    a description is required
                                </span>
                            )}
                            {errors.description?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    a description contains at least 80
                                    characters
                                </span>
                            )}
                            {errors.description?.type === "maxLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    a description contains max 300 characters
                                </span>
                            )}
                        </div>
                        {/* Address Single Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    address
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                {...register("address", {
                                    required: true,
                                    minLength: 3,
                                    maxLength: 100,
                                })}
                            />

                            {errors.address?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    address is required
                                </span>
                            )}
                            {errors.address?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    address must be at least 3 character
                                </span>
                            )}
                            {errors.address?.type === "maxLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    address can be max 100 character
                                </span>
                            )}
                        </div>
                        {/* Name Single Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    contact number
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                {...register("contactNumber", {
                                    required: true,
                                    minLength: 11,
                                    maxLength: 14,
                                    pattern: /(\+88)?-01[0-9]\d{8}/i,
                                })}
                            />

                            {errors.contactNumber?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    contactNumber is required
                                </span>
                            )}
                            {errors.contactNumber?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    contactNumber must be 3 character
                                </span>
                            )}
                            {errors.contactNumber?.type === "maxLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    contactNumber must be in 20 character
                                </span>
                            )}
                            {errors.contactNumber?.type === "pattern" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    enter a valid Contact Number
                                </span>
                            )}
                        </div>
                        {/* Social Link Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    facebook account uRL
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                {...register("fbURL", {
                                    // required: true,
                                    minLength: 10,
                                })}
                            />

                            {/* {errors.fbURL?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    facebook url is required
                                </span>
                            )} */}
                            {errors.fbURL?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    fbURL must be more than 10 character
                                </span>
                            )}
                        </div>
                        {/* Social Link Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    twitter account uRL
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                {...register("twitterURL", {
                                    // required: true,
                                    minLength: 10,
                                })}
                            />

                            {/* {errors.twitterURL?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    twitter url is required
                                </span>
                            )} */}
                            {errors.twitterURL?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    twitter url must be more than 10 character
                                </span>
                            )}
                        </div>
                        {/* Social Link Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    github account uRL
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                {...register("githubURL", {
                                    // required: true,
                                    minLength: 10,
                                })}
                            />

                            {/* {errors.githubURL?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    github url is required
                                </span>
                            )} */}
                            {errors.githubURL?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    github url must be more than 10 character
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
                </div>
            </div>
        </>
    );
};

export default UpdateUserInfoPage;
