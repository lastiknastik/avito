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
import { useSelector } from "react-redux";
import { accessToken } from "./store/selectors/selectors";
import { ACCESS_TOKEN_TIMEOUT } from "./constants";

export default function AppRoutes() {
  const accessTokenObj = useSelector(accessToken);
  console.log("access token", accessTokenObj);

  /* access token lives for ACCESS_TOKEN_TIMEOUT.
  user most likely has access if access token is fresh */
  //TODO: controversal way to check accessability
  const isAllowed =
    accessTokenObj &&
    (Date.now() - accessTokenObj.timestamp) / 1000 / 60 < ACCESS_TOKEN_TIMEOUT;

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<ProtectedRoute isAllowed={isAllowed} />}>
        <Route path="/profile" element={<Profile />} />
        <Route path="/adv" element={<Adv />} />
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
