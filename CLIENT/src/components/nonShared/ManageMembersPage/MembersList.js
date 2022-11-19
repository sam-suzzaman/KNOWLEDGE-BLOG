import React from "react";

const MembersList = () => {
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

            <td className="text-center">
                <button className="badge badge-md capitalize bg-secondary text-base-100 ml-1">
                    admin
                </button>
                <button className="badge badge-md capitalize bg-secondary text-base-100 ml-1">
                    supervisor
                </button>
            </td>
            <td className="text-center">
                <button className="badge border-1 border-primary capitalize duration-300 hover:text-base-100 hover:bg-primary ml-1">
                    make admin
                </button>
                <button className="badge border-1 border-primary capitalize duration-300 hover:text-base-100 hover:bg-primary ml-1">
                    remove admin
                </button>
            </td>
        </tr>
    );
};

export default MembersList;
