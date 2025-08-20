'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Define the projects array
const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack application with payment integration and real-time inventory",
    tech: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    image: "/images/ecomerace.jpg.jpeg",
    color: "from-purple-500 to-pink-500",
    liveUrl: "https://e-com-wgmy.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/e-com",
    results: [
      "⚡ Handles 5,000+ daily transactions",
      "📈 Increased sales conversion by 35%",
      "🛒 Reduced cart abandonment by 20%",
    ],
  },
  {
    title: "Blogs",
    description: "Insights for modern businesses",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/blog site.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://bugs-brown.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/blog-site",
    results: [
      "📝 Published 200+ blog posts",
      "👥 Attracted 10k+ monthly readers",
      "🚀 Optimized SEO for 70% organic traffic",
    ],
  },
  {
    title: "Car-hub",
    description: "Dealing of cars",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/car-hub.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://hub-orpin.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/hub",
    results: [
      "🚗 Showcased 500+ car listings",
      "📊 Improved user engagement by 40%",
      "🔍 Enhanced search functionality",
    ],
  },
  {
    title: "Bitcoin",
    description: "Trading generate extreme money",
    tech: ["React", "Python", "TensorFlow", "D3.js"],
    image: "/images/bitcoin.jpg.jpeg",
    color: "from-blue-500 to-cyan-500",
    liveUrl: "https://own-trading.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/own-trading",
    results: [
      "💸 Processed $1M+ in trades",
      "📈 Real-time market data visualization",
      "🤖 AI-driven trading insights",
    ],
  },
  {
    title: "Govt-Agency",
    description: "Platform for government use",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/govt-agency.jpg.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://car-zone-fcvj.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/state-agency",
    results: [
      "🏛️ Streamlined agency operations",
      "🔒 Secure data handling",
      "📋 Automated reporting system",
    ],
  },
  {
    title: "Business-Insight",
    description: "Fresh perspectives for growth",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/bussiness-insight.jpg.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://site-for-bussiness.vercel.app/analytics",
    codeUrl: "https://github.com/sk-technology801/site-for-bussiness",
    results: [
      "📊 Delivered actionable insights",
      "🚀 Boosted client growth by 25%",
      "📈 Real-time analytics dashboard",
    ],
  },
  {
    title: "Tourism",
    description: "Strategic Growth Tips",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/travel.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://events-lzch.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/events",
    results: [
      "🌍 Promoted 100+ destinations",
      "📸 Enhanced visual storytelling",
      "🗺️ Improved user navigation",
    ],
  },
  {
    title: "Site-code",
    description: "Strategic Growth Tips",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/office site.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://our-office-tau.vercel.app/Team",
    codeUrl: "https://github.com/sk-technology801/our-office",
    results: [
      "🏢 Streamlined team collaboration",
      "📈 Improved project tracking",
      "⚡ Fast and responsive UI",
    ],
  },
  {
    title: "Tech-Program",
    description: "Strategic Growth Tips",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/software house.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://office-wmem.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/office",
    results: [
      "💻 Managed 50+ tech projects",
      "🤝 Enhanced client communication",
      "🚀 Optimized development workflow",
    ],
  },
  {
    title: "Dashboard-Business",
    description: "Fresh perspectives for growth",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/dashbord bussiness.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://site-for-bussiness.vercel.app/analytics",
    codeUrl: "https://github.com/sk-technology801/site-for-bussiness",
    results: [
      "📊 Real-time business metrics",
      "📈 Improved decision-making",
      "🔍 Customizable dashboards",
    ],
  },
  {
    title: "Adsen",
    description: "Submit your site for approval",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/adds.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://add-sk-technology801s-projects.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/add",
    results: [
      "📢 Streamlined ad approvals",
      "🔒 Secure submission process",
      "🚀 Fast review turnaround",
    ],
  },
  {
    title: "Automotives",
    description: "Dealing of cars",
    tech: ["React Native", "Node.js", "MongoDB", "JWT"],
    image: "/images/auto-dealer.jpg.jpeg",
    color: "from-green-500 to-emerald-500",
    liveUrl: "https://car-zone-fcvj.vercel.app/",
    codeUrl: "https://github.com/sk-technology801/car-zone",
    results: [
      "🚗 Managed 1,000+ car deals",
      "📊 Enhanced sales tracking",
      "🛠️ Improved user experience",
    ],
  },
];

// Select the first three projects for the Featured Projects section
const featuredProjects = projects.slice(0, 3).map((proj) => ({
  title: proj.title,
  desc: proj.description,
  link: proj.liveUrl,
}));

const ongoingProjects = [
  { title: 'StockMaster POS', desc: 'Real-time inventory and sales tracking.' },
  { title: 'Hospital Dashboard', desc: 'Admin panel to manage patient appointments.' },
  { title: 'Blog CMS System', desc: 'Write, edit, and publish blogs from UI.' },
];

const completedProjects = [
  { title: 'E-Commerce Store', desc: 'Modern product shopping with cart and checkout.' },
  { title: 'Fitness Tracker', desc: 'Monitor health, food, and workouts.' },
  { title: 'Chat App', desc: 'Real-time messaging system using socket.io.' },
];

const categories = ['AI Projects', 'Web Apps', 'Dashboards', 'E-Commerce', 'Portfolio Sites', 'CMS Platforms'];
const technologies = ['Next.js', 'Tailwind CSS', 'MongoDB', 'Framer Motion', 'Node.js', 'Express.js', 'JWT'];

export default function ProjectsPage() {
  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen py-20 px-6">
      {/* 🚀 Featured Projects */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-[#f97316] mb-12"
        >
          🚀 Featured Projects
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#111] border border-[#222] p-6 rounded-xl hover:shadow-[0_0_20px_#f97316aa] transition"
            >
              <h3 className="text-xl text-[#22c55e] font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-400">{proj.desc}</p>
              <Link
                href={proj.link}
                target="_blank"
                className="inline-block mt-4 text-sm text-[#f97316] underline"
              >
                View Project →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 📂 Categories */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#22c55e] mb-8 text-center"
        >
          📂 Project Categories
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat, i) => (
            <span
              key={i}
              className="bg-[#111] border border-[#333] px-4 py-2 rounded-full text-sm text-[#f97316] hover:bg-[#f97316] hover:text-black transition"
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* 🛠 Technologies */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#22c55e] mb-8 text-center"
        >
          🛠 Technologies Used
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-[#1a1a1a] border border-[#444] px-4 py-2 rounded-lg text-sm hover:border-[#22c55e] hover:text-[#22c55e] transition"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* 📌 Ongoing Projects */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#f97316] mb-10 text-center"
        >
          📌 Ongoing Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {ongoingProjects.map((proj, i) => (
            <div key={i} className="bg-[#111] border border-[#333] p-6 rounded-xl">
              <h4 className="text-xl text-[#22c55e] font-semibold mb-2">{proj.title}</h4>
              <p className="text-gray-400">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Completed Projects */}
      <section className="max-w-6xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-[#22c55e] mb-10 text-center"
        >
          ✅ Completed Projects
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {completedProjects.map((proj, i) => (
            <div key={i} className="bg-[#111] border border-[#333] p-6 rounded-xl">
              <h4 className="text-xl text-[#f97316] font-semibold mb-2">{proj.title}</h4>
              <p className="text-gray-400">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}