import React from "react";

const TextHero = ({ children }) => {
    return (
        <div className="border-t-[1px] border-[#03d6a1]">
            <div className="hero-content bg-accent max-w-none text-primary justify-start w-full py-4 px-4 md:px-8 sm:py-12">
                {children}
            </div>
        </div>
    );
};

export default TextHero;
