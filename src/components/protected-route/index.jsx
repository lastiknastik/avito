import { Navigate, Outlet } from "react-router-dom";
import { UNAUTH_USER_REDIRECT_PATH } from "../../constants";

export const ProtectedRoute = ({
  redirectPath = UNAUTH_USER_REDIRECT_PATH,
  isAllowed,
}) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace={true} />;
  }

  return <Outlet />;
};
