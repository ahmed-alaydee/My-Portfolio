import { useEffect, useRef, useState } from 'react';
import { Code2, Database, Cloud, Palette, Terminal, Zap } from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    color: 'from-cyan-500 to-blue-600',
    darkColor: 'dark:from-cyan-400 dark:to-blue-500',
    progress: 95,
  },
  {
    icon: Terminal,
    title: 'Backend Development',
    skills: ['Php', 'Laravel', 'REST APIs'],
    color: 'from-blue-500 to-purple-600',
    darkColor: 'dark:from-blue-400 dark:to-purple-500',
    progress: 90,
  },
  {
    icon: Database,
    title: 'Database & State',
    skills: [ 'phpMyAdmin', 'MySQL','MySQL', 'Context API', 'XAMPP'],
    color: 'from-purple-500 to-pink-600',
    darkColor: 'dark:from-purple-400 dark:to-pink-500',
    progress: 95,
  },

  {
    icon: Palette,
    title: 'UI/UX Design',
    skills: ['Figma', 'Design Systems', 'Responsive Design'],
    color: 'from-rose-500 to-orange-600',
    darkColor: 'dark:from-rose-400 dark:to-orange-500',
    progress: 95,
  },
  {
    icon: Zap,
    title: 'Performance',
    skills: ['Optimization', 'Testing', 'Monitoring', 'SEO'],
    color: 'from-orange-500 to-yellow-600',
    darkColor: 'dark:from-orange-400 dark:to-yellow-500',
    progress: 95,
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedProgress, setAnimatedProgress] = useState<Record<string, number>>({});

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

  useEffect(() => {
    if (isVisible) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          let progress = 0;
          const interval = setInterval(() => {
            progress += 2;
            if (progress >= skill.progress) {
              progress = skill.progress;
              clearInterval(interval);
            }
            setAnimatedProgress(prev => ({ ...prev, [skill.title]: progress }));
          }, 20);
        }, index * 150);
      });
    }
  }, [isVisible]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-32 px-6 bg-gradient-to-b from-transparent via-slate-100/50 to-transparent dark:via-slate-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className={`group transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative h-full">
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${skill.color} ${skill.darkColor} rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                  <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/10 hover:scale-105 transition-transform duration-500">
                    <div className={`w-16 h-16 bg-gradient-to-br ${skill.color} ${skill.darkColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                      {skill.title}
                    </h3>

                    <div className="mb-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          Proficiency
                        </span>
                        <span className="text-sm font-bold text-slate-900 dark:text-white">
                          {animatedProgress[skill.title] || 0}%
                        </span>
                      </div>
                      <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skill.color} ${skill.darkColor} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${animatedProgress[skill.title] || 0}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {skill.skills.map((item, i) => (
                        <span
                          key={item}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
