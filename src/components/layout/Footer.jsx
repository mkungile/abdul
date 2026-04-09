import React from 'react';
import { Github, Linkedin, Twitter, Mail, MapPin, Heart } from 'lucide-react';
import { Personal_info, SOCIAL_LINKS, NAV_LINKS } from '../../utilis/constant';
import { scrollToSection } from '../../hooks/useScrollSpy';
import FadeIn from '../animation/FadeIn';

const Footer = () => {
  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    mail: Mail,
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeIn delay={0}>
          <div className="grid md:grid-cols-3 gap-12 mb-12">

            {/* Brand / Info */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">
                {Personal_info.name || "My Portfolio"}
              </h2>
              <p className="text-white/60 mb-4">
                {Personal_info.bio || "Building modern web experiences and scalable systems."}
              </p>

              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm">{Personal_info.location}</span>
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-white/60 hover:text-primary transition"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social + Contact */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Connect
              </h3>

              <div className="flex gap-4 mb-4">
                {Object.entries(SOCIAL_LINKS).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-primary/50 transition"
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </a>
                  ) : null;
                })}
              </div>

              <a
                href={`mailto:${Personal_info.email}`}
                className="flex items-center gap-2 text-white/60 hover:text-primary transition"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{Personal_info.email}</span>
              </a>
            </div>

          </div>
        </FadeIn>

        {/* Bottom */}
        <FadeIn delay={100}>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} {Personal_info.name}. All rights reserved.
            </p>

            <p className="text-white/60 text-sm flex items-center gap-1">
             {Personal_info.name}
            </p>
          </div>
        </FadeIn>

      </div>
    </footer>
  );
};

export default Footer;