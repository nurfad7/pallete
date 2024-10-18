"use client"
import { 
  FC, 
  useEffect, 
  useContext, 
  useState, 
  useRef, 
} from 'react'
import Image from "next/image"
import Link from 'next/link'
import Icon from '@/components/Icon'
import { cn } from '@/utils/merge'
import MenuContext from '@/context/MenuContext'
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';

const OverlayMenu = dynamic(() => import("@/components/OverlayMenu"));

const Navbar: FC = () => {
  const useMenu = useContext(MenuContext);
  const [burgerShow, setBurgerShow] = useState<boolean>(false);
  const overlayDiv = useRef<HTMLDivElement | null>(null);

  const handleButton = (menuCode: number) => {
    useMenu?.setCurrentMenu(menuCode)
  }

  const handleBurger = () => {
    setBurgerShow(show => !show)
  }

  useEffect(() => {
    if(burgerShow) {
      gsap.fromTo(overlayDiv.current, { height: "0", opacity: "0" },
        {
        height: "100%",
        opacity: "100%",
        duration: 1,
        ease: "power1.inOut"
      });
    } else {
      gsap.fromTo(overlayDiv.current, { height: "100%", opacity: "100%" },
        {
        height: "0",
        opacity: "0",
        duration: 1,
        ease: "power1.inOut"
      });
    }
  }, [burgerShow]);

  useEffect(() => {
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.substring(1));
      if (element) {
        const offsetPosition = element.getBoundingClientRect().top + window.scrollY + 50;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    };
  
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
  
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [useMenu?.currentMenu]);

  return (
    <>
      <nav className="fixed flex justify-between items-center h-12 w-full px-5 pt-2 z-40">
        <Link className='h-10 w-16' href={"/"}>
          <Image width={1111} height={741} className='h-full aspect-auto' 
            src="https://res.cloudinary.com/dhu6ayhdj/image/upload/f_auto,q_auto/v1/pallete/ly3xl2aypbhzlj7qjaus" 
            alt='pallete logo' priority/>
        </Link>
        <div className="hidden md:block">
          <div className='flex gap-7'>
            <Link href={"/"} onClick={() => {handleButton(1)}} 
              className={cn('group flex pl-[1.3rem] rounded-md', 
                useMenu?.currentMenu == 1 ? 'bg-yellow-600 cursor-default' : 'bg-white bg-opacity-30')}>
              <span className={cn(useMenu?.currentMenu == 3 || useMenu?.currentMenu == 4 ? 'text-black' 
                : 'text-white')}>Home&nbsp;</span>
              <span className={cn('w-[1.2rem]',
                useMenu?.currentMenu == 1 ? 'block' : 'block group-hover:hidden')}></span>
              <span className={cn(
                useMenu?.currentMenu == 1 ? 'hidden' : 'hidden group-hover:block')}>
                <Icon icon="bucket" />
              </span>
            </Link>
            <Link href={"/#about"} onClick={() => {handleButton(2)}} 
              className={cn('group flex pl-[1.3rem] rounded-md', 
                useMenu?.currentMenu == 2 ? 'bg-yellow-600 cursor-default' : 'bg-white bg-opacity-30')}>
              <span className={cn(useMenu?.currentMenu == 3 || useMenu?.currentMenu == 4 ? 'text-black' 
                : 'text-white')}>About&nbsp;</span>
              <span className={cn('w-[1.2rem]',
                useMenu?.currentMenu == 2 ? 'block' : 'block group-hover:hidden')}></span>
              <span className={cn(
                useMenu?.currentMenu == 2 ? 'hidden' : 'hidden group-hover:block')}>
                <Icon icon="bucket" />
              </span>
            </Link>
            <Link href={"/#products"} onClick={() => {handleButton(3)}} 
              className={cn('group flex pl-[1.3rem] rounded-md', 
                useMenu?.currentMenu == 3 ? 'bg-yellow-600 cursor-default' : 'bg-white bg-opacity-30')}>
              <span className={cn(useMenu?.currentMenu == 3 || useMenu?.currentMenu == 4 ? 'text-black' 
                : 'text-white')}>Products&nbsp;</span>
              <span className={cn('w-[1.2rem]',
                useMenu?.currentMenu == 3 ? 'block' : 'block group-hover:hidden')}></span>
              <span className={cn(
                useMenu?.currentMenu == 3 ? 'hidden' : 'hidden group-hover:block')}>
                <Icon icon="bucket" />
              </span>
            </Link>
            <Link href={"/contact"} onClick={() => {handleButton(4)}} 
              className={cn('group flex pl-[1.3rem] rounded-md', 
                useMenu?.currentMenu == 4 ? 'bg-yellow-600 cursor-default' : 'bg-white bg-opacity-30')}>
              <span className={cn(useMenu?.currentMenu == 3 || useMenu?.currentMenu == 4 ? 'text-black' 
                : 'text-white')}>Contact&nbsp;</span>
              <span className={cn('w-[1.2rem]',
                useMenu?.currentMenu == 4 ? 'block' : 'block group-hover:hidden')}></span>
              <span className={cn(
                useMenu?.currentMenu == 4 ? 'hidden' : 'hidden group-hover:block')}>
                <Icon icon="bucket" />
              </span>
            </Link>
          </div>
        </div>
        <div onClick={handleBurger} 
          className="md:hidden flex justify-center items-center w-6 aspect-square rounded-full bg-white">
          <Icon icon="menu" />
        </div>
      </nav>
      <div ref={overlayDiv} className="flex w-full md:hidden fixed z-50 bg-product">
        {
          burgerShow && (<OverlayMenu setHide={handleBurger} />)
        }
      </div>
    </>
  )
}

export default Navbar;