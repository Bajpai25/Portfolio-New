import React from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const Contact = () => {
  return (
    <div name='contact'>
    <div  className='w-full h-auto bg-[#0a192f] flex justify-center items-center p-4  md:pt-[750px] pt-[60px]' >
        <form method='POST' action="https://getform.io/f/5de89f90-00d7-4f7d-be67-4b23c221f0fe" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - bajpai.shashwat.332@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
    <div className='md:hidden w-full h-full bg-[#0a192f] pb-20'>
        <ul className='flex flex-row flex-wrap gap-4 justify-center items-center'>
          <li className=' bg-blue-600'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/shashwat-bajpai-73a916234'
            >
               <FaLinkedin size={60} />
            </a>
          </li>
          <li className=' bg-[#333333]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://github.com/Bajpai25'
            >
               <FaGithub size={60} />
            </a>
          </li>
          <li className=' bg-[#6fc2b0]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='bajpai.shashwat.332@gmail.com'
            >
               <HiOutlineMail size={60} />
            </a>
          </li>
          <li className=' bg-[#565f69]'>
            <a
              className='flex justify-between items-center w-full text-gray-300'
              href='https://drive.google.com/file/d/1kJQMfRj5KS7fGY0ZO5DAKRps86jpWRLN/view?usp=sharing'
            >
               <BsFillPersonLinesFill size={60} />
            </a>
          </li>
        </ul>
        </div>
    </div>
  )
}

export default Contact