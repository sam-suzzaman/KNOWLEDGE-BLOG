import React from "react";
import { NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FiEdit } from "react-icons/fi";

const ProfileSideNavbar = () => {
    return (
        <ul className="menu  text-primary">
            <li className="flex">
                <NavLink
                    to="/userProfile/myInfo"
                    className="font-semibold text-lg sm:text-xl capitalize rounded-sm mb-4"
                >
                    <CgProfile />
                    My info
                </NavLink>
            </li>
            <li className="flex">
                <NavLink
                    to="/userProfile/changePassword"
                    className="font-semibold text-xl capitalize rounded-sm mb-4"
                >
                    <FiEdit />
                    change password
                </NavLink>
            </li>
            <li className="flex">
                <NavLink
                    to="/userProfile/updateUserInfo"
                    className="font-semibold text-xl capitalize rounded-sm mb-4"
                >
                    <FiEdit />
                    update info
                </NavLink>
            </li>
        </ul>
    );
};

export default ProfileSideNavbar;
