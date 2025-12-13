import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import image1 from '../image/image.png';
import image2 from '../image/thesmile.png';
import image3 from '../image/locate.png';
import almadina from '../image/almadina.png';
import rell from '../image/relstatw.png';
import Dashboard from '../image/dashboard.png';
type Project = {
  title: string;
  description: string;
  tags: string[];
  gradient: string;
  darkGradient: string;
  image: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: 'IQAMTI',
    description: 'Participated in building and enhancing the front-end of a hotel booking platform, developing interactive UI components including destination search, check-in/check-out date pickers, and user-friendly forms. Focused on improving usability, responsiveness, and overall user experience."',
    tags: [ 'Html', 'CSS', 'JavaScript','Laravel'],
    gradient: 'from-cyan-500 to-blue-600',
    darkGradient: 'dark:from-cyan-400 dark:to-blue-500',
    image: image1,
    // github: 'https://github.com/your-user/ecommerce',
    live: 'https://iqamti.com/',
  },
  {
    title: 'The Smile Cosmetics',
    description: 'Built a fully responsive, modern web application using React, showcasing a clean and engaging e-commerce experience for a cosmetics brand. Designed and implemented key components including product listing, filtering, and checkout flows, ensuring seamless user interaction across devices. Focused on optimizing performance, enhancing UI/UX, and enforcing code maintainability with reusable components and state management best practices.',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    gradient: 'from-purple-500 to-pink-600',
    darkGradient: 'dark:from-purple-400 dark:to-pink-500',
    image: image2,
    github: 'https://smile-cosmetics.42web.io/',
    live: 'https://smile-cosmetics.42web.io/',
  },
  {
    title: 'Locate – Store Management & E-Commerce Admin System',
    description: 'Locate – Store Management & E-Commerce Admin System A scalable Laravel-based system for managing stores, products, orders, and users.Features multi-role access (Admin & Store Manager), secure RESTful APIs, Telr payment integration, and real-time notifications using Firebase — all through a clean, production-ready dashboard..',
    tags: ['larave', 'Firebase', 'telr', 'apis'],
    gradient: 'from-blue-500 to-purple-600',
    darkGradient: 'dark:from-blue-400 dark:to-purple-500',
    image: image3,
    github: 'https://github.com/ahmed-alaydee/Locate-system-Mobile-application',
    live: 'https://locate.shinefy.co/login',
  },
  {
    title: 'Madinah Technology and Events Website',
    description: 'Madinah Technology and Events Website A modern, responsive website built with Next.js and TailwindCSS for a software company.Focused on clean UI/UX, fast performance, and well-structured pages.',
    tags: ['React', 'Next.js', 'TailwindCSS'],
    gradient: 'from-pink-500 to-rose-600',
    darkGradient: 'dark:from-pink-400 dark:to-rose-500',
    image: almadina,
    github: 'https://github.com/ahmed-alaydee/almadina-almonawara?tab=readme-ov-file',
    live: 'https://almadina-almonawara-gn5h.vercel.app/',
  },
  {
    title: 'Real estate ',
    description: 'The 1st Avenue Website A professional corporate website built for The First Avenue for Real Estate Development — a Riyadh-based real estate company focusing on residential, commercial, and mixed-use property development and investment. The site showcases the company’s projects, services, investor information, and corporate presence with clean navigation and responsive design',
    tags: ['React', 'api', 'TailwindCSS'],
    gradient: 'from-orange-500 to-yellow-600',
    darkGradient: 'dark:from-orange-400 dark:to-yellow-500',
    image:rell,
    github: 'https://www.the1stavenue.com.sa/',
    live: 'https://www.the1stavenue.com.sa/',
  },
  {
    title: 'Admin Dashboard – Frontend System',
    description: 'A modern and responsive admin dashboard built with React and TailwindCSS. Designed to visualize business data through clean UI components, analytics cards, charts, and activity feeds, with a focus on usability, performance, and scalable layout structure. Short Version A responsive admin dashboard built using React and TailwindCSS, featuring analytics, charts, and a clean, modern UI. With a Bit More Technical Depth A frontend admin dashboard developed with React and TailwindCSS, showcasing data analytics, real-time activity sections, reusable components, and a scalable UI architecture optimized for modern web applications',
    tags: ['Next.js', 'FFmpeg', 'AWS', 'Cloudflare'],
    gradient: 'from-rose-500 to-orange-600',
    darkGradient: 'dark:from-rose-400 dark:to-orange-500',
    image: Dashboard,
    github: 'https://github.com/ahmed-alaydee/Dashboard-Front-End',
    live: 'https://dashboard-front-end-lilac.vercel.app/',
  },
  //  {
  //   title: 'Admin Dashboard – Frontend System',
  //   description: 'A modern and responsive admin dashboard built with React and TailwindCSS. Designed to visualize business data through clean UI components, analytics cards, charts, and activity feeds, with a focus on usability, performance, and scalable layout structure. Short Version A responsive admin dashboard built using React and TailwindCSS, featuring analytics, charts, and a clean, modern UI. With a Bit More Technical Depth A frontend admin dashboard developed with React and TailwindCSS, showcasing data analytics, real-time activity sections, reusable components, and a scalable UI architecture optimized for modern web applications',
  //   tags: ['Next.js', 'FFmpeg', 'AWS', 'Cloudflare'],
  //   gradient: 'from-rose-500 to-orange-600',
  //   darkGradient: 'dark:from-rose-400 dark:to-orange-500',
  //   image: Dashboard,
  //   github: 'https://github.com/ahmed-alaydee/Dashboard-Front-End',
  //   live: 'https://dashboard-front-end-lilac.vercel.app/',
  // },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openLink = (url?: string) => {
    if (!url) return;
    // فتح الرابط في تبويب جديد — بدون استخدام <a>
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-32 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 dark:from-white dark:via-cyan-200 dark:to-purple-200 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="relative h-full cursor-pointer"
                style={{
                  transform: hoveredIndex === index ? 'translateY(-10px) rotateX(5deg)' : 'none',
                  transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                }}
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} ${project.darkGradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition-opacity duration-500`} />
                <div className="relative h-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/20 dark:border-white/10">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} ${project.darkGradient} opacity-40 mix-blend-multiply`} />

                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50 backdrop-blur-sm">
                      {/* زر يفتح GitHub بدون <a> */}
                      <button
                        onClick={() => openLink(project.github)}
                        aria-label={`Open ${project.title} GitHub`}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        type="button"
                      >
                        <Github className="w-6 h-6 text-white" />
                      </button>

                      {/* زر يفتح Live Demo بدون <a> */}
                      <button
                        onClick={() => openLink(project.live)}
                        aria-label={`Open ${project.title} Live Demo`}
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 hover:scale-110 transition-all duration-300"
                        type="button"
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </button>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-cyan-600 group-hover:to-blue-600 dark:group-hover:from-cyan-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:scale-110 transition-transform duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
