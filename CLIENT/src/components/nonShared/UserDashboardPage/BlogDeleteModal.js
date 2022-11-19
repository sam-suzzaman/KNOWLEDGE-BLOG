import React from "react";
import { GiCancel, GiCheckMark } from "react-icons/gi";
import { AiFillWarning } from "react-icons/ai";

const BlogDeleteModal = () => {
    return (
        <>
            {/* The button to open modal */}
            {/* <label htmlFor="BlogDeleteModal" className="btn">
                open modal
            </label> */}

            {/* Put this part before </body> tag */}
            <input
                type="checkbox"
                id="BlogDeleteModal"
                className="modal-toggle"
            />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-xl flex items-center">
                        <AiFillWarning className="text-red-700 text-2xl mr-1" />{" "}
                        <span className="capitalize">Are you sure</span>
                    </h3>
                    <p className="py-4">
                        Note: The Blog will be permenantly deleted and can not
                        be recovered.
                    </p>
                    <div className="modal-action">
                        <label
                            htmlFor="BlogDeleteModal"
                            className="badge text-green-600 hover:text-white hover:bg-green-600 h-8 cursor-pointer border-2 border-green-600"
                        >
                            <GiCheckMark className="text-xl" />
                        </label>
                        <label
                            htmlFor="BlogDeleteModal"
                            className="badge text-red-600 hover:text-white hover:bg-red-600 h-8 cursor-pointer border-2 border-red-600"
                        >
                            <GiCancel className="text-xl" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDeleteModal;
