import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Multiselect from "multiselect-react-dropdown";
const dropValue = ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"];

const AddPostPage = () => {
    const [tags, setTags] = useState([]);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleTagsRemove = (list) => {
        setTags(list);
    };

    const handleTagsSelect = (list) => {
        setTags(list);
    };

    const handleFormSubmit = (data) => {
        const finalPost = { ...data, tags };
        console.log(finalPost);
    };
    return (
        <>
            <div className="">
                <h2 className="uppercase text-secondary font-bold text-lg sm:text-xl md:text-2xl border-l-4 border-secondary px-2">
                    create a new blog
                </h2>

                {/* form */}
                <div className="">
                    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                        {/* UserName Input Field */}
                        <div className="form-control">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    Username:{" "}
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                value="HardCode"
                                {...register("username")}
                            />
                        </div>
                        {/* User Email Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    User Email:{" "}
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                value="HardCode"
                                {...register("userEmail")}
                            />
                        </div>

                        {/* Blog Title Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    Post Title{" "}
                                    <sup className="text-red-600 font-bold text-sm">
                                        *
                                    </sup>
                                </span>
                            </label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered"
                                {...register("postTitle", {
                                    required: true,
                                    minLength: 20,
                                    maxLength: 300,
                                })}
                            />

                            {errors.postTitle?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    Post Title is required
                                </span>
                            )}
                            {errors.postTitle?.type === "minLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    Post Title is very short &#40; min 20
                                    characters &#41;
                                </span>
                            )}
                            {errors.postTitle?.type === "maxLength" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    Post Title is too long &#40; max 300
                                    characters &#41;
                                </span>
                            )}
                            {/* {errors.postTitle?.type === "pattern" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    username only contains letter
                                </span>
                            )} */}
                        </div>

                        {/* Blog Image Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    Post Photo{" "}
                                    <sup className="text-red-600 font-bold text-sm">
                                        *
                                    </sup>
                                </span>
                            </label>
                            <input
                                type="file"
                                className="file-input file-input-bordered file-input-secondary w-full"
                                {...register("postPhoto", {
                                    required: true,
                                })}
                            />

                            {errors.postPhoto?.type === "required" && (
                                <span className="label-text-alt text-red-600 font-medium ">
                                    Post Photo is required
                                </span>
                            )}
                        </div>

                        {/* Blog Tags Input Field */}
                        <div className="form-control mt-4">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    Post Tags{" "}
                                    <sup className="text-red-600 font-bold text-sm">
                                        *
                                    </sup>
                                </span>
                            </label>

                            <Multiselect
                                id="addPostTagDropdown"
                                isObject={false}
                                onKeyPressFn={function noRefCheck() {}}
                                onRemove={handleTagsRemove}
                                onSelect={handleTagsSelect}
                                onSearch={function noRefCheck() {}}
                                options={dropValue}
                                showArrow={true}
                                showCheckbox
                            />
                        </div>

                        <button className="btn" type="submit">
                            submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddPostPage;
