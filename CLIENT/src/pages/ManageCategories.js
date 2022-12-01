import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const ManageCategories = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const handleFormSubmit = async (data) => {
        console.log(data);
    };
    return (
        <>
            <div className="w-full max-w-lg mx-auto py-16">
                <h2 className="capitalize font-bold text-secondary text-xl sm:text-3xl mb-8 border-l-4  pl-2 border-primary -mt-4 bg-neutral mx-3 sm:mx-0">
                    Post Categories
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
                                        Category name:
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type here"
                                    className="input input-bordered"
                                    {...register("category")}
                                />
                            </div>

                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                                >
                                    add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ManageCategories;
