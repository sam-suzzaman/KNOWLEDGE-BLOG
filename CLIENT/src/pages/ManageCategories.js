import React from "react";
import ManageCategoriesCom from "../components/nonShared/CategoryPage/CategoryListCom";
import CategoryAddCom from "../components/nonShared/CategoryPage/CategoryAddCom";

const ManageCategories = () => {
    return (
        <>
            <div className="w-full mx-auto py-16">
                <h2 className="capitalize font-bold text-secondary text-xl sm:text-3xl mb-8 border-l-4  pl-2 border-primary -mt-4 bg-neutral mx-3 sm:mx-0">
                    manage Categories
                </h2>

                <div className="flex flex-col justify-center md:justify-start md:flex-row gap-6">
                    {/* Add Category */}
                    <CategoryAddCom />
                    {/* Category List part */}
                    <ManageCategoriesCom />
                </div>
            </div>
        </>
    );
};

export default ManageCategories;
