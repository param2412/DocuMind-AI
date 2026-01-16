import { Link, useLocation } from "react-router-dom"
import { useAuth } from "../../context/AuthContext"
import { signOut } from "firebase/auth"
import { auth } from "../../firebase/firebase"
import { useState, useRef, useEffect } from "react"

export default function Navbar() {

  const { user, loading } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef()
  const location = useLocation()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handle = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handle)
    return () => document.removeEventListener("mousedown", handle)
  }, [])

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "hover:text-blue-600"

  if (loading) {
    return <nav className="h-16 border-b"></nav>
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur  border-b shadow-sm">
      <div className="max-w-[95%] mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <Link
          to="/"
          className="font-extrabold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
        >
          DocuMind
        </Link>

        <div className="flex items-center gap-7 text-gray-700">

          <Link to="/pricing" className={`${isActive("/pricing")} transition`}>
            Pricing
          </Link>

          {!user ? (

            // NOT LOGGED IN
            <Link
              to="/login"
              className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 
                         text-white rounded-lg hover:shadow-lg 
                         hover:scale-[1.02] transition-all"
            >
              Sign in
            </Link>

          ) : (

            // LOGGED IN
            <>
              <Link
                to="/dashboard"
                className={`${isActive("/dashboard")} transition`}
              >
                Dashboard
              </Link>

              {/* USER ICON + DROPDOWN */}
              <div className="relative" ref={ref}>

                <div
                  onClick={() => setOpen(!open)}
                  className="w-10 h-10 rounded-full 
                             bg-gradient-to-r from-blue-600 to-purple-600 
                             text-white flex items-center justify-center 
                             font-bold cursor-pointer border-2 border-white 
                             shadow hover:scale-105 transition"
                >
                  {user.email?.[0]?.toUpperCase()}
                </div>

                {open && (
                  <div
                    className="absolute right-0 mt-3 w-52 bg-white shadow-xl 
                               rounded-xl border animate-fadeIn overflow-hidden"
                  >

                    <div className="p-3 text-sm border-b bg-gray-50 truncate">
                      {user.email}
                    </div>

                    <Link
                      to="/profile"
                      className="block p-3 hover:bg-gray-100 text-sm"
                      onClick={() => setOpen(false)}
                    >
                      Profile
                    </Link>

                    <button
                      onClick={() => {
                        signOut(auth)
                        setOpen(false)
                      }}
                      className="w-full text-left p-3 text-red-600 
                                 hover:bg-red-50 text-sm"
                    >
                      Logout
                    </button>

                  </div>
                )}

              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
