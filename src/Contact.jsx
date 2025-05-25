import React from 'react'
import {Mail, Linkedin, Github, Facebook} from 'lucide-react'; 

const Contact = () => {
  return (
<div
  className="h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-6 text-center"
  id="contacts"
>
  <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
  <p className="text-lg mb-6 max-w-xl">
    Let's connect! Feel free to reach out through any of the platforms below.
  </p>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
    
    <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=rayantres94@gmail.com"
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
      onClick={() => window.open("https://www.canva.com/design/DAGnrp_QH_g/FZLnld_3MwFX2julB0T-ng/edit/", "_blank")}
      className="hover:underline hover:text-white cursor-pointer text-cyan-400 text-lg"
    >
      View My Resume
    </button>
  </div>
</div>


  )
}

export default Contact