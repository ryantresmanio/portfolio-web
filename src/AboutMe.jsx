import React, { useState, useEffect } from 'react';
import hero2 from './assets/hero.jpg';
import { useInView } from 'react-intersection-observer';

const AboutMe = () => {

  return (
    <section
      id="about"
      className='md:h-screen w-screen mx-auto  
        flex justify-center items-center h-auto
      bg-navy md:px-12 p-12 pb-20'
    >
      <div className="flex flex-col rounded-2xl overflow-hidden md:flex-row max-w-[900px] mx-auto md:h-[300px] h-full border-1 border-gray-600 p-4 shadow-gray-500 shadow-md">
        <img
          src={hero2}
          alt="About me"
          className="h-[250px] w-full object-cover md:w-[300px] md:h-full rounded-2xl"
        />
        <div className="flex-1 flex items-center ">
          <p className="p-4 text-justify text-gray-300">
            Hi, I'm Ryan — but most people call me Tres. I'm an aspiring developer with a background in Java and Spring Boot. I recently finished my degree in Computer Science and have been continuing to learn and explore different areas of the tech industry. I enjoy working on simple, user-friendly projects and improving little by little.
            <br /><br />
            Outside of coding, I love singing, recording covers, and browsing TikTok in my free time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
