import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const SidebarToggleBtn = () => {
    return (
        <label
            htmlFor="user-profile-drawer"
            className="btn btn-primary btn-sm drawer-button md:hidden"
        >
            <GiHamburgerMenu />
        </label>
    );
};

export default SidebarToggleBtn;
