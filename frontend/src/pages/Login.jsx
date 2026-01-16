import { useState } from "react"
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth"
import { auth, googleProvider } from "../firebase/firebase"
import { useNavigate } from "react-router-dom"

export default function Login() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
      }

      navigate("/")

    } catch (err) {
      setError(err.message)
    }
  }

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
      navigate("/")
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow w-[380px]">

        <h2 className="text-2xl font-bold mb-4">
          {isLogin ? "Login" : "Create Account"}
        </h2>

        {error && (
          <p className="text-red-600 text-sm mb-2">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full border p-2 rounded"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            className="w-full border p-2 rounded"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded">
            {isLogin ? "Login" : "Sign up"}
          </button>

        </form>

        <div className="my-4 text-center">OR</div>

        <button
          onClick={googleLogin}
          className="w-full border p-2 rounded flex items-center justify-center gap-2"
        >
          Sign in with Google
        </button>

        <p
          className="text-sm text-center mt-4 cursor-pointer text-blue-600"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin
            ? "Don't have account? Sign up"
            : "Already have account? Login"}
        </p>
      </div>
    </div>
  )
}
