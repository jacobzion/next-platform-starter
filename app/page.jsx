export default function Home() {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 font-sans">
        <header className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-6 shadow-md">
          <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Axion Capitals Logo" className="h-10 w-auto" />
              <h1 className="text-xl font-bold tracking-wide">Axion Capitals</h1>
            </div>
            <nav className="space-x-6 text-sm">
              <a href="/" className="hover:text-blue-200">Home</a>
              <a href="/real-estate" className="hover:text-blue-200">Real Estate</a>
              <a href="/investments" className="hover:text-blue-200">Investments</a>
              <a href="/property-management" className="hover:text-blue-200">Property Management</a>
              <a href="/contact" className="hover:text-blue-200">Contact</a>
            </nav>
          </div>
        </header>
  
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-4xl font-extrabold text-blue-900 mb-4">Empowering Global Investments</h2>
          <p className="text-lg text-gray-700 mb-8">
            Explore premier real estate, smart investments, and trusted property services with Axion Capitals.
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="/real-estate"
              className="bg-blue-700 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-blue-800"
            >
              Search Real Estate
            </a>
            <a
              href="/contact"
              className="bg-white text-blue-700 px-6 py-3 rounded-full text-sm font-semibold border border-blue-700 hover:bg-blue-50"
            >
              Contact Us
            </a>
          </div>
        </section>
  
        <footer className="bg-blue-900 text-white py-6 mt-20 text-center text-sm">
          &copy; {new Date().getFullYear()} 111 Axion Capitals. All rights reserved.
        </footer>
      </main>
    );
  }  