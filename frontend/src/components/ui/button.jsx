export function buttonVariants({ size = "md", className = "" }) {
    const base = "inline-flex items-center justify-center rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
  
    const sizes = {
      lg: "px-6 py-3 text-lg",
      md: "px-4 py-2",
    }
  
    return `${base} ${sizes[size]} ${className}`
  }
  