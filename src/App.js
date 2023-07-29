import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './Components/Home_Page_Component';
import SignupPage from './Components/Signup_Page_Component';
import LoginPage from './Components/Login_Page_Component';
import MovieListPage from './Components/Movie_List_Page_Component';
import CompanyInfo from  './Components/Company_Info'
import './App.css'


const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});

  const handleSuccessfulLogin = (data) => {
    setLoggedIn(true);
    setUserData(data);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUserData({});
  };

  return (
    <Router>
      <div className="Header_bar">
        <nav>
          <ul className="ul" >
            <li className="li">
              <Link to="/">Home</Link>
            </li>
            {loggedIn ? (
              <>
                <li className="li">
                  <Link to="/movies">Movie List</Link>
                </li>
                <li className="li">
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="li">
                  <Link to="/signup">Signup</Link>
                </li>
                <li className="li">
                  <Link to="/login">Login</Link>
                </li>
                <li className="li">
                  <Link to="/CompanyInfo">Company Info</Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        <Routes>
          <Route exact path="/" element={<HomePage/>} ></Route>
          <Route path="/signup" element={<SignupPage/>} ></Route>
          <Route
            path="/login"
            element={<LoginPage  />}></Route>
          <Route path="/movies" element={<MovieListPage/>} ></Route>
          <Route path="/CompanyInfo" element={<CompanyInfo/>} ></Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;