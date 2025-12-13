import { useEffect, useRef, useState } from 'react';
import { Code2, Sparkles, Target } from 'lucide-react';

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 dark:from-cyan-400 dark:to-blue-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="relative bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 shadow-2xl">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 dark:from-cyan-500 dark:to-blue-700 flex items-center justify-center shadow-lg">
                  <div className="w-44 h-44 rounded-full bg-white dark:bg-slate-900 flex items-center justify-center">
                    <Code2 className="w-20 h-20 text-cyan-600 dark:text-cyan-400" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/30 dark:to-blue-950/30 hover:scale-105 transition-transform duration-300">
                    <Sparkles className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">3+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 hover:scale-105 transition-transform duration-300">
                    <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium">20+ Projects Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            {/* <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              Hello! I'm a passionate full-stack developer who loves creating digital experiences
              that make a difference. With a keen eye for design and a strong foundation in modern
              web technologies, I bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
              My journey in web development started with a curiosity about how things work on the
              internet, and it has evolved into a career where I get to solve complex problems
              while crafting beautiful user interfaces.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              I specialize in React, TypeScript, Node.js, and modern cloud technologies. I believe
              in writing clean, maintainable code and creating user experiences that feel intuitive
              and delightful.
            </p> */}
<p className="text-lg text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
I specialize in building high-performance, cloud-ready applications using React, Next.js, and Laravel. I engineer systems with a strong focus on scalability, security, and long-term maintainability, while delivering interfaces that feel effortless, intuitive, and visually refined. My work blends clean architecture with modern engineering practices to create products that are fast, reliable, and genuinely enjoyable for users—today and as they grow.
</p>

            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Laravel', 'PHP', 'Html', 'Css', 'JavaScript', 'TailwindCss', 'MaterialUi', 'Bootstrap', 'Shadcn',  'WebStorm', 'VisualStudioCode','Xampp'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-white/80 to-white/60 dark:from-white/10 dark:to-white/5 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/10 hover:scale-110 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
