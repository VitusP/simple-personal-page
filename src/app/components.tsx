"use client";

import React, { useEffect, useState } from 'react';
import { GitHubIcon, LinkedInIcon, ResumeIcon } from './icons';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

export const SocialLinks: React.FC = () => (
  <div className="flex gap-6 mt-4">
    <a
      href="https://github.com/VitusP"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="GitHub"
      title="GitHub"
      className="hover:opacity-70 transition"
    >
      <GitHubIcon className="text-foreground" />
    </a>
    <a
      href="https://www.linkedin.com/in/vitus-putra/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="LinkedIn"
      title="LinkedIn"
      className="hover:opacity-70 transition"
    >
      <LinkedInIcon className="text-foreground" />
    </a>
    <a
      href="https://vputra-latest-resume.s3.us-east-1.amazonaws.com/Vitus_Putra_Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Resume"
      title="Resume"
      className="hover:opacity-70 transition"
    >
      <ResumeIcon className="text-foreground" />
    </a>
  </div>
);
