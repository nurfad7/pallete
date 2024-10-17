import { FC } from 'react'
import Image from 'next/image';
import Link from 'next/link';

interface AboutProps {
  setIsShow: () => void;
}

const About: FC<AboutProps> = ({setIsShow}) => {
  return (
    <div id="about" 
      className='w-full min-h-[150vh] md:min-h-[100vh] flex flex-col justify-center px-20'>
      <div className="hidden md:block relative z-10 md:text-9xl font-bold leading-[0.5] pt-20">ABOUT</div>
      <div className="relative z-20 flex flex-col md:flex-row w-full h-full md:h-80">
        <div className="flex flex-col w-full md:w-[20%] gap-5 md:gap-0">
          <div className="md:text-9xl font-bold flex"><span className="block md:hidden">ABOUT&nbsp;</span>US</div>
          <div className="text-sm text-left mb-5 md:mb-0">
            &quot;We believe in craftsmanship, creativity, and a commitment to delivering excellent service. 
            Every space we touch becomes a reflection of our dedication to detail.&quot;
          </div>
        </div>
        <div className="flex w-full md:w-[50%] h-auto md:h-full mb-2 md:mb-0">
          <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/iyc2zdszdsfvdb5oyxu9" 
            alt="photo by koncept" width={2560} height={1707}
            className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="flex flex-col w-full md:w-[30%] pl-5">
          <div className="flex w-full h-24 mb-5">
            <Image src="https://res.cloudinary.com/dhu6ayhdj/image/upload/v1729064880/pallete/mjfslnr0qub7ccv6qkzl.jpg" 
              alt="photo by dean fugate" width={3208} height={4010}
              className="w-full h-full object-cover object-top rounded-2xl" />
          </div>
          <div className="md:text-5xl font-medium mb-4">Our History</div>
          <div className="text-sm">
            &quot;Pallete was established with the goal of bringing color and creativity to everyday spaces. 
            Over the years, we&apos;ve expanded our services to cover everything from residential to commercial projects, 
            always focusing on quality and customer satisfaction.&quot;
          </div>
          <div onClick={setIsShow} className="font-bold text-sm cursor-pointer">Learn more</div>
        </div>
      </div>
      <div className="md:flex flex-col gap-2">
        <div className="md:text-5xl font-medium mb-4">Our Team</div>
        <div>
          &quot;Our team of experienced painters and color experts works closely with 
          clients to bring their ideas to life.&quot;
        </div>
        <Link href={"/#teams"} className="font-bold text-sm cursor-pointer">
          Meets our teams &darr;
        </Link>
      </div>
    </div>
  )
}

export default About;