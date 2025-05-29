import React from 'react'
import {Mail, Linkedin, Github, Facebook} from 'lucide-react'; 
import tres from './assets/hero2.png'
const Contact = () => {
  return (
<div
  className="relative h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 text-center overflow-x-hidden"
  id="contacts"
>
  <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
  <p className="text-lg mb-6 max-w-xl">
    Let's connect! Feel free to reach out through any of the platforms below.
  </p>

  <div className="flex flex-row justify-center items-center gap-4 sm:gap-6">
    
    <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=im.rtresmanio@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:underline hover:text-white cursor-pointer text-cyan-400 text-lg"
    >
    <Mail />
    </a>

    <a
      href="https://www.linkedin.com/in/ryan-tresmanio-55795b289/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-white cursor-pointer text-cyan-400 text-lg"
    >
      <Linkedin />
    </a>

    <a
      href="https://github.com/ryantresmanio"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-white cursor-pointer text-cyan-400 text-lg"
    >
      <Github />
    </a>

    <a
      href="https://web.facebook.com/Bieburrrrr.94/"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline hover:text-white cursor-pointer text-cyan-400 text-lg"
    >
     <Facebook />
    </a>
<button
  onClick={() =>
    window.open(
      "https://drive.google.com/file/d/1TxA2SZfhq8aGsGhDVRf2I_CUCr72IOTD/view?usp=drive_link",
      "_blank"
    )
  }
  className="bg-gradient-to-b from-cyan-300 to-violet-300 text-gray-800 font-medium px-5 py-2 rounded-lg shadow-md hover:from-cyan-500 hover:to-white hover:text-black transition duration-300 cursor-pointer"
>
  View My Resume
</button>
  </div>
<div className="absolute bottom-0 left-0 m-2">
  <img src={tres} alt="tres" className="md:w-[300px] w-[200px]" />
</div>

</div>


  )
}

export default Contact