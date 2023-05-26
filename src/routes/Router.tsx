import { Routes, Route } from "react-router-dom";
import LoginView from "../Views/Login/LoginView";
import HomeView from "../Views/Home/HomeView";
import Sidebar from "../Components/Sidebar/Sidebar";

function Router(): JSX.Element {
  return (
    <Routes>
      <Route element={<LoginView />} path="/login" />
      <Route element={<Sidebar />} path="/">
        <Route element={<HomeView />} path="/" />
      </Route>
      <Route element={<h1>Not found</h1>} path="*" />
    </Routes>
  );
}

export default Router;
