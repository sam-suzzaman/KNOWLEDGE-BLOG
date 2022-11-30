import React from "react";
import { ToastContainer, toast } from "react-toastify";

const MyToast = () => {
    const contextClass = {
        success: "bg-green-600",
        error: "bg-red-600",
        info: "bg-blue-600",
        warning: "bg-orange-400",
        default: "bg-indigo-600",
        dark: "bg-white-600 font-gray-300",
    };

    toast.clearWaitingQueue();

    return (
        <ToastContainer
            limit={1}
            toastClassName={({ type }) =>
                contextClass[type || "default"] +
                " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
            }
            bodyClassName={() =>
                "text-sm font-white text-white font-med block p-3"
            }
            position="bottom-left"
            autoClose={3000}
        />
    );
};

export default MyToast;
