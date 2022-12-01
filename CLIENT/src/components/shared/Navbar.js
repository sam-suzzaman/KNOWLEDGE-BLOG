import React from "react";
import { Link, NavLink } from "react-router-dom";
import useUserInfo from "../../Hooks/useUserInfo";
import SidebarToggleBtn from "../nonShared/UserProfile/SidebarToggleBtn";

const Navbar = () => {
    const { result: user, status: userStatus } = useUserInfo();

    const handleLogOut = () => {
        localStorage.setItem("access-token", "");
    };

    return (
        <div className="bg-accent px-4 main_navbar">
            <div className="md:navbar w-full max-w-screen-xl mx-auto">
                {/* start part */}
                <div className="md:navbar-start flex justify-between items-center w-100">
                    <SidebarToggleBtn />
                    <Link to="/" className="font-bold text-base-200 text-base">
                        <span className="text-3xl text-primary">K</span>
                        nowledge
                    </Link>

                    {/* small screen menu */}
                    <div className="dropdown dropdown-end md:hidden ">
                        <label
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7"
                                />
                            </svg>
                        </label>

                        <div
                            tabIndex={0}
                            className="dropdown-content menu bg-accent rounded-br-lg rounded-bl-lg  min-[270px]:w-52 w-max"
                        >
                            {/* Left side main menu */}
                            <ul className="menu menu-horizontal p-0 flex-col w-full">
                                <li className="w-full">
                                    <NavLink
                                        to="/"
                                        className="capitalize font-semibold text-base text-primary hover:text-secondary text-center w-full"
                                    >
                                        home
                                    </NavLink>
                                </li>
                                <li className="w-full">
                                    <NavLink
                                        to="/about"
                                        className="capitalize font-semibold text-base text-primary hover:text-secondary text-center w-full"
                                    >
                                        about
                                    </NavLink>
                                </li>
                                <li className="w-full">
                                    <NavLink
                                        to="/blog"
                                        className="capitalize font-semibold text-base text-primary hover:text-secondary text-center w-full"
                                    >
                                        blog
                                    </NavLink>
                                </li>
                                {/* dropdown menu (left main menu) */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" />
                                    <div className="capitalize font-semibold text-base text-primary hover:text-secondary collapse-title py-0 min-h-0 flex items-center justify-between w-full">
                                        {" "}
                                        dropdown
                                    </div>
                                    <div className="collapse-content rmv_btm_padding flex flex-col p-0 pl-3">
                                        <li>
                                            <NavLink
                                                to="/commingSoon"
                                                className="capitalize font-semibold text-base text-primary hover:text-secondary text-center py-1"
                                            >
                                                dropdown 1
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/commingSoon"
                                                className="capitalize font-semibold text-base text-primary hover:text-secondary text-center py-1"
                                            >
                                                dropdown 2
                                            </NavLink>
                                        </li>
                                    </div>
                                </div>

                                {/* profile info  */}
                                <div className="collapse collapse-arrow">
                                    <input type="checkbox" />
                                    <div className="capitalize font-semibold text-base text-primary hover:text-secondary collapse-title py-0 min-h-0 flex items-center justify-between w-full">
                                        {" "}
                                        user info
                                    </div>
                                    <div className="collapse-content rmv_btm_padding flex flex-col p-0 pl-3">
                                        <li>
                                            <NavLink
                                                to="/userFavourite"
                                                className="capitalize font-semibold text-base text-primary hover:text-secondary text-center py-1"
                                            >
                                                favourite
                                            </NavLink>
                                        </li>
                                        {userStatus && (
                                            <>
                                                <li>
                                                    <NavLink
                                                        to="/userProfile"
                                                        className="capitalize font-semibold text-base text-primary hover:text-secondary text-center py-1"
                                                    >
                                                        profile
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink
                                                        to="/userDashboard"
                                                        className="capitalize font-semibold text-base text-primary hover:text-secondary text-center py-1"
                                                    >
                                                        dashboard
                                                    </NavLink>
                                                </li>
                                            </>
                                        )}

                                        <li>
                                            {!userStatus ? (
                                                <NavLink
                                                    to="/login"
                                                    className="capitalize font-semibold text-base text-primary hover:text-secondary text-center py-1"
                                                >
                                                    login
                                                </NavLink>
                                            ) : (
                                                <button
                                                    className="capitalize
                                                    font-semibold text-base
                                                    text-primary
                                                    hover:text-secondary
                                                    text-center py-1"
                                                    onClick={() =>
                                                        handleLogOut()
                                                    }
                                                >
                                                    logout
                                                </button>
                                            )}
                                        </li>
                                    </div>
                                </div>
                                {/* search box */}
                                <li>
                                    <div className="form-control px-1">
                                        <input
                                            type="text"
                                            placeholder="Search"
                                            className="input input-bordered w-full py-0"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* large device menu */}
                    <div className="hidden md:block md:ml-10">
                        <div className="flex-none">
                            <ul className="menu menu-horizontal p-0">
                                <li>
                                    <NavLink
                                        to="/"
                                        className="capitalize font-semibold py-0 text-base text-primary hover:text-secondary"
                                    >
                                        home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blog"
                                        className="capitalize font-semibold py-0 text-base text-primary hover:text-secondary"
                                    >
                                        Blog
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                        className="capitalize font-semibold py-0 text-base text-primary hover:text-secondary"
                                    >
                                        about
                                    </NavLink>
                                </li>
                                {/* DropDown Menu Start */}
                                <li
                                    tabIndex={0}
                                    className="capitalize font-semibold text-base text-primary hover:text-secondary z-10"
                                >
                                    <NavLink to="/commingSoon">
                                        dropdown
                                        <svg
                                            className="fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                                        </svg>
                                    </NavLink>
                                    <ul className="dropdown-content menu bg-accent rounded-br-lg rounded-bl-lg  min-[270px]:w-52 w-max pt-2">
                                        <li>
                                            <NavLink
                                                to="/commingSoon"
                                                className="capitalize font-semibold  text-base text-primary hover:text-secondary"
                                            >
                                                DropDown 1
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/commingSoon"
                                                className="capitalize font-semibold  text-base text-primary hover:text-secondary"
                                            >
                                                DropDown 2
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* end part */}
                <div className="md:navbar-end hidden md:block">
                    <div className="flex justify-end gap-2">
                        <div className="form-control">
                            <input
                                type="text"
                                placeholder="Search"
                                className="input input-bordered"
                            />
                        </div>
                        {/* User Profile Menu */}
                        <div className="dropdown dropdown-end">
                            <label
                                tabIndex={0}
                                className="btn btn-ghost btn-circle avatar"
                            >
                                <div className="w-10 rounded-full">
                                    <img
                                        src={`${process.env.REACT_APP_AVATAR_BASE_URL}/${user?.avatar}`}
                                        alt="Profile"
                                    />
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className=" px-4 dropdown-content menu bg-accent rounded-br-lg rounded-bl-lg  min-[270px]:w-52 w-max md:mt-2 pb-3"
                            >
                                <li>
                                    <NavLink
                                        to="/userFavourite"
                                        className=" capitalize font-semibold text-base text-primary hover:text-secondary rounded"
                                    >
                                        Favourite
                                    </NavLink>
                                </li>
                                {userStatus && (
                                    <>
                                        <li>
                                            <NavLink
                                                to="/userProfile"
                                                className="justify-between capitalize font-semibold text-base text-primary hover:text-secondary rounded"
                                            >
                                                Profile
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to="/userDashboard"
                                                className=" capitalize font-semibold text-base text-primary hover:text-secondary rounded"
                                            >
                                                Dashboard
                                            </NavLink>
                                        </li>
                                    </>
                                )}

                                <li>
                                    {userStatus ? (
                                        <button
                                            className=" capitalize font-semibold text-base text-primary hover:text-secondary rounded"
                                            onClick={() => handleLogOut()}
                                        >
                                            logout
                                        </button>
                                    ) : (
                                        <NavLink
                                            to="/login"
                                            className=" capitalize font-semibold text-base text-primary hover:text-secondary rounded"
                                        >
                                            login
                                        </NavLink>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
