
import {AiFillGithub} from "react-icons/ai"
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import {FiTwitter} from "react-icons/fi"
import img from "../assets/9c978675-4d55-4989-babe-99e58f3197d0.jpeg"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { Link } from "react-router-dom"
const Banner = () => {
  useEffect(()=>{
    AOS.init({duration: 1000})
  },[])
  return (
    <div  className="lg:px-56 px-10 lg:py-0 py-20  text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
        <div className="h-full lg:py-40 flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal uppercase">Welcome To <span className="text-fuchsia-600">My Website</span> </h1>
            <p data-aos="fade-left">Salam Mən Məmmədov Şükran,Bu Mənim ilk Portfolio Səhifəmdir.Mənim sosial media hesablarıma aşağıdaki İconlardan keçid edə bilərsiniz,özüm haqqında məlumatı biraz aşağıdaki yazıda görə bilərsiniz :)</p>
            <div className="flex mt-8 gap-2">
              <div className="flex items-center justify-center">
                <div className="flex space-x-2">
                <Link
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              to="https://github.com/Shookrun"
              target="_blank"
              rel="noopener noreferrer">
              <AiFillGithub className="text-[28px]" />
            </Link>
            
            <Link
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              to="https://github.com/Shookrun"
              target="_blank"
              rel="noopener noreferrer">
              <FaLinkedinIn className="text-[28px]" />
            </Link>
            
                      <Link
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              to="https://github.com/Shookrun"
              target="_blank"
              rel="noopener noreferrer">
              <FiTwitter className="text-[28px]" />
            </Link>
            <Link
              className="text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2"
              to="https://www.instagram.com/mshukrann/"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="text-[28px]" />
            </Link>
                </div>
              </div>
          
            </div>
        </div>
        <img data-aos="fade-up" src={img} width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt="" />
    </div>
  )
}

export default Banner