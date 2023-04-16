import { Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";
import HomeScreen from "../Screens/Main";

const LoginScreen = lazy( () => import("../Screens/Login") );
const RegisterScreen = lazy( () => import("../Screens/Register") );


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" component={HomeScreen} />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
    </Routes>
  )
}

export default AppRoutes;