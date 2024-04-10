function HeroSection() {
  return (
    <div id="home" className="relative w-full h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-85"
        autoPlay
        muted
        loop
      >
        <source src="/videos/video.mp4" type="video/mp4" />
      </video>

      {/* Content */}

      <div className="w-full h-screen text-center">
        <div className="absolute max-w[1240px] w-full h-full mx-auto flex  justify-center items-center  ">
          <div>
            <h1 className=" text-8xl font-serif font-extrabold uppercase py-4 text-slate-400 ">
              Let`s <span className="text-blue-800">hack</span> the <span className="text-blue-800">world</span>
            </h1>
            <br />
            <br />
            <br />
            <br />
            <p className="text-3xl font-semibold text-slate-400">
              <span className="text-blue-800">Empowering Futures </span> | One
              Line of Code at a Time
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
