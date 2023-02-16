import logo from "./logo.svg";
import "./App.css";
// import SignInPage from "./Pages/SignInPage";
import LandingPage from "./Pages/LandingPage.jsx";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "./Pages/DashboardPage";
import CartProductPage from "./Pages/CartProductPage";
import ProtectedRoute from "react-protected-route-component";
import { currentAuth } from "./auth/Current_Auth";
import ProtectedRoutes from "./protectedRoute/ProtectedRoutes";

function App() {
  const auth = currentAuth();

  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/dashboard" element={<DashboardPage />}></Route>
        <Route path="/cartpage" element={<CartProductPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
