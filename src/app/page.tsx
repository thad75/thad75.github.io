"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  // UPDATE YOUR LINKEDIN POSTS HERE
  const linkedInPosts = [
    {
      id: 1,
      date: "April 2026",
      title: "AWS Summit Paris: Visit PMU at Public Sector",
      excerpt: "Au Amazon Web Services (AWS) Summit ? Passez voir le PMU au niveau 2, Public Sector. On a des trucs cools sur le stand ✌️",
      likes: "63",
      comments: "0",
      reposts: null,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7445040294342885377/"
    },
    {
      id: 2,
      date: "March 2026",
      title: "Google Gemini at Work: From Curiosity to Performance Engine",
      excerpt: "Attended Google Gemini at Work and discovered how Gemini enables moving from curiosity to a true performance engine. Highlights include the 'Speech-to-Speech' keynote demo with near-real-time information capture and R&D acceleration capabilities.",
      likes: "49",
      comments: "1",
      reposts: null,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7440702431899963392/"
    },
    {
      id: 3,
      date: "November 2024",
      title: "Our Secrets for Powerful Yet Affordable Agentic AI",
      excerpt: "How we built ComPariDoc with Multi-Agent Collaboration, Deep Research, and Agentic-RAG—all while keeping costs 10x lower using Amazon Nova models instead of premium alternatives.",
      likes: "72",
      comments: "8",
      reposts: "2",
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
    <div className="min-h-screen bg-[#FFF8F0] dark:bg-[#222831]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FFF8F0]/80 backdrop-blur-md dark:bg-[#222831]/80 border-b border-[#C08552] dark:border-[#393E46] transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-[#4B2E2B] dark:text-[#DFD0B8]">TS</span>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 text-sm">
              <a href="#about" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">About</a>
              <a href="#projects" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Projects</a>
              <a href="#publications" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Publications</a>
              <a href="#speaking" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Speaking</a>
              <a href="#posts" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Posts</a>
              <a href="#blog" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Blog</a>
              <a href="#contact" className="text-[#8C5A3C] hover:text-[#4B2E2B] dark:text-[#948979] dark:hover:text-[#DFD0B8] transition-colors">Contact</a>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 fade-in">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#4B2E2B] dark:text-[#DFD0B8] mb-6 animate-fade-up">
            Tharsan Senthivel<span className="text-[#8C5A3C] dark:text-[#948979]">, PhD</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#8C5A3C] dark:text-[#948979] mb-4 animate-fade-up" style={{animationDelay: '0.1s'}}>
            Lead AI
          </p>
          <p className="text-lg text-[#C08552] dark:text-[#DFD0B8] font-medium mb-8 animate-fade-up" style={{animationDelay: '0.2s'}}>
            @ PMU · Paris, France
          </p>
          <p className="text-lg text-[#8C5A3C] dark:text-[#948979] max-w-xl mx-auto mb-10 animate-fade-up" style={{animationDelay: '0.3s'}}>
            Transforming organizations through strategic AI leadership. Building world-class AI teams,
            delivering measurable business outcomes, and shaping the future of enterprise AI.
          </p>
          <div className="flex gap-4 justify-center animate-fade-up" style={{animationDelay: '0.4s'}}>
            <a
              href="#contact"
              className="px-8 py-3 bg-[#4B2E2B] dark:bg-[#DFD0B8] text-[#FFF8F0] dark:text-[#222831] rounded-full font-medium hover:opacity-90 transition-all hover:scale-105"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-[#C08552] dark:border-[#393E46] text-[#4B2E2B] dark:text-[#DFD0B8] rounded-full font-medium hover:bg-[#FFF8F0] dark:hover:bg-[#222831] transition-all hover:scale-105"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-8">About</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg text-[#8C5A3C] dark:text-[#948979] leading-relaxed mb-6">
                As a <strong>Lead AI</strong> with a PhD in Artificial Intelligence, I drive enterprise-level AI transformation
                that delivers measurable business outcomes. My expertise spans from cutting-edge research to
                executive leadership, positioning me for the <strong>Chief AI Officer</strong> role.
              </p>
              <p className="text-lg text-[#8C5A3C] dark:text-[#948979] leading-relaxed mb-6">
                At PMU, I lead AI initiatives that combine technical excellence with strategic business impact.
                I build and mentor high-performing AI teams, establish AI governance frameworks, and work
                directly with C-level executives to align AI investments with organizational objectives.
              </p>
              <p className="text-lg text-[#8C5A3C] dark:text-[#948979] leading-relaxed">
                My research background in Detection Transformers (DETR) with publications at ICIP and ACCV
                provides deep technical credibility, while my executive experience enables me to translate
                AI capabilities into business value. I bridge the gap between boardroom strategy and
                cutting-edge implementation.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-[#FFF8F0] to-[#C08552]/20 dark:from-[#222831] dark:to-[#393E46] hover:scale-105 transition-transform border border-[#C08552] dark:border-[#393E46]">
                <div className="flex items-center gap-2 mb-2">
                  <div className="text-3xl font-bold text-[#C08552] dark:text-[#DFD0B8]">Best Paper</div>
                </div>
                <div className="text-[#8C5A3C] dark:text-[#948979]">ACCV 2024 - Student Paper Award</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#FFF8F0] dark:bg-[#393E46] hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8]">3+</div>
                <div className="text-[#8C5A3C] dark:text-[#948979]">Years Leading AI Teams</div>
              </div>
              <div className="p-6 rounded-2xl bg-[#FFF8F0] dark:bg-[#393E46] hover:scale-105 transition-transform">
                <div className="text-3xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8]">PMU</div>
                <div className="text-[#8C5A3C] dark:text-[#948979]">Lead AI · Strategic AI Leadership</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 px-6 bg-gradient-to-br from-[#C08552]/20 to-[#8C5A3C]/20 dark:from-[#393E46] dark:to-[#222831] scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8]">Awards & Recognition</h2>
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-[#4B2E2B] dark:bg-[#DFD0B8] text-[#FFF8F0] dark:text-[#222831] rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download CV
            </a>
          </div>
          <p className="text-[#8C5A3C] dark:text-[#948979] mb-12">Professional recognition and achievements.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {awards.map((award) => (
              <div key={award.id} className="p-6 rounded-2xl bg-[#FFF8F0] dark:bg-[#393E46] border border-[#C08552] dark:border-[#948979] hover:shadow-lg hover:shadow-[#C08552]/10 transition-all hover:scale-105">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-[#C08552] dark:text-[#DFD0B8] font-medium">{award.year}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#4B2E2B] dark:text-[#DFD0B8] mb-1">{award.title}</h3>
                <p className="text-sm text-[#8C5A3C] dark:text-[#948979] mb-2">{award.organization}</p>
                <p className="text-sm text-[#8C5A3C] dark:text-[#948979]">{award.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-[#FFF8F0] dark:bg-[#393E46] scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-4">Featured Projects</h2>
          <p className="text-[#8C5A3C] dark:text-[#948979] mb-12">AI projects driving business impact at PMU and beyond.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Conseil de l'IA",
                description: "AI-powered betting advisor for PMU PLAY that analyzes race conditions (weather, track length, odds) to recommend favorites, challengers, and outsiders for beginner bettors. Explains reasoning and suggests winning bets.",
                tags: ["Generative AI", "PMU PLAY", "LLM", "Product"]
              },
              {
                title: "ComPariDoc",
                description: "Multi-agent AI document comparison platform for complex documents (CVs vs job descriptions, contracts, legal documents). Domain-specific agents (legal, HR, compliance) with orchestrator to prevent hallucinations and ensure accuracy.",
                tags: ["Agentic AI", "RAG", "Multi-Agent", "Enterprise", "Innovation"]
              },
              {
                title: "LLM-Powered Analytics Platform",
                description: "Built an enterprise analytics platform using Large Language Models to extract insights and provide actionable intelligence for business decision-making.",
                tags: ["LLMs", "Python", "Transformers", "FastAPI", "AWS"]
              },
              {
                title: "Computer Vision Quality System",
                description: "Developed a real-time computer vision system for automated quality control, leveraging deep learning for object detection and classification.",
                tags: ["Computer Vision", "YOLO", "PyTorch", "OpenCV", "Edge AI"]
              }
            ].map((project, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#FFF8F0] dark:bg-[#222831] border border-[#C08552] dark:border-[#393E46] hover:border-[#8C5A3C] dark:hover:border-[#948979] hover:shadow-lg transition-all hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-[#4B2E2B] dark:text-[#DFD0B8] mb-3">{project.title}</h3>
                <p className="text-[#8C5A3C] dark:text-[#948979] mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-[#C08552]/20 dark:bg-[#393E46] text-[#8C5A3C] dark:text-[#DFD0B8]">
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-4">Publications</h2>
          <p className="text-[#8C5A3C] dark:text-[#948979] mb-12">Research papers and academic contributions.</p>

          <div className="space-y-6">
            {publications.map((pub) => (
              <div key={pub.id} className="p-6 rounded-2xl bg-[#FFF8F0] dark:bg-[#393E46] border border-[#C08552] dark:border-[#393E46] hover:border-[#C08552] dark:hover:border-[#948979] hover:shadow-lg transition-all hover:scale-[1.01]">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-[#C08552]/30 dark:bg-[#222831] text-[#8C5A3C] dark:text-[#DFD0B8] mb-2">
                      {pub.type}
                    </span>
                    <h3 className="text-lg font-semibold text-[#4B2E2B] dark:text-[#DFD0B8] mb-1">{pub.title}</h3>
                    <p className="text-sm text-[#8C5A3C] dark:text-[#948979]">{pub.authors}</p>
                  </div>
                  <span className="text-sm font-medium text-[#8C5A3C] dark:text-[#948979] whitespace-nowrap">{pub.year}</span>
                </div>
                <p className="text-sm text-[#8C5A3C] dark:text-[#948979] mb-3">{pub.venue}</p>
                <a
                  href={pub.link}
                  className="inline-flex items-center gap-1 text-sm text-[#C08552] dark:text-[#DFD0B8] hover:underline"
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
      <section id="speaking" className="py-24 px-6 bg-[#FFF8F0] dark:bg-[#393E46] scroll-reveal">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-4">Speaking & Talks</h2>
          <p className="text-[#8C5A3C] dark:text-[#948979] mb-12">Conference talks, workshops, and podcast appearances.</p>

          {/* Timeline Navigation */}
          <div className="relative mb-16">
            {/* Timeline Line */}
            <div className="hidden md:flex absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C08552] via-[#8C5A3C] to-[#4B2E2B] dark:from-[#DFD0B8] dark:via-[#948979] dark:to-[#393E46] -translate-y-1/2"></div>

            <div className="flex items-center justify-between gap-2 md:gap-0 relative">
              {talks.map((talk, index) => (
                <div key={talk.id} className="flex-1 flex flex-col items-center">
                  <button
                    data-talk={talk.id}
                    className="talk-tab group relative w-full max-w-[180px] p-4 rounded-2xl bg-[#FFF8F0] dark:bg-[#222831] border-2 border-[#C08552] dark:border-[#393E46] hover:border-[#4B2E2B] dark:hover:border-[#DFD0B8] transition-all duration-300 hover:scale-105 hover:shadow-xl z-10"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-[#C08552] dark:bg-[#DFD0B8]"></div>
                      <div className="text-xs font-medium text-[#C08552] dark:text-[#DFD0B8]">{talk.date}</div>
                    </div>
                    <div className="text-sm font-bold text-[#4B2E2B] dark:text-[#DFD0B8] text-center line-clamp-2">
                      {talk.event}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C08552]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>

                  {/* Arrow between talks */}
                  {index < talks.length - 1 && (
                    <div className="hidden md:flex absolute right-[-10%] top-1/2 -translate-y-1/2 w-5 h-5 items-center justify-center">
                      <svg className="w-4 h-4 text-[#8C5A3C] dark:text-[#948979]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
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
                className="talk-content p-8 rounded-3xl bg-gradient-to-br from-[#FFF8F0] to-[#C08552]/10 dark:from-[#222831] dark:to-[#393E46] border border-[#C08552] dark:border-[#393E46] hover:border-[#4B2E2B] dark:hover:border-[#DFD0B8] hover:shadow-2xl hover:shadow-[#C08552]/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#C08552]/30 dark:bg-[#393E46] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#8C5A3C] dark:text-[#DFD0B8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#C08552]/30 dark:bg-[#393E46] text-[#8C5A3C] dark:text-[#DFD0B8]">
                    {talk.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-3 leading-tight">
                  {talk.title}
                </h3>

                <p className="text-sm font-medium text-[#8C5A3C] dark:text-[#DFD0B8] mb-4">
                  {talk.event}
                </p>

                <div className="pt-4 border-t border-[#C08552]/30 dark:border-[#393E46] space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#8C5A3C] dark:text-[#948979]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {talk.date}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#8C5A3C] dark:text-[#948979]">
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
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8]">Latest on LinkedIn</h2>
            <a
              href="https://linkedin.com/in/tharsansenthivel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C08552] dark:text-[#DFD0B8] hover:underline flex items-center gap-1"
            >
              View all
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
          <p className="text-[#8C5A3C] dark:text-[#948979] mb-12">Thoughts on AI, technology, and leadership.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {linkedInPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-2xl bg-[#FFF8F0] dark:bg-[#393E46] border border-[#C08552] dark:border-[#393E46] hover:border-[#C08552] dark:hover:border-[#DFD0B8] hover:shadow-lg hover:shadow-[#C08552]/10 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-2 text-sm text-[#8C5A3C] dark:text-[#948979] mb-3">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  {post.date}
                </div>
                <h3 className="text-lg font-semibold text-[#4B2E2B] dark:text-[#DFD0B8] mb-3 group-hover:text-[#C08552] dark:group-hover:text-[#DFD0B8] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#8C5A3C] dark:text-[#948979] mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs text-[#8C5A3C] dark:text-[#948979]">
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
                  {post.reposts && (
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                      </svg>
                      {post.reposts}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 px-6 bg-[#FFF8F0] dark:bg-[#393E46] scroll-reveal">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-4">Blog & Articles</h2>
          <p className="text-[#8C5A3C] dark:text-[#948979] mb-12">Long-form thoughts and tutorials.</p>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="p-8 rounded-2xl bg-[#FFF8F0] dark:bg-[#222831] border border-[#C08552] dark:border-[#393E46] hover:border-[#8C5A3C] dark:hover:border-[#948979] hover:shadow-lg transition-all hover:scale-[1.02]">
                <div className="text-sm text-[#8C5A3C] dark:text-[#948979] mb-3">{post.date} · {post.readTime}</div>
                <h3 className="text-xl font-semibold text-[#4B2E2B] dark:text-[#DFD0B8] mb-3">{post.title}</h3>
                <p className="text-[#8C5A3C] dark:text-[#948979] mb-4">{post.excerpt}</p>
                <a
                  href={post.link}
                  className="inline-flex items-center gap-1 text-[#C08552] dark:text-[#DFD0B8] hover:underline text-sm font-medium"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-4">Executive Expertise</h2>
          <p className="text-[#8C5A3C] dark:text-[#948979] mb-12">Strategic leadership driving AI transformation at scale.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "AI Strategy & Vision",
                skills: ["Enterprise AI Roadmap", "AI Governance & Ethics", "Build vs. Buy Decisions", "AI Maturity Assessment", "Technology Innovation Strategy", "Competitive AI Positioning"]
              },
              {
                category: "Executive Leadership",
                skills: ["C-Suite Advisory", "Cross-Functional Alignment", "AI Organization Design", "Talent Acquisition & Culture", "Change Management", "Board Presentations"]
              },
              {
                category: "Business Impact",
                skills: ["ROI Optimization", "P&L Management", "Revenue Generation", "Cost Reduction Strategy", "Metrics & KPIs Definition", "Value Realization"]
              },
              {
                category: "AI Governance",
                skills: ["AI Policy & Compliance", "Risk Management", "Data Strategy", "Vendor Management", "Partnership Strategy", "AI Audit Frameworks"]
              },
              {
                category: "Technical Leadership",
                skills: ["Platform Architecture", "Technical Due Diligence", "R&D Management", "IP Strategy", "Patent Portfolio", "Research-to-Production"]
              },
              {
                category: "Industry Transformation",
                skills: ["Domain Expertise (Sports/Betting)", "Process Automation", "AI-First Product Design", "Customer Experience AI", "Operational Excellence", "Scaling AI Initiatives"]
              }
            ].map((group, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#FFF8F0] dark:bg-[#393E46] hover:scale-105 transition-transform">
                <h3 className="font-semibold text-[#4B2E2B] dark:text-[#DFD0B8] mb-4">{group.category}</h3>
                <div className="space-y-2">
                  {group.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C08552] dark:bg-[#DFD0B8]"></div>
                      <span className="text-sm text-[#8C5A3C] dark:text-[#948979]">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#FFF8F0] dark:bg-[#393E46] scroll-reveal">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4B2E2B] dark:text-[#DFD0B8] mb-4">Let's Connect</h2>
            <p className="text-lg text-[#8C5A3C] dark:text-[#948979]">
              Let's discuss how I can help transform your organization with AI.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div className="md:col-span-3">
              <form
                action="https://formspree.io/f/xgopwkok"
                method="POST"
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#4B2E2B] dark:text-[#DFD0B8] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] dark:bg-[#222831] border border-[#C08552] dark:border-[#393E46] text-[#4B2E2B] dark:text-[#DFD0B8] placeholder:text-[#8C5A3C]/50 dark:placeholder:text-[#948979]/50 focus:outline-none focus:ring-2 focus:ring-[#C08552] dark:focus:ring-[#948979] transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#4B2E2B] dark:text-[#DFD0B8] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] dark:bg-[#222831] border border-[#C08552] dark:border-[#393E46] text-[#4B2E2B] dark:text-[#DFD0B8] placeholder:text-[#8C5A3C]/50 dark:placeholder:text-[#948979]/50 focus:outline-none focus:ring-2 focus:ring-[#C08552] dark:focus:ring-[#948979] transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#4B2E2B] dark:text-[#DFD0B8] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-[#FFF8F0] dark:bg-[#222831] border border-[#C08552] dark:border-[#393E46] text-[#4B2E2B] dark:text-[#DFD0B8] placeholder:text-[#8C5A3C]/50 dark:placeholder:text-[#948979]/50 focus:outline-none focus:ring-2 focus:ring-[#C08552] dark:focus:ring-[#948979] transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#4B2E2B] dark:bg-[#DFD0B8] text-[#FFF8F0] dark:text-[#222831] rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 text-lg"
                >
                  Send message
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="md:col-span-2 flex flex-col justify-center space-y-4">
              <p className="text-sm font-medium text-[#8C5A3C] dark:text-[#948979] mb-4">Or connect via</p>
              {[
                { name: "LinkedIn", href: "https://linkedin.com/in/tharsansenthivel", icon: "in" },
                { name: "GitHub", href: "https://github.com/thad75", icon: "gh" }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-[#FFF8F0] dark:bg-[#222831] border border-[#C08552] dark:border-[#393E46] text-[#4B2E2B] dark:text-[#DFD0B8] hover:border-[#8C5A3C] dark:hover:border-[#948979] hover:shadow-lg transition-all hover:scale-105"
                >
                  <span className="text-lg font-semibold">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-[#C08552] dark:border-[#393E46]">
        <div className="max-w-5xl mx-auto text-center text-sm text-[#8C5A3C] dark:text-[#948979]">
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
      `}</style>

      <script dangerouslySetInnerHTML={{
        __html: `
          if (typeof window !== 'undefined') {
            // Inject scroll-reveal styles only on client
            const style = document.createElement('style');
            style.textContent = \`
              .scroll-reveal {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease-out, transform 0.6s ease-out;
              }

              .scroll-reveal.visible {
                opacity: 1;
                transform: translateY(0);
              }
            \`;
            document.head.appendChild(style);

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
                      content.style.borderColor = document.documentElement.classList.contains('dark') ? 'rgb(223, 208, 184)' : 'rgb(75, 46, 43)';
                      content.style.boxShadow = '0 25px 50px -12px rgb(192, 133, 82 / 0.25)';
                    } else {
                      content.style.opacity = '0.3';
                      content.style.transform = 'scale(0.95)';
                      content.style.borderColor = document.documentElement.classList.contains('dark') ? 'rgb(57, 62, 70)' : 'rgb(192, 133, 82)';
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
