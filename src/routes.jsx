import { Routes, Route } from "react-router-dom";


import Main from "./pages/main";
import Profile from "./pages/profile";
import Article from "./pages/article";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
}
