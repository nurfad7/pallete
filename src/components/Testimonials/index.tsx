import { FC, useRef, useEffect } from 'react'
import Icon from '@/components/Icon';
import { gsap } from 'gsap';

const Testimonials: FC = () => {
  const scroll1 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animation = gsap.to(scroll1.current, 
      {
        x: '-100%',
        duration: 60,
        ease: "linear",
        repeat: -1,
        onRepeat: () => {
          gsap.set(scroll1.current, { x: 0 });
        },
      });

    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div className="w-full min-h-[100vh] flex flex-col gap-5 pb-5 bg-product">
      <div className="relative w-full h-40 flex mb-1 md:mb-10">
        <div className="absolute top-0 left-1/2 translate-x-[-50%] w-[80%] h-32 border-b border-b-black"></div>
        <div className="absolute top-[6.6rem] text-3xl font-bold left-1/2 translate-x-[-50%] bg-product text-black">
          Testimonials
        </div>
      </div>
      <div className="relative w-full flex gap-20 overflow-y-hidden overflow-x-auto hide-scrollbar text-center">
        <div ref={scroll1} className="flex gap-10 min-w-max animate-gallery pt-5 md:pt-20">
          <div className="w-screen h-[50vh] flex flex-col px-10 md:px-24 gap-10">
            <div className="flex justify-center items-center">
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
            </div>
            <div className="w-full text-sm md:text-xl text-black">
              &quot;We&apos;ve been using Pallete&apos;s exterior paints for years, 
              and their durability and weather resistance are top-notch. 
              Our clients are always impressed with the results, 
              and the custom color solutions make it easy to meet even the most specific requests.&quot;
            </div>
            <div className="textsm md:text-xl text-black font-medium">David Brooks - General Contractor, Brooks Construction</div>
          </div>
          <div className="w-screen h-[50vh] flex flex-col px-10 md:px-24 gap-10">
            <div className="flex justify-center items-center">
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
            </div>
            <div className="w-full text-sm md:text-xl text-black text-wrap">
              &quot;Pallete&apos;s premium paints have transformed my design projects. 
              The color customization feature is a game-changer, and my clients love the personalized touch. 
               quality of their paints is unmatched, 
               and their eco-friendly options fit perfectly with my sustainable design philosophy.&quot;
              </div>
            <div className="text-sm md:text-xl text-black font-medium">Sarah Mitchell - Interior Designer, Mitchell & Co. Designs</div>
          </div>
          <div className="w-screen h-[50vh] flex flex-col px-10 md:px-24 gap-10">
            <div className="flex justify-center items-center">
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
            </div>
            <div className="w-full text-sm md:text-xl text-black">
              &quot;Pallete&apos;s granite customization services added a luxurious touch to our high-end properties. 
              The granite slabs are not only beautiful but also highly durable. 
              Their team was incredibly professional throughout the process.&quot;
            </div>
            <div className="text-sm md:text-xl text-black font-medium">Emily Adams - CEO, Adams Real Estate Group</div>
          </div>
          <div className="w-screen h-[50vh] flex flex-col px-10 md:px-24 gap-10">
            <div className="flex justify-center items-center">
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
            </div>
            <div className="w-full text-sm md:text-xl text-black">
              &quot;We used Pallete&apos;s custom ceramic tiles for our restaurant&apos;s kitchen and bathroom renovation. 
              The attention to detail and variety of textures made our space stand out. 
              Our customers always compliment the design!&quot;
            </div>
            <div className="text-sm md:text-xl text-black font-medium">Liam Turner - Restaurant Owner, Urban Eats Bistro</div>
          </div>
          <div className="w-screen h-[50vh] flex flex-col px-10 md:px-24 gap-10">
            <div className="flex justify-center items-center">
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
              <Icon icon="star" />
            </div>
            <div className="w-full text-sm md:text-xl text-black">
              &quot;I wanted to give my living room a unique look, and Pallete&apos;s specialty finishes did just that. 
              Their color consultation service helped me choose the perfect shades, 
              and I couldn&apos;t be happier with the outcome!&quot;
            </div>
            <div className="text-sm md:text-xl text-black font-medium">Rachel Cooper - Homeowner</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials;