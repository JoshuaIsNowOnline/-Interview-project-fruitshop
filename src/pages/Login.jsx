import React, { useState } from "react";
import { loginApi } from "../api/api";
import Home from "./Home";

export default function Login({ onLogin, onsetUsername }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const res = await loginApi({ username, password });
      localStorage.setItem("token", res.data.token);
      onsetUsername(username);

      //   let temp = Username;
      //   temp = username;
      //   Username = temp;
      //   onsetUsername(username);
      alert("登入成功");
      onLogin(); // 通知父層重新載入資料
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
