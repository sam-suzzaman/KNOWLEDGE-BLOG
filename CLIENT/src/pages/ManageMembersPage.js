import React from "react";
import MembersList from "../components/nonShared/ManageMembersPage/MembersList";

const ManageMembersPage = () => {
    return (
        <>
            <div className=" p-4 sm:p-6 border-2 border-neutral rounded-sm">
                <h3 className="text-secondary text-lg sm:text-lg md:text-2xl font-semibold capitalize mb-8 text-center">
                    Members list
                </h3>
                <div className="overflow-x-auto">
                    <table className="table-compact w-full myProfileTable">
                        <thead>
                            <tr className="bg-accent text-base-100 capitalize">
                                <th>No</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>control</th>
                            </tr>
                        </thead>
                        <tbody>
                            <MembersList />
                            <MembersList />
                            <MembersList />
                            <MembersList />
                            <MembersList />
                            <MembersList />
                            <MembersList />
                        </tbody>
                        {/* <tfoot>
                                <tr className="bg-primary text-base-100">
                                    <th></th>
                                    <th>Name</th>
                                    <th>Job</th>
                                    <th>company</th>
                                    <th>location</th>
                                    <th>Last Login</th>
                                    <th>Favorite Color</th>
                                </tr>
                            </tfoot> */}
                    </table>
                </div>
            </div>
        </>
    );
};

export default ManageMembersPage;
