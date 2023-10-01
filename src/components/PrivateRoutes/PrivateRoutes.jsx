import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes({isLoggedIn}) {
  return isLoggedIn ? <Outlet/> : <Navigate to="/" replace/>}

export default PrivateRoutes;
