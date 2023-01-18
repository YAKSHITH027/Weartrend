import Navbar from "./Users/Components/Navbar";

import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter } from "react-router-dom";
import Login from "./Users/Pages/Login";
import AllRoutes from "./Users/Components/AllRoutes";
import Footer from "./Users/Components/Footer";
import ProductContextProvider from "./Users/Context/ProductContext/ProductContext";
import Loading from "./Users/Components/Loading";
import PlayGround from "./Users/Components/PlayGround";
function App() {
  return (
    <BrowserRouter>
      <ProductContextProvider>
        <div className="App">
          <Navbar />
          <AllRoutes />
          {/* <Login /> */}
          <Footer />
          {/* <PlayGround /> */}
          {/* <Loading /> */}
        </div>
      </ProductContextProvider>
    </BrowserRouter>
  );
}

export default App;
