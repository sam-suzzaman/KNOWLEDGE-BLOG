const useUserToken = () => {
    return localStorage.getItem("access-token");
};

export default useUserToken;
