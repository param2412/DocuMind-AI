import MaxWidthWrapper from "../components/MaxWidthWrapper"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { buttonVariants } from "../components/ui/button"

export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            DocuMind-AI is now public!
          </p>
        </div>

        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
          Chat with your <span className="text-blue-600">documents</span> in seconds.
        </h1>

        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          DocuMind-AI allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away.
        </p>

        <Link to="/dashboard" className={buttonVariants({ size: "lg", className: "mt-5" })}>
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MaxWidthWrapper>

      {/* Dashboard Preview */}
      <div className="mx-auto max-w-6xl px-6 lg:px-8 mt-20">
        <div className="rounded-xl bg-gray-900/5 p-4 ring-1 ring-gray-900/10">
          <img
            src="/dashboard-preview.jpg"
            alt="product preview"
            className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>

      {/* Feature Section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 text-center">
          <h2 className="font-bold text-4xl text-gray-900 sm:text-5xl">
            Start chatting in minutes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Chatting to your PDF files has never been easier.
          </p>
        </div>

        <ol className="my-8 space-y-6 md:flex md:space-x-12 md:space-y-0 px-6">
          {[
            ["Step 1", "Sign up for an account"],
            ["Step 2", "Upload your PDF"],
            ["Step 3", "Ask questions"],
          ].map(([step, title]) => (
            <li key={step} className="md:flex-1">
              <div className="border-l-4 md:border-l-0 md:border-t-2 border-zinc-300 pl-4 pt-4">
                <span className="text-sm font-medium text-blue-600">{step}</span>
                <p className="text-xl font-semibold">{title}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto max-w-6xl px-6 mt-16">
          <img
            src="/file-upload-preview.jpg"
            alt="uploading preview"
            className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
          />
        </div>
      </div>
    </>
  )
}
