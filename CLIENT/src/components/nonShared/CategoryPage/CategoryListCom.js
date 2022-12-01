import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import LoadingCom from "../../shared/Loading";

const CategoryListCom = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [listLoading, setListLoading] = useState(true);

    // fetching category data
    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                "http://localhost:2000/api/v1/blog/get-category"
            );
            if (response?.data?.status) {
                setCategoryList(response.data.result);
                setListLoading(false);
                console.log(categoryList);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

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

    if (listLoading) {
        return <LoadingCom />;
    }
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
                            {categoryList?.map((category) => {
                                return (
                                    <div
                                        className="form-control w-max"
                                        key={category._id}
                                    >
                                        <label className="cursor-pointer label justify-start py-0 mb-1">
                                            <input
                                                type="checkbox"
                                                className="checkbox h-[17px] w-[17px] checkbox-base-100"
                                                {...register(category._id)}
                                            />
                                            <span className="label-text text-primary text-base">
                                                {category.categoryName}
                                            </span>
                                        </label>
                                    </div>
                                );
                            })}

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
