
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactPage() {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Placeholder for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call or third-party service)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <main className="bg-[#0b0b0b] text-white min-h-screen py-20 px-6">
      {/* 📬 Contact Section */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-[#f97316] mb-12"
        >
          📬 Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] border border-[#222] p-8 rounded-xl"
          >
            <h3 className="text-2xl text-[#22c55e] font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-3 text-white focus:border-[#f97316] focus:outline-none"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-3 text-white focus:border-[#f97316] focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-3 text-white focus:border-[#f97316] focus:outline-none"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#1a1a1a] border border-[#333] rounded-lg p-3 text-white focus:border-[#f97316] focus:outline-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#f97316] text-black font-semibold py-3 rounded-lg hover:bg-[#22c55e] hover:text-white transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-[#111] border border-[#222] p-8 rounded-xl"
          >
            <h3 className="text-2xl text-[#22c55e] font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-[#f97316]">📧</span>
                <p className="text-gray-400">
                  Email:{' '}
                  <Link
                    href="mailto:contact@sk-technology801.com"
                    className="text-[#f97316] hover:text-[#22c55e] transition"
                  >
                    contact@sk-technology801.com
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#f97316]">📞</span>
                <p className="text-gray-400">
                  Phone:{' '}
                  <Link
                    href="tel:+1234567890"
                    className="text-[#f97316] hover:text-[#22c55e] transition"
                  >
                    +1 (234) 567-890
                  </Link>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#f97316]">🌐</span>
                <p className="text-gray-400">Follow me on:</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://github.com/sk-technology801"
                  target="_blank"
                  className="bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-lg text-sm text-[#f97316] hover:bg-[#f97316] hover:text-black transition"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  className="bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-lg text-sm text-[#f97316] hover:bg-[#f97316] hover:text-black transition"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  className="bg-[#1a1a1a] border border-[#333] px-4 py-2 rounded-lg text-sm text-[#f97316] hover:bg-[#f97316] hover:text-black transition"
                >
                  Twitter
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
