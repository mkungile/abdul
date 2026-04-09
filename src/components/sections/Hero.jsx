import React from "react";
import { ChevronDown, Star } from "lucide-react";
import {
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";

import { Personal_info, STATS } from "../../utilis/constant";
import { scrollToSection } from "../../hooks/useScrollSpy";
import FadeIn from "../animation/FadeIn";
// import RadialGradientBackground from "../background/RadialGradientBackground";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* <RadialGradientBackground variants="hero" /> */}

      <section className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Left column */}
        <div className="text-left">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2.5 px-4 py-2 mb-8 bg-gradient-to-r from-primary/10 via-primary/15 to-primary/20 border border-primary/20 rounded-full">
              <Star className="w-4 h-4 text-white fill-white" />
              <span className="text-xs text-white tracking-[1.2px]">
                {Personal_info.email} | Based in {Personal_info.location}
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white mb-6 leading-tight">
              Full stack, Mobile Application Developer (React Native) 
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg text-white/70 max-w-[550px] mb-8">
              Building modern, scalable Web & Mobile applications with React and
              React Native technologies.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center mb-12 group"
            >
              <div className="relative z-10 bg-white text-[#212121] rounded-[17px] px-[26px] py-[13px] text-base font-medium border border-white transition-transform group-hover:scale-105">
                Get in Touch
              </div>
            </button>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 max-w-full">
              {STATS.map((stat, index) => (
                <div key={index} className="text-white">
                  <div className="text-2xl font-semibold">
                    {stat.value}
                  </div>
                  <p className="text-sm text-white/60">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right column (optional tech icons example) */}

        <FadeIn delay={200}>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl aspect-4/4 max-w-[500px] ml-auto group">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-[-2px] bg-liner-to-r from-primary/20 via-primary/10 to-primary animate-spin-slow rounded-2xl">

                </div>
              

              </div>
              {/* Image container*/}
              <div className="relative rounded-2xl overflow-hidden m-[1px] h-[calc[100%-2px]]">
                <img 
                src="/images/projects/abdul.jpg"
                alt="Developer image"
                className="w-full h-full object-cover"
                />

              </div>

              

            </div>
             

          </div>
      
          {/* Technology logos */}
          
              {/* <div className="absolute bottom-10 right-65 z-10">
                
                <FadeIn delay={500}>
                  <div className="flex items-center gap-4 bg-black/40 backdrop-blur-sn border border-white/10 rounded-full px-6 py-6">
                    <div className="w-6 h-6 flex items-center justify-center hover: scale-110 transition-transform duration-300">
                      <SiReact className="w-full h-full text-white">

                      </SiReact>

                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover: scale-110 transition-transform duration-300">
                      <SiTailwindcss className="w-full h-full text-white"/>

                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover: scale-110 transition-transform duration-300">
                      <SiNodedotjs className="w-full h-full text-white" />

                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover: scale-110 transition-transform duration-300">
                      <SiMongodb className="w-full h-full text-white"/>

                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover: scale-110 transition-transform duration-300">
                      <SiExpress className="w-full h-full text-white"/>

                    </div>
                    <div className="w-6 h-6 flex items-center justify-center hover: scale-110 transition-transform duration-300">
                      <SiMysql className="w-full h-full text-white"/>

                    </div>

                  </div>

                </FadeIn>

              </div> */}

        </FadeIn>


        {/* <div className="hidden lg:flex items-center justify-center gap-6 text-white/80">
          <SiReact size={36} />
          <SiTailwindcss size={36} />
          <SiNodedotjs size={36} />
          <SiMongodb size={36} />
          <SiExpress size={36} />
          <SiMysql size={36} />
        </div> */}
        
         {/* Scroll Indicator */}

         <button 
         onClick={() => scrollToSection('about')}

         className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
         >
          <ChevronDown className="w-8 h-8 text-white"/>

         </button>
       
        
      </section>
       
    </div>
  );
};

export default Hero;
