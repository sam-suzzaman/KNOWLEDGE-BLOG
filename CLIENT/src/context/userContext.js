import axios from "axios";
import React, { useEffect, useState } from "react";

const userContext = React.createContext();

const UserContextProviderWrapper = ({ children }) => {
    // user
    const [user, setUser] = useState({
        avatar: "",
        email: "",
        name: "",
        role: "",
        socialURL: [],
        status: false,
        subtitle: "",
    });
    const [userLoading, setUserLoading] = useState(true);
    const [userError, setUserError] = useState(false);
    const [token, setToken] = useState("");

    const handleLoginToken = (tokenValue) => {
        setToken(tokenValue);
    };

    const getMeHandler = async () => {
        try {
            if (token) {
                const config = {
                    headers: { authorization: `Bearerr ${token}` },
                };
                const response = await axios.get(
                    "http://localhost:2000/api/v1/people/get-me",
                    config
                );

                if (response.data.status) {
                    const temp = { status: true, ...response.data.result };
                    setUser(temp);
                    setUserLoading(false);
                    setUserError(false);
                }
            } else {
                setUser({ status: false });
                setUserLoading(false);
                return;
            }
        } catch (error) {
            const temp = { status: false };
            setUserLoading(false);
            setUserError(temp);
        }
    };

    useEffect(() => {
        getMeHandler();
    }, [token]);

    // user Logout
    const userLogout = () => {
        localStorage.setItem("access-token", "");
        handleLoginToken("");
    };

    return (
        <userContext.Provider
            value={{
                user,
                userLoading,
                userError,
                userLogout,
                handleLoginToken,
            }}
        >
            {children}
        </userContext.Provider>
    );
};

export { userContext, UserContextProviderWrapper };
