import "./App.css";
import LoginPage from "./Page/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import Layout from "./HOC/Layout";
import DetailPage from "./Page/DetailPage/DetailPage";
import RegisterPage from "./Page/RegisterPage/RegisterPage";
import SpinnerComponent from "./Components/SpinnerComponent/SpinnerComponent";

import NotFoundPage from "./Page/NotFoundPage/NotFoundPage";
import BookTicketsPage from "./Page/BookTickets/BookTicketsPage";
import ManangerPage from "./Page/ManagerPage/ManangerPage";

import AddUser from "./Page/ManagerPage/AddUser/AddUser";
import AddMovie from "./Page/ManagerPage/AddMovie/AddMovie";
import EditUser from "./Page/ManagerPage/EditUser/EditUser";
import EditMovie from "./Page/ManagerPage/EditMovie/EditMovie";
import CalendarMovie from "./Page/ManagerPage/CalendarMovie/CalendarMovie";
import LayoutAdmin from "./HOC/LayoutAdmin";

function App() {
  return (
    <div>
      <SpinnerComponent />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout Component={HomePage} />} />
          <Route
            path="/detail/:id"
            element={<Layout Component={DetailPage} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/manager"
            element={<LayoutAdmin Component={ManangerPage} />}
          />
          <Route
            path="/manager/adduser"
            element={<LayoutAdmin Component={AddUser} />}
          />
          <Route
            path="/manager/addmovie"
            element={<LayoutAdmin Component={AddMovie} />}
          />
          <Route
            path="/manager/edituser/:userID"
            element={<LayoutAdmin Component={EditUser} />}
          />
          <Route
            path="/manager/editmovie/:movieID"
            element={<LayoutAdmin Component={EditMovie} />}
          />
          <Route
            path="/booktickets/:id"
            element={<LayoutAdmin Component={BookTicketsPage} />}
          />
          <Route
            path="/manager/calendarmovie/:movieID"
            element={<LayoutAdmin Component={CalendarMovie} />}
          />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
