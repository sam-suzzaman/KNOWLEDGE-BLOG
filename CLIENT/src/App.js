import "./App.css";
import "react-quill/dist/quill.snow.css";
import { Routes, Route } from "react-router-dom";

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

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/userProfile" element={<UserProfilePage />}>
                    <Route path="myInfo" element={<MyInfoPage />} />
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
                    <Route path="postInfo" element={<MyPostInfoPage />} />
                    <Route path="addPost" element={<AddPostPage />} />
                </Route>
                <Route path="/userFavourite" element={<UserFavouritePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/singleBlog/:blogID"
                    element={<SingleBlogPage />}
                />
                <Route path="/updateBlog" element={<UpdateBlogData/>} />
                <Route path="/commingSoon" element={<CommingSoonPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
