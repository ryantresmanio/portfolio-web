import React from 'react';
import Peso from './assets/peso.png';
import Peso2 from './assets/peso2.jpg';
import Peso3 from './assets/peso3.jpg';
import Peso4 from './assets/peso4.jpg';




const Projects = () => {
  return (
    <section id='projects' className='bg-gray-900 min-h-screen flex flex-col gap-10 p-8 py-24 justify-center items-center'>


      <div className='mt-4'>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 mx-auto flex-warp'>
          <img
            src={Peso}
            alt='Peso project'
            className='md:h-[20rem] h-auto w-auto transition-transform duration-200 hover:scale-110 cursor-pointer rounded-2xl'
          />

          <div className='m-auto p-4'>
            <a
              href='https://peso-user.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-cyan text-18 mx-auto hover:underline'
            >
              THESIS: Developing a Responsive Website for Public Employment Services Office of North Caloocan City
            </a>

            <p className='text-offwhite text-16 mt-4 text-justify'>
              Developed a responsive website for the Public Employment Services Office of North Caloocan City, aimed at improving access to job postings, application forms, and employment assistance. The site is user-friendly, mobile-ready, and designed to streamline services for both job seekers and employers.
            </p>

            <p className='text-pink text-sm mt-4'>React, JavaScript, Tailwind CSS, Firebase</p>
          </div>
        </div>
      </div>

      <p className='text-cyan text-2xl pt-4 text-center'>Meet the Team</p>
      <div className='flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center items-center gap-6 px-4'>
        <img src={Peso2} alt='' className='h-[13rem] max-w-full object-cover rounded-xl' />
        <img src={Peso3} alt='' className='h-[13rem] max-w-full object-cover rounded-xl' />
        <img src={Peso4} alt='' className='h-[13rem] max-w-full object-cover rounded-xl' />
      </div>


    </section>
  );
};

export default Projects;
