export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-black/80 border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">TS</span>
          <div className="flex gap-6 text-sm">
            <a href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">About</a>
            <a href="#projects" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Projects</a>
            <a href="#skills" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Skills</a>
            <a href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Tharsan Senthivel<span className="text-zinc-400 dark:text-zinc-600">, PhD</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-4">
            Lead AI
          </p>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
            @ PMU · Paris, France
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 max-w-xl mx-auto mb-10">
            PhD in Artificial Intelligence. Driving strategic AI transformation in organizations.
            Combining scientific excellence with pragmatic ROI-oriented vision.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-3 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
            >
              View work
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
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
                Specializing in Large Language Models (LLMs), Computer Vision, and technological innovation,
                I bridge the gap between cutting-edge research and production-ready solutions.
              </p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">PhD</div>
                <div className="text-zinc-600 dark:text-zinc-400">Artificial Intelligence</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">500+</div>
                <div className="text-zinc-600 dark:text-zinc-400">Professional Connections</div>
              </div>
              <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
                <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">PMU</div>
                <div className="text-zinc-600 dark:text-zinc-400">Lead AI · Paris, France</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
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
              <div key={i} className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors">
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

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">Skills & Expertise</h2>
          <p className="text-zinc-600 dark:text-zinc-400 mb-12">Core competencies and technologies.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                category: "AI & Machine Learning",
                skills: ["Large Language Models (LLMs)", "Computer Vision", "Deep Learning", "NLP", "Transformers", "PyTorch", "TensorFlow"]
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
              <div key={i} className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50">
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
      <section id="contact" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/30">
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
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
              >
                <span>{social.icon}</span>
                <span>{social.name}</span>
              </a>
            ))}
          </div>

          <a
            href="mailto:contact@thad75.com"
            className="inline-block px-10 py-4 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium hover:opacity-90 transition-opacity text-lg"
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
    </div>
  );
}
