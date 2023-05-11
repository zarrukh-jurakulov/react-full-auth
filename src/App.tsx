import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes";
import Navbar from "./components/navbar";

function App() {
  const location = useLocation();

  const authPath =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      {!authPath && <Navbar />}
      <Outlet />
      <AppRoutes />
    </>
  );
}

export default App;
