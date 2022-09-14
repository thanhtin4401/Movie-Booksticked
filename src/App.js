import './App.css';
import LoginPage from './Page/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from './Page/HomePage/HomePage';
import Layout from './HOC/Layout';
import DetailPage from './Page/DetailPage/DetailPage';
import RegisterPage from './Page/RegisterPage/RegisterPage';
import SpinnerComponent from './Components/SpinnerComponent/SpinnerComponent';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import TrailerModal from './Components/TrailerModal/TrailerModal';
import NotFoundPage from './Page/NotFoundPage/NotFoundPage';
import BookTickets from './Page/BookTickets/BookTicketsPage';
import BookTicketsPage from './Page/BookTickets/BookTicketsPage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQjslqkz-OcryoroK_TKs49yNX_Y82bto",
  authDomain: "movie-f5de7.firebaseapp.com",
  projectId: "movie-f5de7",
  storageBucket: "movie-f5de7.appspot.com",
  messagingSenderId: "801659413088",
  appId: "1:801659413088:web:e9eaeea65858acfc2cd905",
  measurementId: "G-H422NB0LL6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
function App() {
  return (
    <div >
      <SpinnerComponent/>
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Layout Component={HomePage}/>} />
          <Route path='/detail/:id' element={<Layout Component={DetailPage}/>} />
          <Route path='/booktickets/:id' element={<Layout Component={BookTicketsPage}/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<RegisterPage/>} />
          <Route path='/*' element={<NotFoundPage/>} />
         </Routes>
      </BrowserRouter>

</div>
    );
}

export default App;
