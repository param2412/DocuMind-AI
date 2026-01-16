import { Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Pricing from "./pages/Pricing"
import Login from "./pages/Login"
import Navbar from "./components/layout/Navbar"

function Layout() {
  const location = useLocation()

  const hideNavbar = location.pathname === "/login"

  return (
    <>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default function App() {
  return <Layout />
}
