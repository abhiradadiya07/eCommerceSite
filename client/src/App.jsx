import { Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Products from "./pages/Products"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import NotFound from "./pages/NotFound"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
