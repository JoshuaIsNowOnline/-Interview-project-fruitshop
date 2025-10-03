import React, { useEffect, useState } from "react";
// import React, { useState } from "react";
import { loginApi } from "../api/api";
import Home from "./Home";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn, onsetUsername,isLoggedIn}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    if(isLoggedIn){
      navigate("/Home",{replace:true});
    }
  },[isLoggedIn,navigate]);



  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await loginApi({ username, password });
      localStorage.setItem("token", res.data.token);
      
      // 從 API 響應中獲取用戶資訊
      const userInfo = res.data.username || res.data.user?.username || username;
      localStorage.setItem("username", userInfo); // 保存從後端獲取的用戶名
      
      alert("登入成功");
      setIsLoggedIn(true); // 通知父層重新載入資料
      onsetUsername(userInfo); // 使用從後端獲取的用戶資訊
    } catch (err) {
      console.error("loginApi:", err);
      alert("登入失敗");
    }
  }

  return (
    <div className="login-box">
      <form onSubmit={handleLogin} className="login-card">
        <h2>登入</h2>
        <div className="type-area">
          <input
            type="text"
            placeholder="帳號"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="login-row"
          />
          <input
            type="password"
            placeholder="密碼"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-row"
          />
          <div className="login-btn-1">
            <button type="submit" className="login-btn-2">
              登入
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
