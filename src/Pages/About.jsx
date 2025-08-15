export const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b border-none via-transparent to-[#2F3236] text-white flex items-center justify-center px-6 py-12 mx-9">
      <div className="max-w-4xl bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 animate-fadeIn">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#F2F2F2] text-center">
          About <span className="text-[#2F3236]">MovieVerse</span>
        </h1>

        {/* Paragraph */}
        <p className="text-lg text-gray-200 leading-relaxed mb-6 text-center">
          MovieVerse is your ultimate destination for discovering trending films, 
          exploring timeless classics, and staying updated with the latest releases.
          Our goal is to bring movie lovers together through a visually immersive 
          and interactive platform.
        </p>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="p-6 bg-[#2F3236]/70 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-[#D95C00] mb-2">Trending Now</h3>
            <p className="text-gray-300 text-sm">
              Stay ahead with the hottest movies trending across the globe.
            </p>
          </div>

          <div className="p-6 bg-[#2F3236]/70 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-[#D95C00] mb-2">Top Rated</h3>
            <p className="text-gray-300 text-sm">
              Discover critically acclaimed masterpieces loved by audiences.
            </p>
          </div>

          <div className="p-6 bg-[#2F3236]/70 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold text-[#D95C00] mb-2">Upcoming</h3>
            <p className="text-gray-300 text-sm">
              Get a sneak peek at exciting releases before they hit theaters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
