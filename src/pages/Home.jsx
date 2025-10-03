import { FaAppleAlt, FaBolt, FaHeart, FaLeaf, FaStar, FaTruck } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentFruit, setCurrentFruit] = useState(0);
  const fruits = ["🍎", "🍊", "🍌", "🍓", "🥝", "🍑", "🍇", "🥭"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFruit((prev) => (prev + 1) % fruits.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [fruits.length]);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-main">新鮮果園</span>
              <span className="title-sub">直送到家</span>
            </h1>
            <p className="hero-description">
              精選當季最新鮮的水果，來自產地的直送服務
              <br />
              讓您品嚐到最自然、最健康的美味
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">
                <FaAppleAlt /> 立即選購
              </button>
              <button className="btn-secondary">
                <FaLeaf /> 了解更多
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="fruit-showcase">
              <div className="rotating-fruit">{fruits[currentFruit]}</div>
              <div className="fruit-particles">
                {fruits.map((fruit, index) => (
                  <span 
                    key={index} 
                    className={`particle particle-${index}`}
                    style={{ animationDelay: `${index * 0.5}s` }}
                  >
                    {fruit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">
            <FaStar className="title-icon" />
            為什麼選擇我們？
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <FaLeaf />
              </div>
              <h3>100% 新鮮</h3>
              <p>直接從農場採摘，確保每一顆水果都是最新鮮的狀態</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaTruck />
              </div>
              <h3>快速配送</h3>
              <p>24小時內送達，冷鏈運輸保持水果最佳品質</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaHeart />
              </div>
              <h3>健康保證</h3>
              <p>無農藥殘留，通過有機認證，為您的健康把關</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <FaBolt />
              </div>
              <h3>優質服務</h3>
              <p>專業客服團隊，隨時為您解答疑問，提供最佳購物體驗</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>開始您的健康水果之旅</h2>
          <p>加入我們的會員，享受更多優惠和專屬服務</p>
          <button className="cta-button">
            <FaAppleAlt /> 馬上開始購物
          </button>
        </div>
        <div className="floating-elements">
          <div className="float-element float-1">🍎</div>
          <div className="float-element float-2">🍊</div>
          <div className="float-element float-3">🍌</div>
          <div className="float-element float-4">🍓</div>
        </div>
      </section>
    </div>
  );
}