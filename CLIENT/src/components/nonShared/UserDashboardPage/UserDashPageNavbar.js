import React from "react";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const UserDashPageNavbar = () => {
    return (
        <ul className="menu  text-primary">
            <li className="flex">
                <NavLink
                    to="/userDashboard/postInfo"
                    className="font-semibold text-lg sm:text-xl capitalize rounded-sm mb-4"
                >
                    <CgProfile />
                    post info
                </NavLink>
            </li>
            <li className="flex">
                <NavLink
                    to="/userDashboard/addPost"
                    className="font-semibold text-xl capitalize rounded-sm mb-4"
                >
                    <FiEdit />
                    add post
                </NavLink>
            </li>
        </ul>
    );
};

export default UserDashPageNavbar;
