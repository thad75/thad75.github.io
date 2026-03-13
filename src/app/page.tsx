"use client";

export default function Home() {
  // UPDATE YOUR LINKEDIN POSTS HERE
  const linkedInPosts = [
    {
      id: 1,
      date: "March 2025",
      title: "The Future of LLMs in Enterprise",
      excerpt: "Sharing my thoughts on how Large Language Models are transforming business operations and what leaders need to know about implementation strategies...",
      likes: "142",
      comments: "23",
      link: "https://linkedin.com/in/tharsansenthivel"
    },
    {
      id: 2,
      date: "February 2025",
      title: "AI Transformation: Beyond the Hype",
      excerpt: "After leading AI initiatives at PMU, I've learned that successful AI transformation requires more than technology—it demands cultural change...",
      likes: "287",
      comments: "45",
      link: "https://linkedin.com/in/tharsansenthivel"
    },
    {
      id: 3,
      date: "January 2025",
      title: "Computer Vision in Production",
      excerpt: "Lessons learned from deploying CV systems at scale. From edge computing challenges to model drift monitoring...",
      likes: "198",
      comments: "31",
      link: "https://linkedin.com/in/tharsansenthivel"
    }
  ];

  // UPDATE YOUR PUBLICATIONS HERE
  const publications = [
    {
      id: 1,
      title: "Subgroups for Detection Transformer",
      authors: "T. Senthivel, N.S. Vu",
      venue: "2024 IEEE International Conference on Image Processing (ICIP), 2194-2200",
      year: "2024",
      link: "https://ieeexplore.ieee.org/abstract/document/10648285",
      type: "Conference Paper"
    },
    {
      id: 2,
      title: "QR-DETR: Query Routing for Detection Transformer",
      authors: "T. Senthivel, N.S. Vu",
      venue: "Proceedings of the Asian Conference on Computer Vision, 354-371",
      year: "2024",
      link: "https://openaccess.thecvf.com/content/ACCV2024/papers/Senthivel_QR-DETR__Query_Routing_for_Detection_Transformer_ACCV_2024_paper.pdf",
      type: "Conference Paper"
    },
    {
      id: 3,
      title: "Detection Transformer with Diversified Object Queries",
      authors: "T. Senthivel, N.S. Vu, B. Borzic",
      venue: "2023 IEEE International Conference on Image Processing (ICIP), 2515-2519",
      year: "2023",
      link: "https://ieeexplore.ieee.org/abstract/document/10221970",
      type: "Conference Paper"
    }
  ];

  // UPDATE YOUR TALKS HERE
  const talks = [
    {
      id: 1,
      title: "AI Innovation at VivaTech",
      event: "VivaTech 2025",
      date: "June 2025",
      location: "Paris, France",
      type: "Conference Speaker"
    },
    {
      id: 2,
      title: "AI Applications in Industry",
      event: "EquiIA 2025",
      date: "2025",
      location: "Paris, France",
      type: "Conference Speaker"
    },
    {
      id: 3,
      title: "AI Research and Industry Applications",
      event: "Efrei Tech & Research Experience",
      date: "2025",
      location: "Paris, France",
      type: "Guest Speaker"
    },
    {
      id: 4,
      title: "QR-DETR: Query Routing for Detection Transformer",
      event: "Asian Conference on Computer Vision (ACCV) 2024",
      date: "December 2024",
      location: "Hanoi, Vietnam",
      type: "Conference Speaker"
    },
    {
      id: 5,
      title: "Subgroups for Detection Transformer",
      event: "IEEE International Conference on Image Processing (ICIP) 2024",
      date: "October 2024",
      location: "Abu Dhabi, UAE",
      type: "Conference Speaker"
    },
    {
      id: 6,
      title: "Detection Transformer with Diversified Object Queries",
      event: "IEEE International Conference on Image Processing (ICIP) 2023",
      date: "October 2023",
      location: "Kuala Lumpur, Malaysia",
      type: "Conference Speaker"
    }
  ];

  // UPDATE YOUR AWARDS HERE
  const awards = [
    {
      id: 1,
      title: "Jury Member",
      organization: "The AI Collective Paris - Activate Your Voice Hackathon",
      year: "2026",
      description: "Served as jury member for 24-hour hackathon on Neural Dialogue and Voice Agent technology. €100K prize pool."
    },
    {
      id: 2,
      title: "Best Student Paper Award",
      organization: "Asian Conference on Computer Vision (ACCV) 2024",
      year: "2024",
      description: "Awarded for outstanding student paper: 'QR-DETR: Query Routing for Detection Transformer'"
    },
    {
      id: 3,
      title: "PhD in Artificial Intelligence",
      organization: "Université Paris-Saclay",
      year: "2023",
      description: "Doctorate in AI with focus on Detection Transformers and Object Detection"
    }
  ];

  // UPDATE YOUR BLOG ARTICLES HERE
  const blogPosts = [
    {
      id: 1,
      date: "December 2024",
      title: "From PhD to Lead AI: My Journey",
      excerpt: "Reflections on transitioning from academic research to leading AI initiatives in a major French enterprise...",
      readTime: "5 min read",
      link: "#"
    },
    {
      id: 2,
      date: "October 2024",
      title: "Building an AI Center of Excellence",
      excerpt: "Key lessons from establishing and scaling an AI practice within a traditional organization...",
      readTime: "8 min read",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800 transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">TS</span>
          <div className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">About</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Projects</a>
            <a href="#publications" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Publications</a>
            <a href="#speaking" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Speaking</a>
            <a href="#posts" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Posts</a>
            <a href="#blog" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Blog</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 fade-in">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6 animate-fade-up">
            Tharsan Senthivel<span className="text-zinc-400 dark:text-zinc-600">, PhD</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-4 animate-fade-up" style={{animationDelay: '0.1s'}}>
            Lead AI
          </p>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            @ PMU · Paris, France
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-xl mx-auto mb-10 animate-fade-up" style={{animationDelay: '0.3s'}}>
            PhD in Artificial Intelligence. Driving strategic AI transformation in organizations.
            Combining scientific excellence with pragmatic ROI-oriented vision.
          </p>
          <div className="flex gap-4 justify-center animate-fade-up" style={{animationDelay: '0.4s'}}>
            <a
              href="#contact"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all hover:scale-105"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                I accompany the strategic transformation of organizations through Artificial Intelligence.
                My approach combines scientific excellence with a pragmatic vision focused on ROI.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                As an expert and Lead AI, my role goes beyond technical implementation: I transform AI
                into a major competitive asset. My mission is to democratize the use of AI at all levels
                of the company to make it a true engine of sustainable growth.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                My research focuses on Detection Transformers (DETR) and object detection, with publications
                at top conferences including ICIP and ACCV. I bridge the gap between cutting-edge research
                and production-ready solutions in Computer Vision.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/30 dark:to-yellow-900/30 hover:scale-105 transition-transform border border-amber-200 dark:border-amber-800">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">🏆</span>
                  <div className="text-3xl font-bold text-amber-600 dark:text-amber-400">Best Paper</div>
                </div>
                <div className="text-zinc-600 dark:text-zinc-400">ACCV 2024 - Student Paper Award</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">3</div>
                <div className="text-zinc-600 dark:text-zinc-400">Publications · 6 Citations</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">PMU</div>
                <div className="text-zinc-600 dark:text-zinc-400">Lead AI · Paris, France</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 px-6 bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Awards & Recognition</h2>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">Professional recognition and achievements.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div key={award.id} className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-amber-200 dark:border-amber-800 hover:shadow-lg hover:shadow-amber-500/10 transition-all hover:scale-105">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🏆</span>
                  <span className="text-sm text-amber-600 dark:text-amber-400 font-medium">{award.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">{award.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-2">{award.organization}</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-500">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Featured Projects</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">AI projects driving business impact at PMU and beyond.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "LLM-Powered Analytics Platform",
                description: "Built an enterprise analytics platform using Large Language Models to extract insights and provide actionable intelligence for business decision-making.",
                tags: ["LLMs", "Python", "Transformers", "FastAPI", "AWS"]
              },
              {
                title: "Computer Vision Quality System",
                description: "Developed a real-time computer vision system for automated quality control, leveraging deep learning for object detection and classification.",
                tags: ["Computer Vision", "YOLO", "PyTorch", "OpenCV", "Edge AI"]
              },
              {
                title: "AI Transformation Strategy",
                description: "Led the strategic AI transformation initiative, democratizing AI usage across all organizational levels and establishing sustainable growth frameworks.",
                tags: ["AI Strategy", "Leadership", "MLOps", "Architecture"]
              },
              {
                title: "Innovation Pipeline",
                description: "Created an end-to-end pipeline for AI innovation, from research ideation to production deployment, ensuring ROI-focused technology adoption.",
                tags: ["Innovation", "Product", "Kubernetes", "MLflow", "CI/CD"]
              }
            ].map((project, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition-all hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">{project.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-24 px-6 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Publications</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">Research papers and academic contributions.</p>

          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.id} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg transition-all hover:scale-[1.01]">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 mb-2">
                      {pub.type}
                    </span>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">{pub.title}</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">{pub.authors}</p>
                  </div>
                  <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500 whitespace-nowrap">{pub.year}</span>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3">{pub.venue}</p>
                <a
                  href={pub.link}
                  className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 hover:underline"
                >
                  View publication
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30 scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Speaking & Talks</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">Conference talks, workshops, and podcast appearances.</p>

          {/* Timeline Navigation */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 -translate-y-1/2"></div>

            <div className="flex items-center justify-between gap-2 md:gap-0 relative">
              {talks.map((talk, index) => (
                <div key={talk.id} className="flex-1 flex flex-col items-center">
                  <button
                    data-talk={talk.id}
                    className="talk-tab group relative w-full max-w-[180px] p-4 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl z-10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                      <div className="text-xs font-medium text-purple-600 dark:text-purple-400">{talk.date}</div>
                    </div>
                    <div className="text-sm font-bold text-zinc-900 dark:text-zinc-50 text-center line-clamp-2">
                      {talk.event}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>

                  {/* Arrow between talks */}
                  {index < talks.length - 1 && (
                    <div className="hidden md:flex absolute right-[-10%] top-1/2 -translate-y-1/2 w-5 h-5 items-center justify-center">
                      <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Talk Details */}
          <div id="talk-details" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {talks.map((talk) => (
              <div
                key={talk.id}
                data-talk-content={talk.id}
                className="talk-content p-8 rounded-3xl bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                    <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400">
                    {talk.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 mb-3 leading-tight">
                  {talk.title}
                </h3>

                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4">
                  {talk.event}
                </p>

                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-700 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {talk.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {talk.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Posts Section */}
      <section id="posts" className="py-24 px-6 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50">Latest on LinkedIn</h2>
            <a
              href="https://linkedin.com/in/tharsansenthivel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">Thoughts on AI, technology, and leadership.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {linkedInPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {post.date}
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    {post.comments}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Blog & Articles</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">Long-form thoughts and tutorials.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition-all hover:scale-[1.02]">
                <div className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">{post.date} · {post.readTime}</div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">{post.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Skills & Expertise</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">Core competencies and technologies.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "AI & Machine Learning",
                skills: ["Detection Transformers (DETR)", "Computer Vision", "Object Detection", "Deep Learning", "Query Routing", "PyTorch", "Transformers"]
              },
              {
                category: "Leadership",
                skills: ["AI Strategy", "Team Leadership", "Transformation", "ROI-Focused Innovation", "Stakeholder Management", "Technical Vision"]
              },
              {
                category: "MLOps & Infrastructure",
                skills: ["MLflow", "Kubeflow", "Docker", "Kubernetes", "AWS", "CI/CD", "Model Deployment", "Monitoring"]
              },
              {
                category: "Programming",
                skills: ["Python", "TypeScript", "SQL", "C++", "Go", "FastAPI", "REST APIs"]
              },
              {
                category: "Data Engineering",
                skills: ["Apache Spark", "Kafka", "Data Pipelines", "ETL", "Real-time Processing", "Big Data"]
              },
              {
                category: "Innovation",
                skills: ["R&D", "Product Strategy", "Technology Assessment", "Prototyping", "Architecture Design", "Solution Engineering"]
              }
            ].map((group, i) => (
              <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 hover:scale-105 transition-transform">
                <h3 className="font-semibold text-zinc-900 dark:text-zinc-50 mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600"></div>
                      <span className="text-sm text-zinc-600 dark:text-zinc-400">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30 scroll-reveal">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Let's Connect</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
            Let's discuss how I can help transform your organization with AI.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { name: "LinkedIn", href: "https://linkedin.com/in/tharsansenthivel", icon: "💼" },
              { name: "GitHub", href: "https://github.com/thad75", icon: "🐙" },
              { name: "Email", href: "mailto:contact@thad75.com", icon: "✉️" }
            ].map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 hover:border-zinc-400 dark:hover:border-zinc-600 hover:shadow-lg transition-all hover:scale-105"
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <a
            href="mailto:contact@thad75.com"
            className="inline-block px-10 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 text-lg"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto text-center text-sm text-zinc-500 dark:text-zinc-500">
          <p>© {new Date().getFullYear()} Tharsan Senthivel, PhD. All rights reserved.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .scroll-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .scroll-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            // Scroll reveal animation
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                }
              });
            }, { threshold: 0.1 });

            document.querySelectorAll('.scroll-reveal').forEach(el => {
              observer.observe(el);
            });

            // Timeline hover interaction
            const talkTabs = document.querySelectorAll('.talk-tab');
            const talkContents = document.querySelectorAll('.talk-content');

            talkTabs.forEach(tab => {
              tab.addEventListener('mouseenter', () => {
                const talkId = tab.getAttribute('data-talk');
                talkContents.forEach((content, index) => {
                  setTimeout(() => {
                    if (content.getAttribute('data-talk-content') === talkId) {
                      content.style.opacity = '1';
                      content.style.transform = 'scale(1.02) translateY(-4px)';
                      content.style.borderColor = 'rgb(168 85 247)';
                      content.style.boxShadow = '0 25px 50px -12px rgb(168 85 247 / 0.25)';
                    } else {
                      content.style.opacity = '0.3';
                      content.style.transform = 'scale(0.95)';
                      content.style.borderColor = 'rgb(229 231 235)';
                      content.style.boxShadow = 'none';
                    }
                  }, index * 50);
                });
              });

              tab.addEventListener('mouseleave', () => {
                talkContents.forEach((content, index) => {
                  setTimeout(() => {
                    content.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                    content.style.opacity = '1';
                    content.style.transform = 'scale(1) translateY(0)';
                    content.style.borderColor = '';
                    content.style.boxShadow = '';
                  }, index * 30);
                });
              });
            });

            // Add click interaction for mobile
            talkTabs.forEach(tab => {
              tab.addEventListener('click', () => {
                const talkId = tab.getAttribute('data-talk');
                const targetContent = document.querySelector(\`[data-talk-content="\${talkId}"]\`);
                if (targetContent) {
                  targetContent.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
              });
            });
          }
        `
      }} />
    </div>
  );
}
