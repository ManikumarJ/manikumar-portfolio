import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-white dark:bg-slate-900 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-slate-600 dark:text-slate-400 text-sm font-medium">
          &copy; {currentYear} Manikumar J <span className="mx-2">|</span> MERN Stack Developer
        </div>
        
        <div className="flex space-x-6">
          <a
            href="https://github.com/ManikumarJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <BsGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/manikumarj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            aria-label="LinkedIn"
          >
            <BsLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
