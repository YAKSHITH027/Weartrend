import Navbar from "./Users/Components/Navbar";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "./Users/Components/Sidebar";
import Login from "./Users/Pages/Login";
import AllRoutes from "./Users/Components/AllRoutes";
import Footer from "./Users/Components/Footer";
import ProductContextProvider from "./Users/Context/ProductContext/ProductContext";
import Loading from "./Users/Components/Loading";
import PlayGround from "./Users/Components/PlayGround";

import AddProductModal from "./Admin/Compornts/AddProductModal";
import PaymentSuccessModal from "./Users/Components/PaymentSuccessModal";
import AdminContextProvider from "./Admin/AdminContext/AdminContext";
import AuthContextProvider from "./Users/Context/AuthContext/AuthContext";
function App() {
  return (
    <AuthContextProvider>
      <ProductContextProvider>
        <AdminContextProvider>
          <div className="App">
            {/* <Navbar /> */}
            <AllRoutes />
            {/* <PaymentSuccessModal /> */}
            {/* <Sidebar /> */}
            {/* <AddProductModal /> */}
          </div>
        </AdminContextProvider>
      </ProductContextProvider>
    </AuthContextProvider>
  );
}

export default App;
