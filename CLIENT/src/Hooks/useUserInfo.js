import axios from "axios";
import { useEffect, useState } from "react";

const useUserInfo = () => {
    const [user, setUser] = useState({});

    const getMeHandler = async () => {
        try {
            const token = localStorage.getItem("access-token");
            const config = {
                headers: { authorization: `Bearerr ${token}` },
            };
            const response = await axios.get(
                "http://localhost:2000/api/v1/people/get-me",
                config
            );
            if (response?.data) {
                // set data on state
                console.log(response.data);
                setUser(response.data);
            }
        } catch (error) {
            console.log(error.response.data);
        }
    };

    useEffect(() => {
        getMeHandler();
    }, []);
    return user;
};

export default useUserInfo;
