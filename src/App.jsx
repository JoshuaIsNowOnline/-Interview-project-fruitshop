import React, { useEffect, useState } from "react";
// import React, {useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FruitShop from "./pages/FruitShop";
import TobuyList from "./pages/TobuyList";
import Game from "./pages/Game";

import {
  fetchFruits,
  fetchCart,
  addToCartApi,
  removeCartItemApi,
} from "./api/api";
import FruitList from "./components/FruitList";
import Cart from "./components/Cart";
import "./index.css";
import Login from "./components/Login";
import User from "./components/User";

export default function App() {
  const [fruits, setFruits] = useState([]);
  const [cart, setCart] = useState([]);
  const [loadingFruits, setLoadingFruits] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const [Username, setUsername] = useState("未登入");

  const handleLoginUsername = (value) => {
    setUsername(value);
  };

  useEffect(() => {
    setIsLoggedIn(false);
    loadFruits();
    loadCart();
  }, []);

  async function handleLoginSuccess() {
    setIsLoggedIn(true);
    // loadFruits();
    // loadCart();
  }

  async function loadFruits() {
    setLoadingFruits(true);
    try {
      const res = await fetchFruits();
      setFruits(res.data);
    } catch (err) {
      console.error("fetchFruits error:", err);
    } finally {
      setLoadingFruits(false);
    }
  }

  async function loadCart() {
    try {
      const res = await fetchCart();
      setCart(res.data);
    } catch (err) {
      console.error("fetchCart error:", err);
    }
  }

  // 加到購物車（先更新 UI 再呼叫 API）
  async function addToCart(fruit, quantity = 1) {
    // optimistic update (簡單版本)
    const payload = { FruitId: fruit.id, quantity };

    try {
      await addToCartApi(payload);
      // API 回傳後重新載入 cart（確保資料一致）
      await loadCart();
      const res = await fetchFruits();
      setFruits(res.data);
      alert(`已加入 ${quantity} 個 ${fruit.name} 到購物車`);
    } catch (err) {
      console.error("addToCart error:", err);
      alert("加入失敗");
    }
  }

  async function removeCartItem(id) {
    try {
      await removeCartItemApi(id);
      await loadCart();
      const res = await fetchFruits();
      setFruits(res.data);
      alert("已移除該商品");
    } catch (err) {
      console.error("removeCartItem error:", err);
    }
  }

  return (
    <div className="app">
      <header>
        <h1>水果賣場</h1>

        <Router>
          <div className="nav">
            <nav>
              <ul className="nav-list">
                  <li><Link to="/FruitShop">選購商品</Link></li>
                  <li><Link to="/TobuyList">列清單</Link></li>
                  <li><Link to="/Game">小遊戲</Link></li>
              </ul>
              <Routes>
                <Route path="/FruitShop" element={<FruitShop />} />
                <Route path="/TobuyList" element={<TobuyList />} />
                <Route path="/Game" element={<Game />} />
              </Routes>
            </nav>
          </div>
        </Router>
      </header>

      {!isLoggedIn ? (
        <>
          <User Username={Username} />
          <Login
            onLogin={handleLoginSuccess}
            onsetUsername={handleLoginUsername}
          />
        </>
      ) : (
        <>
          <User Username={Username} />
          <main>
            <section>
              <h2>商品</h2>
              {loadingFruits ? (
                <p>載入中...</p>
              ) : (
                <FruitList fruits={fruits} AddToCart={addToCart} />
              )}
            </section>

            <aside>
              <Cart items={cart} onRemove={removeCartItem} />
            </aside>
          </main>
        </>
      )}
    </div>
  );
}
