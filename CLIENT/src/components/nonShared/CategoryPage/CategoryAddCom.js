import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const CategoryAddCom = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const handleFormSubmit = async (data) => {
        const response = await axios.post(
            "http://localhost:2000/api/v1/blog/add-category",
            data
        );
        if (response?.data?.status) {
            toast.success("Category Added!!!");
        } else {
            toast.error("Failed to add Category!!!");
        }
        reset();
    };
    return (
        <>
            <div className="w-full max-w-lg max-[768px]:mx-auto">
                <div className="bg-base-100 rounded-md shadow-md px-2 py-8 border-2 border-neutral">
                    <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                        {/* Category Single Input Field */}
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
        </>
    );
};

export default CategoryAddCom;
