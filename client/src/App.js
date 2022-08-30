import React,{useEffect} from "react";
import "./App.css";
import MainHeader from "./components/MainHeader";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import {Provider,useDispatch} from "react-redux";
import  store  from "./redux/store";
import { setUsername } from "./redux/features/profileSlice";

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <MainHeader />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    </Provider>
  );
}

export default App;
