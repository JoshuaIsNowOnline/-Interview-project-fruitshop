import React, { useEffect, useState } from "react";
// import React, {useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { FaHome, FaAppleAlt, FaList, FaGamepad, FaSignInAlt } from "react-icons/fa";
import FruitShop from "./pages/FruitShop";
import TobuyList from "./pages/TobuyList";
import Game from "./pages/Game";
import Login from "./pages/Login";
import User from "./components/User";
import NavigatorRoute from "./ProtectedRoute/NavigatorRoute";
// import {
//   fetchFruits,
//   fetchCart,
//   addToCartApi,
//   removeCartItemApi,
// } from "./api/api";

import "./index.css";
import "./List.css";
import Home from "./pages/Home";
import Logout from "./components/Logout";
import LoginRoute from "./ProtectedRoute/LoginRoute";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [Username, setUsername] = useState("未登入");

  useEffect(() => {
    // 檢查 localStorage 中是否有 token，如果有就設為已登入
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      // 可以從 localStorage 中獲取用戶名（如果有存儲的話）
      const savedUsername = localStorage.getItem("username");
      if (savedUsername) {
        setUsername(savedUsername);
      }
    }
  }, []);

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
                        <Link to="/Home"><FaHome /> 首頁</Link>
                      </li>
                      <li>
                        <Link to="/FruitShop"><FaAppleAlt /> 選購商品</Link>
                      </li>
                      <li>
                        <Link to="/TobuyList"><FaList /> 列清單</Link>
                      </li>
                      <li>
                        <Link to="/Game"><FaGamepad /> 小遊戲</Link>
                      </li>
                      <li>
                        <a>
                          <Logout
                            setIsLoggedIn={setIsLoggedIn}
                            setUsername={setUsername}
                            isLoggedIn={isLoggedIn}
                          />
                        </a>
                      </li>
                      <li>
                        <User Username={Username} />
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/Home"><FaHome /> 首頁</Link>
                      </li>
                      <li>
                        <Link to="/FruitShop"><FaAppleAlt /> 選購商品</Link>
                      </li>
                      <li>
                        <Link to="/TobuyList"><FaList /> 列清單</Link>
                      </li>
                      <li>
                        <Link to="/Game"><FaGamepad /> 小遊戲</Link>
                      </li>
                      <li>
                        <Link to="/Login"><FaSignInAlt /> 登入</Link>
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

        {/* {isLoggedIn ? ( */}
            <Routes>
              <Route 
                path="/" 
                element={<Navigate to="/Home" replace />} 
              />
              <Route
                path="/Login"
                element={
                  <LoginRoute isLoggedIn={isLoggedIn}>
                    <Login
                      setIsLoggedIn={setIsLoggedIn}
                      onsetUsername={setUsername}
                      isLoggedIn={isLoggedIn}
                    />
                  </LoginRoute>
                }
              />

              <Route
                path="/Home"
                element={
                  <NavigatorRoute isLoggedIn={isLoggedIn}>
                    <Home />
                  </NavigatorRoute>
                }
              />
              <Route
                path="/FruitShop"
                element={
                  <NavigatorRoute isLoggedIn={isLoggedIn}>
                    <FruitShop />
                  </NavigatorRoute>
                }
              />
              <Route
                path="/TobuyList"
                element={
                  <NavigatorRoute isLoggedIn={isLoggedIn}>
                    <TobuyList />
                  </NavigatorRoute>
                }
              />
              <Route
                path="/Game"
                element={
                  <NavigatorRoute isLoggedIn={isLoggedIn}>
                    <Game />
                  </NavigatorRoute>
                }
              />
            </Routes>
        {/*) : (
          <Login setIsLoggedIn={setIsLoggedIn} onsetUsername={setUsername} />
        )}*/}
      </div>
    </Router>
  );
}
