"use client"
import { 
  FC, 
  useContext, 
  useEffect, 
  useRef, 
} from 'react';
import Image from "next/image";
import heroPhoto from "@/images/by-alexander-grey.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MenuContext from '@/context/MenuContext';

gsap.registerPlugin(ScrollTrigger);

const Hero: FC = () => {
  const target1 = useRef<HTMLDivElement | null>(null);
  const target2 = useRef<HTMLDivElement | null>(null);
  const target3 = useRef<HTMLDivElement | null>(null);
  const container1 = useRef<HTMLDivElement | null>(null);
  const container2 = useRef<HTMLDivElement | null>(null);
  const container3 = useRef<HTMLDivElement | null>(null);
  const container4 = useRef<HTMLDivElement | null>(null);
  const useMenu = useContext(MenuContext);

  useEffect(() => {
    const trigger1 = ScrollTrigger.create({
      trigger: container1.current,
      scrub: 1,
      start: "top top",
      end: "bottom bottom",
      markers: false,
      onEnter: () => useMenu?.setCurrentMenu(1),
      onEnterBack: () => useMenu?.setCurrentMenu(1),
    });

    const trigger2 = ScrollTrigger.create({
      trigger: container2.current,
      scrub: 1,
      start: "top 2%",
      end: "bottom bottom",
      markers: false,
      onEnter: () => useMenu?.setCurrentMenu(2),
      onEnterBack: () => useMenu?.setCurrentMenu(2),
    });

    const trigger3 = ScrollTrigger.create({
      trigger: container3.current,
      scrub: 1,
      start: "top 2%",
      end: "bottom bottom",
      markers: false,
      onEnter: () => useMenu?.setCurrentMenu(3),
      onEnterBack: () => useMenu?.setCurrentMenu(3),
    });

    const animation1 = gsap.fromTo(target1.current, {
        y: '-20%',
        ease: 'power1.in',
      },
      {
      y: '-70%',
      ease: 'power1.out',
      scrollTrigger: {
        trigger: container1.current,
        scrub: 2,
        start: "top top",
        end: "bottom 70%",
        markers: false,
      },
    });

    const animation2 = gsap.to(target2.current, {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: container4.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
      },
    });

    const animation3 = gsap.to(target3.current, {
      opacity: 0,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: container4.current,
        scrub: 1,
        start: "top bottom",
        end: "bottom bottom",
        markers: false,
      },
    });

    return () => {
      trigger1.kill();
      trigger2.kill();
      trigger3.kill();
      animation1.kill();
      animation2.kill();
      animation3.kill();
    };
  }, []);

  return (
    <>
      <div className="fixed w-full h-[100vh] z-0 overflow-hidden">
        <Image 
          src={heroPhoto} 
          alt="hero photo by Alexander Grey" 
          width={5616} 
          height={3744} 
          className="w-full h-full object-cover"/>
        <div ref={target3} 
          className="absolute top-0 flex flex-col gap-60 w-full h-[100vh] justify-center items-center
            bg-black bg-opacity-30">
          <div className="flex flex-col w-screen h-12 md:h-[4.2rem] overflow-hidden 
              text-5xl md:text-7xl text-center">
            <div ref={target1} className="text-center grid gap-1 pt-8">
              <div className="uppercase text-nowrap">EXPERT COLOR SOLUTIONS</div>
              <div className="uppercase text-nowrap pt-1">FOR EVERY SPACE</div>
            </div>
          </div>
          <div className="w-1/2 text-lg md:text-2xl text-center rounded-xl">
            At Pallete, we specialize in transforming spaces with our wide range of high-quality paints. 
            From bold colors to subtle hues, we bring your vision to life with precision and creativity.
          </div>
        </div>
        <div ref={target2} className="absolute bg-black bg-opacity-0 top-0 w-full h-[100vh]"></div>
      </div>
      <div className="relative flex flex-col">
        <div ref={container1} className=" w-full h-[100vh] flex flex-col justify-center"></div>
        <div ref={container2} className="w-full h-auto flex flex-col">
          <div ref={container4} className="w-full min-h-[100vh] flex">
            {/* ABOUT */}
          </div>
          <div className="w-full min-h-[100vh] flex">
          {/* TEAM */}
          </div>
        </div>
        <div ref={container3} className="w-full min-h-[100vh] flex bg-product">
          {/* Products */}
        </div>
        <div className="w-full min-h-[100vh] flex bg-product">
          {/* Testimonials */}
        </div>
      </div>
    </>
  );
};

export default Hero;