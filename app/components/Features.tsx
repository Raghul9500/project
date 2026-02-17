export default function Features() {
  return (
    <section className="bg-gray-900 text-white py-20 px-6">
      {/* Heading */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold">Our Features</h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-gray-800 rounded-1 shadow-l hover:scale-105 transition duration-300">
          <img
            className="w-full h-64 object-cover"
            src="/image/A.jpg"
            alt="Frontend"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold">Frontend</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-800 rounded-l shadow-l hover:scale-105 transition duration-300">
          <img
            className="w-full h-64 object-cover"
            src="/image/B.jpg"
            alt="Backend"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold">Backend</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-800 rounded-l shadow-l hover:scale-105 transition duration-300">
          <img
            className="w-full h-64 object-cover"
            src="/image/C.jpg"
            alt="Fullstack"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold">Fullstack</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
