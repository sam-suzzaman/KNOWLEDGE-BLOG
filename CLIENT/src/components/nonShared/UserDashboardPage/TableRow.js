import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { TiDeleteOutline } from "react-icons/ti";

const TableRow = () => {
    return (
        <tr className="hover hover:bg-neutral hover:text-secondary duration-300">
            <th className="text-center">1</th>

            <td>
                <div className="flex justify-center items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img
                                src="/tailwind-css-component-profile-2@56w.png"
                                alt="Avatar Tailwind CSS Component"
                            />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>

            <td>
                <div className="flex justify-center items-center">
                    <span className="badge font-semibold capitalize bg-neutral text-primary rounded-3xl hover:bg-accent hover:text-base-100 duration-200 mr-1">
                        tech
                    </span>
                    <span className="badge font-semibold capitalize bg-neutral text-primary rounded-3xl hover:bg-accent hover:text-base-100 duration-200 mr-1">
                        tech
                    </span>
                </div>
            </td>
            <td className="text-center">12/16/2020</td>
            <td>
                <div className="flex justify-center items-center ">
                    <span className="badge mr-1 duration-200 hover:bg-accent hover:text-base-100 text-base py-1 cursor-pointer">
                        <AiOutlineEye />
                    </span>
                    <span className="badge mr-1 hover:bg-accent hover:text-base-100 text-base cursor-pointer">
                        <FiEdit />
                    </span>
                    <span className="badge hover:bg-accent hover:text-base-100 text-base cursor-pointer">
                        <TiDeleteOutline />
                    </span>
                </div>
            </td>
        </tr>
    );
};

export default TableRow;
