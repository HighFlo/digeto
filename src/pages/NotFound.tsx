import Footer from "../sections/Footer"
import Navbar from "../sections/Navbar"

const NotFound = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto flex flex-col justify-center items-center h-[75vh]">
        <h3 className="font-bold text-4xl text-primary-blue text-center">404 Not Found</h3>
        <p className="mb-10 text-center">We were not able to find the page you were looking for.</p>
        <button onClick={() => window.location.href="/"} className="inline-flex items-center gap-3 bg-primary-blue px-8 py-4 rounded-full text-base font-medium text-white transition-all duration-300 hover:bg-primary-blue/90 hover:shadow-lg hover:shadow-primary-blue/25 hover:-translate-y-0.5 group-hover:scale-105">
              Return to Homepage
        </button>
      </div>

      <Footer />
    </>
  )
}

export default NotFound