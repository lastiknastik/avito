import { Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Profile from "./pages/profile";
import Adv from "./pages/adv";
import SignIn from "./pages/signin";
import SignUp from "./pages/singup";
import NewAdv from "./pages/new-adv";
import SellerProfile from "./pages/seller-profile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/adv" element={<Adv />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/new-adv" element={<NewAdv />} />
      <Route path="/seller-profile" element={<SellerProfile />} />
    </Routes>
  );
}
