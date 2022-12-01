import React, { useEffect, useState } from "react";
import ManageCategoriesCom from "../components/nonShared/CategoryPage/CategoryListCom";
import CategoryAddCom from "../components/nonShared/CategoryPage/CategoryAddCom";
import axios from "axios";

const ManageCategories = () => {
    const [categoryList, setCategoryList] = useState([]);

    // fetching category data
    const fetchCategories = async () => {
        try {
            const response = await axios.get(
                "http://localhost:2000/api/v1/blog/get-category"
            );
            if (response?.data?.status) {
                setCategoryList(response.data.result);
                // setListLoading(false);
                console.log(categoryList);
            }
        } catch (error) {
            console.log(error.message);
        }
    };
    useEffect(() => {
        fetchCategories();
    }, []);

    return (
        <>
            <div className="w-full mx-auto py-16">
                <h2 className="capitalize font-bold text-secondary text-xl sm:text-3xl mb-8 border-l-4  pl-2 border-primary -mt-4 bg-neutral mx-3 sm:mx-0">
                    manage Categories
                </h2>

                <div className="flex flex-col justify-center md:justify-start md:flex-row gap-6">
                    {/* Add Category */}
                    <CategoryAddCom fetchCategories={fetchCategories} />
                    {/* Category List part */}
                    <ManageCategoriesCom
                        catagoryData={categoryList}
                        fetchCategories={fetchCategories}
                    />
                </div>
            </div>
        </>
    );
};

export default ManageCategories;
