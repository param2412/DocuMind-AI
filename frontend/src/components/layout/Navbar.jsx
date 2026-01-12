// import { Link } from "react-router-dom"

// export default function Navbar() {
//   return (
//     <nav className="flex justify-between items-center px-10 py-4 border-b bg-white">
//       <Link to="/" className="font-bold text-xl">DocuMind-AI</Link>

//       <div className="space-x-6 text-gray-700">
//         <Link to="/pricing">Pricing</Link>
//         <Link to="/dashboard">Dashboard</Link>
//       </div>
//     </nav>
//   )
// }


//just fake profile icon

import { Link } from "react-router-dom"

export default function Navbar() {
  const isLoggedIn = true   // fake user

  return (
    <nav className="flex justify-between items-center px-10 py-4 border-b bg-white">
      <Link to="/" className="font-bold text-xl">Quill</Link>

      <div className="flex items-center space-x-6">
        <Link to="/pricing">Pricing</Link>
        <Link to="/dashboard">Dashboard</Link>

        {isLoggedIn ? (
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            D
          </div>
        ) : (
          <Link to="/login" className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Sign in
          </Link>
        )}
      </div>
    </nav>
  )
}
