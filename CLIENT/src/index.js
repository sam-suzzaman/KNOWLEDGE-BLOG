import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// user context provider wrapper
import { UserContextProviderWrapper } from "./context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <BrowserRouter>
    //     <App />
    // </BrowserRouter>

    <React.StrictMode>
        <BrowserRouter>
            <UserContextProviderWrapper>
                <App />
            </UserContextProviderWrapper>
        </BrowserRouter>
    </React.StrictMode>
);
