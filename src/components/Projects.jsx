import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs';
import woodNestImage from '../assets/image/WoodNest-Project-Image.png';
import jobSculptorImage from '../assets/image/jobsculptor-project-Image.png';

const projects = [
  {
    title: 'WoodNest - MERN Stack E-Commerce Application',
    description: 'A full-stack e-commerce application built using the MERN stack with secure authentication and product management features.',
    features: ['JWT Authentication', 'Product listing and filtering', 'Shopping cart functionality', 'CRUD operations', 'Admin dashboard', 'Fully responsive design'],
    tech: [  "React.js","Node.js","Express.js","MongoDB","Mongoose","JWT Authentication","bcrypt","Axios","Tailwind CSS"],
    github: 'https://github.com/ManikumarJ/woodnest',
    demo: '#',
    image: woodNestImage
  },
   {
    title: 'JobSculptor - AI Resume Analyzer & Job Tracker',
    description: 'An AI-powered platform that analyzes resumes against job descriptions and helps users track their job applications efficiently.',
    features: [
      ' "AI-powered resume analysis with match score against job description"',
      'Highlights Matched Skills and Missing Keywords',
      'PDF Resume Upload Support',
      'Job Tracker to save applications, notes, and match scores',
      'Secure Authentication with JWT',
      'Responsive and user-friendly UI'
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT Authentication",
      "Axios",
      "Tailwind CSS",
      "Google Gemini AI Integration",
      "pdf-parse"
    ],
    github: 'https://github.com/ManikumarJ/jobsculptor-ai.git', 
    demo: 'https://jobsculptor-ai.vercel.app/', 
    image: jobSculptorImage // import your project image
  }
];



const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent works and full-stack applications.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/40 dark:bg-slate-800/40 backdrop-blur-xl border border-slate-200/50 dark:border-slate-700/50 rounded-3xl p-6 sm:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Project Image */}
                <div className="order-2 lg:order-1 overflow-hidden rounded-2xl shadow-md border border-slate-200/50 dark:border-slate-700/50 group-hover:shadow-xl transition-all">
                  <img 
                    src={project.image} 
                    alt={`${project.title} screenshot`} 
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>

                {/* Content */}
                <div className="order-1 lg:order-2 space-y-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-indigo-500 dark:group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-600 dark:text-slate-300">
                    {project.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-3">Key Features:</h4>
                    <ul className="grid sm:grid-cols-2 gap-2 text-slate-600 dark:text-slate-400">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0"></span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300 text-sm font-medium rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-green-400 font-medium transition-colors"
                    >
                      <BsGithub size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-green-400 font-medium transition-colors"
                    >
                      <BsBoxArrowUpRight size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
