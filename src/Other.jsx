import React from 'react'
import Library from './assets/library.png';
import Ok from './assets/itssok.png';
import Notes from './assets/notes.png';
import tableau from './assets/tab2.png'
import tableau2 from './assets/excel.png'
import powerbi from './assets/power.png'

const cardClass = 'flex md:flex-row flex-col gap-16 justify-center items-center m-8';

const card = 'flex flex-col space-y-2 bg-radial-[at_25%_25%] from-[#070F2B] to-[#0B2447] shadow shadow-black rounded-2xl p-4 hover:bg-white transition-transform duration-200 hover:scale-105 cursor-pointer flex-wrap';

const Other = () => {
  return (
    <section className='lg:px-36 pb-36 pt-1 bg-navy justify-center items-center '>

      
      <div className='flex justify-center items-center pt-24'>
        <p className='text-cyan text-2xl'>Other Projects</p>
      </div>


        
        <div className={cardClass}>

          <div className={card}>
            
            <img src={Library} alt='Peso project' className='' />
            <a
              href='https://vercel.com/ryantresmanios-projects/library-vercel'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white font-bold text-12 hover:underline hover:text-cyan'
            >
              Library Management System
            </a>

            <p className='text-offwhite text-sm text-justify '>
              Developed a responsive website for the Public Employment Services Office of North Caloocan City, aimed at improving access to job postings, application forms, and employment assistance. The site is user-friendly, mobile-ready, and designed to streamline services for both job seekers and employers.
            </p>

            <p className='text-pink text-sm '>React, Tailwind CSS, Supabase</p>
          </div>

          <div className={card}>
            
            <img src={Ok} alt='Peso project' className='' />
            <a
              href='https://project-it-s-sooo-k.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white font-bold text-12 hover:underline hover:text-cyan'
            >
              It's So K!: A K-Pop Online Shop
            </a>

            <p className='text-offwhite text-sm text-justify '>
              Created It's So K!, a K-pop themed website as a second-year college project by following a YouTube tutorial. The site features artist profiles, news updates, and fan content. While based on guided steps, the project helped build foundational skills in web development and responsive design.
            </p>

            <p className='text-pink text-sm'>React, JavaScript, CSS</p>
          </div>
          

          <div className={card}>
            
            <img src={Notes} alt='Peso project' className='' />
            <a
              href='https://notes-app-full-plum.vercel.app/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white text-12 hover:underline hover:text-cyan'
            >
              Notes Application
            </a>

            <p className='text-[#eeeeee] text-sm text-justify '>
              Created a simple Notes App as a personal project after learning the basics of RESTful APIs through a console-based approach. This was my first try at building a full-stack app on my own, allowing basic note creation, retrieval, and deletion. It served as practice for connecting frontend and backend.
            </p>
            

            <p className='text-pink text-sm'>Spring Boot, React, CSS, Docker, PostgreSQL</p>
          </div>
        </div>


        <div className='mt-12'>
        <div className={cardClass}>
          <div className={card}>
           
            <img src={tableau} alt="" />
             <a
              href='https://public.tableau.com/app/profile/ryan.tresmanio/viz/CoffeeShopDashboard_17396316365050/Dashboard1'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white font-bold text-12 hover:underline hover:text-cyan'
            >
              E-Commerce Sales Dashboard
            </a>
            <p className='text-offwhite text-sm text-justify '>
              Created a simple Tableau dashboard as a personal project after learning the basics of data analysis. I cleaned the dataset in Excel then imported it into Tableau. It served as practice for turning cleaned data into visual insights and improving my data storytelling skills.
            </p>
            <p className='text-pink text-sm'>Excel, Tableau Public</p>
          </div>
          
          <div className={card}>
            
            <img src={tableau2} alt="" />
            <a
              href='https://github.com/ryantresmanio/Portfiolio-Project-Excel-Dashboard'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white font-bold text-12 hover:underline hover:text-cyan'
            >
              Coffee Shop Dashboard
            </a>
            <p className='text-offwhite text-sm text-justify '>
              Created a simple Coffee Shop Dashboard as a personal project while practicing data analysis. I cleaned the data in Excel and used pivot tables to explore trends. This was part of my practice in turning raw data into clear insights through analysis and basic  visualization.
            </p>
            
            <p className='text-pink text-sm'>Excel</p>
          </div>

          <div className={card}>
            
            <img src={powerbi} alt="" />
            <a
              href='https://github.com/ryantresmanio/data-professional-survey-power-bi'
              target='_blank'
              rel='noopener noreferrer'
              className='text-white font-bold text-12 hover:underline hover:text-cyan'
            >
              Data Professional Survey
            </a>
            <p className='text-offwhite text-sm text-justify'>
              Created a simple dashboard in Power BI as a personal project using data from a professional survey dataset. I cleaned the data in Excel and used Power BI to measure key responses and trends, enabling me to show helpful discoveries from the results and improve storytelling.
            </p>
            
            <p className='text-pink text-sm'>Excel, Power BI</p>
          </div>
        </div>

        </div>

    </section>
  )
}

export default Other