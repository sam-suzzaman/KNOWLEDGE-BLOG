import React from "react";
import TableRow from "../components/nonShared/UserDashboardPage/TableRow";


const MyPostInfoPage = () => {
    return (
        <>
            <div className="border-2 border-neutral rounded-md p-4">
                <h3 className="text-xl md:text-2xl capitalize font-bold text-secondary">
                    My Posts
                </h3>
                {/* Content */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
                    <div className="card bg-accent w-full max-w-xs  py-8 px-6 text-center profile_post_card">
                        <p className="uppercase text-base font-medium text-primary">
                            role
                        </p>
                        <div className="divider my-0 py-0"></div>
                        <h3 className="text-base md:text-xl uppercase font-semibold text-secondary tracking-wider max-w-max px-6 py-1 mx-auto bg-base-100">
                            admin
                        </h3>
                    </div>
                    <div className="card bg-accent w-full max-w-xs py-8 px-6 text-center profile_post_card">
                        <p className="uppercase text-base font-medium text-primary">
                            posted blogs
                        </p>
                        <div className="divider my-0 py-0"></div>
                        <h3 className="text-base md:text-xl uppercase font-semibold text-secondary tracking-wider max-w-max px-6 py-1 mx-auto bg-base-100">
                            1000
                        </h3>
                    </div>
                </div>

                {/* All post list */}
                <div className="mt-20 mb-8 myProfileTable">
                    <h3 className="text-xl md:text-2xl capitalize font-bold text-secondary text-center mb-6">
                        posts list
                    </h3>
                    <div className="overflow-x-auto">
                        <table className="table-compact w-full myProfileTable">
                            <thead>
                                <tr className="bg-accent text-base-100 capitalize">
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>category</th>
                                    <th>date</th>
                                    <th>action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
                                <TableRow />
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
            </div>
        </>
    );
};

export default MyPostInfoPage;
