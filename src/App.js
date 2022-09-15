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
import AddFilm from "./Page/ManagerPage/AddFilm/AddFilm";
import EditUser from "./Page/ManagerPage/EditUser/EditUser";
import EditFilm from "./Page/ManagerPage/EditFilm/EditFilm";

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
            element={<Layout Component={ManangerPage} />}
          />
          <Route
            path="/manager/adduser"
            element={<Layout Component={AddUser} />}
          />
          <Route
            path="/manager/addfilm"
            element={<Layout Component={AddFilm} />}
          />
          <Route
            path="/manager/adduser/:useID"
            element={<Layout Component={EditUser} />}
          />
          <Route
            path="/manager/addfilm/:movieID"
            element={<Layout Component={EditFilm} />}
          />
          <Route
            path="/booktickets/:id"
            element={<Layout Component={BookTicketsPage} />}
          />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
