const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Bootstrap', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js']
  },
  {
    title: 'Database',
    skills: ['MongoDB', 'MySQL']
  },
  {
    title: 'Libraries & Tools',
    skills: ['Mongoose', 'Axios', 'bcrypt', 'JSON Web Token (JWT)', 'CORS', 'dotenv', 'Multer', 'Git', 'GitHub', 'VS Code', 'Thunder Client', 'Vercel', 'Render']
  },
  {
    title: 'Concepts',
    skills: ['REST APIs', 'CRUD Operations', 'Authentication & Authorization', 'API Integration', 'Responsive Web Design']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-green-400">Skills</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Technologies and tools I use to build complete web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 hover:shadow-lg hover:border-indigo-500/50 dark:hover:border-green-400/50 transition-all group"
            >
              <h3 className="text-xl font-semibold mb-6 text-slate-800 dark:text-slate-200 group-hover:text-indigo-500 dark:group-hover:text-green-400 transition-colors border-b border-slate-100 dark:border-slate-700 pb-2">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:bg-indigo-50 hover:text-indigo-600 dark:hover:bg-slate-800 dark:hover:text-green-400 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
