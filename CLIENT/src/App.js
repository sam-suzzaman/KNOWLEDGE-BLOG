import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/shared/Navbar";

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

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/userProfile" element={<UserProfilePage />} />
                <Route path="/userDashboard" element={<UserDashboardPage />} />
                <Route path="/userFavourite" element={<UserFavouritePage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/commingSoon" element={<CommingSoonPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
