import "./App.css";
import "react-quill/dist/quill.snow.css";
import { Routes, Route } from "react-router-dom";

// React-Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import CommingSoonPage from "./pages/CommingSoonPage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import UserDashboardPage from "./pages/UserDashboardPage";
import UserFavouritePage from "./pages/UserFavouritePage";
import UserProfilePage from "./pages/UserProfilePage";
import SingleBlogPage from "./pages/SingleBlogPage";
import MyInfoPage from "./pages/MyInfoPage";
import ChangeUserPassword from "./pages/ChangeUserPassword";
import UpdateUserInfoPage from "./pages/UpdateUserInfoPage";
import MyPostInfoPage from "./pages/MyPostInfoPage";
import AddPostPage from "./pages/AddPostPage";
import UpdateBlogData from "./pages/UpdateBlogData";
import ManageMembersPage from "./pages/ManageMembersPage";
import Loading from "./components/shared/Loading";
import useUserInfo from "./Hooks/useUserInfo";
import ManageCategoriesPage from "./pages/ManageCategories";

function App() {
    const userInfo = useUserInfo();

    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/userProfile" element={<UserProfilePage />}>
                    <Route path="" element={<MyInfoPage />} />
                    <Route
                        path="ChangePassword"
                        element={<ChangeUserPassword />}
                    />
                    <Route
                        path="updateUserInfo"
                        element={<UpdateUserInfoPage />}
                    />
                </Route>
                <Route path="/userDashboard" element={<UserDashboardPage />}>
                    <Route path="" element={<MyPostInfoPage />} />
                    <Route path="addPost" element={<AddPostPage />} />
                    <Route
                        path="manageMembers"
                        element={<ManageMembersPage />}
                    />
                    <Route
                        path="categories"
                        element={<ManageCategoriesPage />}
                    />
                </Route>
                <Route path="/userFavourite" element={<UserFavouritePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/singleBlog/:blogID"
                    element={<SingleBlogPage />}
                />
                <Route path="/updateBlog" element={<UpdateBlogData />} />
                <Route path="/commingSoon" element={<CommingSoonPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <ToastContainer
                limit={1}
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Footer />
        </>
    );
}

export default App;
