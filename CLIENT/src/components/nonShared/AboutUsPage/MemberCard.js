import React from "react";

const MemberCard = () => {
    return (
        <div className="p-4 shadow-md rounded-md bg-base-100">
            <div className="avatar flex justify-center">
                <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" alt="user" />
                </div>
            </div>
            <h4 className="text-center text-xl font-semibold text-primary capitalize mt-4 mb-1">
                user man one
            </h4>
            <p className="text-center text-base-200 font-medium text-sm">
                CEO, ABC
            </p>
        </div>
    );
};

export default MemberCard;
