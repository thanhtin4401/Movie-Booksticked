import "./App.css";
import LoginPage from "./Page/LoginPage/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import Layout from "./HOC/Layout";
import DetailPage from "./Page/DetailPage/DetailPage";
import RegisterPage from "./Page/RegisterPage/RegisterPage";
import SpinnerComponent from "./Components/SpinnerComponent/SpinnerComponent";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import TrailerModal from "./Components/TrailerModal/TrailerModal";
import NotFoundPage from "./Page/NotFoundPage/NotFoundPage";
import ManangerPage from "./Page/ManagerPage/ManangerPage";
import ManagerUserFormPage from "./Page/ManagerUserFormPage/ManagerUserFormPage";
import ManagerMovieFormPage from "./Page/ManagerMovieFormPage/ManagerMovieFormPage";

const firebaseConfig = {
  apiKey: "AIzaSyBQjslqkz-OcryoroK_TKs49yNX_Y82bto",
  authDomain: "movie-f5de7.firebaseapp.com",
  projectId: "movie-f5de7",
  storageBucket: "movie-f5de7.appspot.com",
  messagingSenderId: "801659413088",
  appId: "1:801659413088:web:e9eaeea65858acfc2cd905",
  measurementId: "G-H422NB0LL6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
            path="/manageruserformpage"
            element={<Layout Component={ManagerUserFormPage} />}
          />
          <Route
            path="/managermovieformpage"
            element={<Layout Component={ManagerMovieFormPage} />}
          />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
