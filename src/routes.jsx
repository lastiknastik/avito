import { Routes, Route } from "react-router-dom";

import Main from "./pages/main";
import Profile from "./pages/profile";
import Adv from "./pages/adv";
import SignIn from "./pages/signin";
import SignUp from "./pages/singup";
import NewAdv from "./pages/new-adv";
import SellerProfile from "./pages/seller-profile";
import Reviews from "./pages/reviews";
import MyAdv from "./pages/my-adv";
import { ProtectedRoute } from "./components/protected-route";
import { useIsAuthenticated } from "./libs/auth";

export default function AppRoutes() {
  const isAllowed = useIsAuthenticated();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/adv/:id" element={<Adv />} />
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/new-adv" element={<NewAdv />} />
        <Route path="/seller-profile" element={<SellerProfile />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/my-adv" element={<MyAdv />} />
        {/* use same page with different parameters */}
        <Route path="/edit-adv" element={<NewAdv />} />
      </Route>
    </Routes>
  );
}
