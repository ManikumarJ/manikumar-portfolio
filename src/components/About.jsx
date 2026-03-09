const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-800/50 relative overflow-hidden">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-green-400">Me</span>
          </h2>
          <div className="relative">
            <span className="absolute -top-10 -left-10 text-9xl text-slate-100 dark:text-slate-800/50 font-serif leading-none select-none z-0">"</span>
            <p className="relative z-10 text-xl font-light leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
              Motivated MERN Stack Developer with hands-on experience building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Skilled in developing RESTful APIs, implementing JWT authentication, and building responsive user interfaces using modern JavaScript (ES6+). Passionate about solving real-world problems and continuously learning new technologies.
            </p>
            <span className="absolute -bottom-10 -right-10 text-9xl text-slate-100 dark:text-slate-800/50 font-serif leading-none select-none z-0 rotate-180">"</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
