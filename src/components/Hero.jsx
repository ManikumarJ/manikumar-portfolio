import { BsArrowRight, BsDownload } from 'react-icons/bs';

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl animate-[spin_20s_linear_infinite]" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-green-400/10 dark:bg-green-400/20 rounded-full blur-3xl opacity-70 animate-[spin_25s_linear_infinite_reverse]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto">
          <div>
            <h2 className="text-xl md:text-2xl font-semibold text-indigo-600 dark:text-green-400 mb-4 tracking-wide uppercase text-sm">
              Hello, I'm Manikumar J
            </h2>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            MERN Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-green-400">Developer</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed font-light">
            Building scalable full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium flex items-center justify-center space-x-2 transition-all shadow-lg shadow-indigo-500/30"
            >
              <span>View Projects</span>
              <BsArrowRight />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-slate-300 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-green-400 font-medium transition-all"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/drive/folders/1k1JhKcx5bCkVbf2bs5bbtM22HTKw7-Nj?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 font-medium flex items-center justify-center space-x-2 transition-all"
            >
              <BsDownload />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
