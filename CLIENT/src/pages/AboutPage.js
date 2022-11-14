import React from "react";
import TextHero from "../components/shared/TextHero";
import SecTitle from "../components/shared/SecTitle";
import MemberCard from "../components/nonShared/AboutUsPage/MemberCard";
import AboutForm from "../components/nonShared/AboutUsPage/AboutForm";
import AboutHero from "../components/nonShared/AboutUsPage/AboutHero";
import AboutMission from "../components/nonShared/AboutUsPage/AboutMission";
import AboutTeam from "../components/nonShared/AboutUsPage/AboutTeam";

const AboutPage = () => {
    return (
        <>
            {/* Hero Section */}
            <AboutHero />

            {/* Our Mission */}
            <AboutMission />

            {/* Team members */}
            <AboutTeam />

            {/* Form */}
            <AboutForm />
        </>
    );
};

export default AboutPage;
