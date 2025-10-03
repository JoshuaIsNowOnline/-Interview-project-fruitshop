import { Navigate } from "react-router-dom";

function LoginRoute({isLoggedIn,children}) {
  if (!isLoggedIn) {
    // 如果登出了 → 顯示原本的子元件
    return children;
  }
  // 如果已經登入 → 導回Home
    return <Navigate to="/Home" replace />;
}


export default LoginRoute;