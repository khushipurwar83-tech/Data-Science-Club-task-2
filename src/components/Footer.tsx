"use client";

import Link from "next/link";
import { Terminal, MessageSquare, ExternalLink, Camera, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-dark pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-heading font-bold animated-gradient-text">
              VIBE HACK 2026
            </Link>
            <p className="text-text-secondary text-sm leading-relaxed">
              Empowering the next generation of innovators to build solutions that matter.
              Join us for 48 hours of pure creation.
            </p>
            <div className="flex space-x-4">
              {[Terminal, MessageSquare, ExternalLink, Camera].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#problems" className="hover:text-primary transition-colors">Problem Statements</Link></li>
              <li><Link href="#schedule" className="hover:text-primary transition-colors">Event Schedule</Link></li>
              <li><Link href="#prizes" className="hover:text-primary transition-colors">Prizes & Rewards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li><a href="#" className="hover:text-primary transition-colors">Code of Conduct</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Brand Assets</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Contact Us</h4>
            <div className="space-y-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary" />
                <span>hello@vibehack.com</span>
              </div>
              <p>
                Data Science Club<br />
                Tech University Campus<br />
                Innovation Hub, Suite 404
              </p>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">
            © 2026 Vibe Hack. All rights reserved. Made with ❤️ by Data Science Club.
          </p>
          <div className="flex space-x-6 text-xs text-text-secondary uppercase tracking-widest font-bold">
            <a href="#" className="hover:text-white transition-colors">Sponsorships</a>
            <a href="#" className="hover:text-white transition-colors">Volunteer</a>
            <a href="#" className="hover:text-white transition-colors">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
