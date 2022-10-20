import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import MyAccount from "./pages/MyAccount/MyAccount";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myAccount" element={<MyAccount />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
