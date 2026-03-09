const educationData = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Karpagam College of Engineering',
    duration: '2023 - 2025',
    score: 'CGPA: 7.98'
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Kongu Arts and Science College',
    duration: '2020 - 2023',
    score: 'CGPA: 7.99'
  }
];

const certifications = [
  'Responsive Web Design - SmartCliff Learning Solutions',
  'Git Training - Simplilearn',
  'Complete JavaScript, jQuery, and React Bootcamp - Udemy'
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-white dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-green-400">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My academic background and continuing education.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Education Timeline */}
          <div className="lg:col-span-3 space-y-8">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 flex items-center">
              <span className="w-8 h-px bg-indigo-500 mr-4"></span>
              Education
            </h3>
            <div className="space-y-8 pl-4 lg:pl-0 border-l-2 border-indigo-100 dark:border-slate-700 lg:border-none">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:shadow-md transition-shadow lg:ml-6"
                >
                  <div className="absolute top-10 -left-[21px] lg:-left-10 w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-900 hidden lg:block"></div>
                  <div className="absolute top-10 -left-[29px] w-4 h-4 rounded-full bg-indigo-500 border-4 border-white dark:border-slate-900 lg:hidden"></div>
                  
                  <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-indigo-600 bg-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 rounded-full">
                    {edu.duration}
                  </span>
                  <h4 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">{edu.degree}</h4>
                  <p className="text-lg text-slate-600 dark:text-slate-300 mb-2">{edu.institution}</p>
                  <p className="text-sm font-medium text-green-500 dark:text-green-400">{edu.score}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-200 flex items-center">
              <span className="w-8 h-px bg-green-400 mr-4"></span>
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700/50 hover:border-green-300 dark:hover:border-green-500/50 transition-colors flex items-start space-x-4"
                >
                  <span className="text-green-400 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                    {cert}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
