import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Auth } from "./Pages/Auth/Auth";
import { Homepage } from "./Pages/Homepages/Homepage";
import { AdminDashboard } from "./Pages/AdminPanel/AdminDashboard";
import { AdminLogin } from "./Pages/AdminPanel/AdminLogin";
import { RestaurantAdminPanel } from "./Pages/RestaurantComponents/RestaurantAdminPanel";
import { RestaurantAdminLogin } from "./Pages/RestaurantComponents/RestaurantAdminLogin";
import { UserProfile } from "./Pages/UserProfile/UserProfile";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { WebPrivateRoute } from "./utils/WebPrivateRoute.jsx";
import { RestaurantPrivateRoute } from "./utils/RestaurantPrivateRoute.jsx";
import { ProfilePrivateRoute } from "./utils/ProfilePrivateRoute.jsx";
import { RatePrivateRoute } from "./utils/RatePrivateRoute.jsx";
import { OrderBag } from "./Pages/orderBag/OrderBag.jsx";
import RestaurantPage from "./Pages/RestaurantPage/RestaurantPage";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Rating } from "./Pages/Rating/Rating.jsx";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("User")));
  }, []);
  return (
    <GoogleOAuthProvider clientId="278783776993-6hv7oujskr6pnu11j425m0c8n5kn2g7g.apps.googleusercontent.com">
      <div className="App">
        <div className="blur" style={{ top: "-18%", right: "0" }}></div>
        <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Homepage /> : <Auth />}></Route>
            <Route path="/home" element={<Homepage />}></Route>
            <Route path="/web-admin" element={<AdminLogin />}></Route>
            <Route
              path="/restaurant-admin"
              element={<RestaurantAdminLogin />}
            ></Route>
            <Route element={<OrderBag />} path="/Shopping-cart" exact />
            <Route element={<WebPrivateRoute />}>
              <Route
                element={<AdminDashboard />}
                path="/admin-dashboard"
                exact
              />
            </Route>
            <Route element={<RestaurantPrivateRoute />}>
              <Route
                element={<RestaurantAdminPanel />}
                path="/restaurant-admin-panel"
                exact
              />
            </Route>
            <Route element={<ProfilePrivateRoute />}>
              <Route element={<UserProfile />} path="/profile" exact />
            </Route>
            <Route element={<RatePrivateRoute />}>
              <Route element={<Rating />} path="/rating" />
            </Route>

            <Route element={<RestaurantPage />} path="/restaurant/:name" />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
