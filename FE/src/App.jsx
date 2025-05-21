import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "./components/Layout"
import Home from "./pages/Home/index"
import Admin from "./pages/Admin/index"
import AdminAdd from "./pages/Admin Add/index"
import Basket from "./pages/Basket/index"
import Wishlist from "./pages/Wishlist/index"
import DetailPage from "./pages/Detail Page/index"
import NoPage from "./pages/No Page/index"
import MainProvider from "./context/MainProvider"

function App() {
  return (
    <MainProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/adminadd" element={<AdminAdd />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/detail/:id" element={<DetailPage />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </MainProvider>
  );
}

export default App;
