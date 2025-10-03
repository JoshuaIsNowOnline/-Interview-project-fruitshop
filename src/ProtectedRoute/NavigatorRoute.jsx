import { Navigate } from "react-router-dom";

function NavigatorRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    // 如果沒有登入 → 導回登入頁
    return <Navigate to="/Login" replace />;
  }
  // 如果登入了 → 顯示原本的子元件
  return children;
}


export default NavigatorRoute;