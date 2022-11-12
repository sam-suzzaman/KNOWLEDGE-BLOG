module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: [
            {
                myTheme: {
                    primary: "#323232",
                    secondary: "#8685EF",
                    accent: "#00C896",
                    neutral: "#FAF7FF",
                    "base-100": "#ffffff",
                    "base-200": "#606060",
                    info: "#00C6CF",
                    success: "#00C896",
                    warning: "#FBBD23",
                    error: "#F87272",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};
