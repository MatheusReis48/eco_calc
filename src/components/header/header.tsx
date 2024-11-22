
export default function Header() {
  return (
    <header className="bg-[#4A9F47] py-6">
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
        <a href="/">EcoCalc</a>
        </h1>

        <nav className="flex space-x-8">
          <a href="#section-home" className="text-white text-lg hover:text-[#FFCC00] transition duration-300">Home</a>
          <a href="#section-quem-somos" className="text-white text-lg hover:text-[#FFCC00] transition duration-300">Quem Somos</a>
          <a href="#section-calculadora" className="text-white text-lg hover:text-[#FFCC00] transition duration-300">Calculadora</a>
        </nav>
      </div>
    </header>
  );
}
