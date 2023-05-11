import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/404";
import ForgotPassword from "../pages/forgot.password";
import ResetPassword from "../pages/reset.pasword";
import ArticleDetail from "../pages/article.detail";
import PrivateRoutes from "./private.route";
import Layout from "../pages/layout";

// if error show on toaster
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/"
        element={
          <PrivateRoutes>
            <Home />
          </PrivateRoutes>
        }
      >
        <Route path="/article-detail/:id" element={<ArticleDetail />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
