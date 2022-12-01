import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";

const CategoryListCom = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();

    const handleFormSubmit = async (data) => {
        console.log(data);
        // const response = axios.post(
        //     "http://localhost:2000/api/v1/blog/add-category"
        // );
        reset();
    };
    return (
        <>
            <div className="w-full max-w-lg max-[768px]:mx-auto">
                <div className="bg-base-100 rounded-md shadow-md px-2 py-8 border-2 border-neutral">
                    <h4 className="text-lg md:text-xl font-medium  mb-3 text-secondary capitalize border-b pb-1">
                        Category list:
                    </h4>
                    <div className="">
                        <form
                            action=""
                            onSubmit={handleSubmit(handleFormSubmit)}
                        >
                            <div className="form-control w-max">
                                <label className="cursor-pointer label justify-start py-0 mb-1">
                                    <input
                                        type="checkbox"
                                        className="checkbox h-[17px] w-[17px] checkbox-base-100"
                                        {...register("one")}
                                    />
                                    <span className="label-text text-primary text-base">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            <div className="form-control w-max">
                                <label className="cursor-pointer label justify-start py-0 mb-1">
                                    <input
                                        type="checkbox"
                                        className="checkbox h-[17px] w-[17px] checkbox-base-100"
                                        {...register("two")}
                                    />
                                    <span className="label-text text-primary text-base">
                                        Remember me
                                    </span>
                                </label>
                            </div>
                            {/* delete button */}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-xs sm:btn-sm md:px-10  bg-accent text-base-100 border-accent mt-4"
                                >
                                    delete
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CategoryListCom;
