"use client";
import Link from "next/link";
import { Github, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1f1f1f] shadow-[0_-2px_12px_rgba(255,100,0,0.3)] text-gray-300 py-16 mt-0">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
        
        {/* Logo / About */}
        <div className="pr-10">
          <h2 className="text-3xl font-black tracking-wide text-[#f1f1f1] mb-4">
            <span className="text-[#f97316]">Bug</span>Beyond
          </h2>
          <p className="text-base leading-relaxed text-gray-400">
            Exploring bugs, building beyond — join us on the journey.  
            Stay connected and discover new insights every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-[#22c55e] mb-4">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li><Link href="/" className="hover:text-[#f97316] transition">Home</Link></li>
            <li><Link href="/blogs" className="hover:text-[#f97316] transition">Blogs</Link></li>
            <li><Link href="/projects" className="hover:text-[#f97316] transition">Projects</Link></li>
            <li><Link href="/snippets" className="hover:text-[#f97316] transition">Snippets</Link></li>
            <li><Link href="/about" className="hover:text-[#f97316] transition">About</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-[#22c55e] mb-4">Follow Us</h3>
          <p className="text-gray-400 mb-4">Stay connected on social platforms:</p>
          <div className="flex space-x-6">
            <Link href="https://github.com/sk-technology801?tab=repositories" target="_blank"><Github className="w-7 h-7 hover:text-[#f97316] transition" /></Link>
            <Link href="https://twitter.com" target="_blank"><Twitter className="w-7 h-7 hover:text-[#f97316] transition" /></Link>
            <Link href="https://www.facebook.com/profile.php?id=61579387437431" target="_blank"><Facebook className="w-7 h-7 hover:text-[#f97316] transition" /></Link>
            <Link href="https://www.linkedin.com/in/saad-babar-05080b338/?trk=opento_sprofile_topcard" target="_blank"><Linkedin className="w-7 h-7 hover:text-[#f97316] transition" /></Link>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-[#1f1f1f] pt-6 text-center text-gray-500 text-base">
        © {new Date().getFullYear()} BugBeyond. All rights reserved.
      </div>
    </footer>
  );
}
