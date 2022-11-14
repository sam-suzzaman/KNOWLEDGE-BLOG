import React from "react";
import SecTitle from "../../shared/SecTitle";
import MemberCard from "./MemberCard";

const AboutTeam = () => {
    return (
        <div className="">
            <div className="mt-20">
                <SecTitle first="our" second="team" third="members" />
            </div>
            {/* members */}
            <div className="grid grid-cols-1 min-[390px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-7xl mx-auto my-16 py-8 px-6 bg-neutral">
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
        </div>
    );
};

export default AboutTeam;
