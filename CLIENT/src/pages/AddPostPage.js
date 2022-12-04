import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import QuillForm from "../components/shared/QuillForm";
import MultiSelectCategory from "../components/nonShared/AddPostPage/MultiSelectCategory";
import useUserInfo from "../Hooks/useUserInfo";
import axios from "axios";
import { toast } from "react-toastify";

const AddPostPage = () => {
    const user = useUserInfo();
    const [selectedCategorires, setSelectedCategorires] = useState([]);
    const [blogContentQuill, setBlogContentQuill] = useState("");
    const [creator, setCreator] = useState({});
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    // creator Object
    useEffect(() => {
        if (user.status) {
            const { email: userEmail, name: userName } = user.result;
            setCreator({ userName, userEmail });
        }
    }, [user]);

    // to handle quill-form data
    const getQuillFormValue = (value) => {
        // const htmlValue=value.root.innerHTML
        setBlogContentQuill(value);
    };

    // to handle Form
    const handleFormSubmit = async (data) => {
        const { postTitle, postPhoto } = data;

        // to set "common" category
        if (selectedCategorires.length === 0) {
            selectedCategorires.push("common");
        }

        // Extract photo/thumbnail of post
        const thumbnailFile = postPhoto[0];

        // Creating Form Data
        const formData = new FormData();
        formData.append("postThumbnail", thumbnailFile, thumbnailFile.name);
        formData.append("authorName", creator.userName);
        formData.append("authorEmail", creator.userEmail);
        formData.append("postTitle", postTitle);
        formData.append("postCategory", selectedCategorires);
        formData.append("postDescription", blogContentQuill);

        // Display the form values
        for (const value of formData.values()) {
            console.log(value);
        }
        // Sending Blog
        try {
            const response = await axios.post(
                "http://localhost:2000/api/v1/blog/add-blog",
                formData
            );
            if (response.data.status) {
                toast.info("Blog Posted!!!");
                reset();
            }
        } catch (error) {
            console.log(error);
            if (!error.response.data.status) {
                toast.warning("Blog post failed!!!");
            }
        }
    };

    return (
        <>
            <div className="">
                <h2 className="uppercase text-secondary font-bold text-lg sm:text-xl md:text-2xl border-l-4 border-secondary px-2">
                    create a new blog
                </h2>

                {/* form */}
                <div className="w-full mt-4 md:mt-8">
                    <form
                        className="w-full"
                        action=""
                        onSubmit={handleSubmit(handleFormSubmit)}
                    >
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
                                disabled
                                value={creator.userName || "unknown"}
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
                                className="input input-bordered bg-transparent"
                                value={creator.userEmail}
                                disabled
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

                            <MultiSelectCategory
                                setSelectedCategorires={setSelectedCategorires}
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="form-control mt-4 ">
                            <label className="label ">
                                <span className="label-text font-semibold capitalize text-primary text-base">
                                    Post Content{" "}
                                    <sup className="text-red-600 font-bold text-sm">
                                        *
                                    </sup>
                                </span>
                            </label>
                            <div className="" id="quill_form">
                                <QuillForm
                                    getQuillFormValue={getQuillFormValue}
                                />
                            </div>
                        </div>
                        {/* submit button */}
                        <div className="flex justify-center md:justify-start mt-8">
                            <button
                                className="btn btn-md px-8 h-8 md:px-12 md:h-3 hover:text-base-100 border-secondary rounded-3xl"
                                type="submit"
                            >
                                submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddPostPage;
