import React, { useEffect, useState } from "react";
// import React, {useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FruitShop from "./pages/FruitShop";
import TobuyList from "./pages/TobuyList";
import Game from "./pages/Game";
import Login from "./pages/Login";
import User from "./components/User";
import ProtectedRoute from "./pages/ProtectedRoute";
// import {
//   fetchFruits,
//   fetchCart,
//   addToCartApi,
//   removeCartItemApi,
// } from "./api/api";

import "./index.css";
import Home from "./pages/Home";

export default function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Username, setUsername] = useState("未登入");

  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const handleLoginUsername = (value) => {
    setUsername(value);
  };

  async function handleLoginSuccess() {
    setIsLoggedIn(true);
  }

  return (
    <Router>
      <div className="app">
        <div>
          <header>
            <h1>水果賣場</h1>

            <div className="nav">
              <nav>
                <ul className="nav-list">
                  {isLoggedIn ? (
                    <>
                      <li>
                        <Link to="/Home">首頁</Link>
                      </li>
                      <li>
                        <Link to="/FruitShop">選購商品</Link>
                      </li>
                      <li>
                        <Link to="/TobuyList">列清單</Link>
                      </li>
                      <li>
                        <Link to="/Game">小遊戲</Link>
                      </li>
                      <li>
                        <a>登出</a>
                      </li>
                      <li>
                        <User Username={Username} />
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/Home">首頁</Link>
                      </li>
                      <li>
                        <Link to="/FruitShop">選購商品</Link>
                      </li>
                      <li>
                        <Link to="/TobuyList">列清單</Link>
                      </li>
                      <li>
                        <Link to="/Game">小遊戲</Link>
                      </li>
                      <li>
                        <a>登入</a>
                      </li>
                      <li>
                        <User Username={Username} />
                      </li>
                    </>
                  )}
                </ul>
              </nav>
            </div>
          </header>
        </div>

        {!isLoggedIn ? (
          <>
            <Login
              onLogin={handleLoginSuccess}
              onsetUsername={handleLoginUsername}
            />
          </>
        ) : (
          <>
            <Routes>
              <Route
                path="/Home"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/FruitShop"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <FruitShop />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/TobuyList"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <TobuyList />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/Game"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Game />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </>
        )}
      </div>
    </Router>
  );
}
