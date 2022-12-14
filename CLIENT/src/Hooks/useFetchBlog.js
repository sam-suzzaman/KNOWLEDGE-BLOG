import axios from "axios";
import { useEffect, useState } from "react";

const useFetchBlog = (URL) => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState({ status: false, message: "" });

    const getBlog = async () => {
        const url = `http://localhost:2000/api/v1/blog/${URL}`;
        try {
            const response = await axios.get(url);
            setBlogs(response.data.result);
            setLoading(false);
            setError({ ...error, status: false });
        } catch (error) {
            console.log(error.message);
            setLoading(false);
            setError({ ...error, status: true, message: error.message });
        }
    };

    useEffect(() => {
        getBlog();
    }, [URL]);

    return [blogs, loading, error];
};

export default useFetchBlog;
