"use client"
import { 
  FC, 
  useEffect, 
  useContext, 
} from 'react'
import Image from "next/image"
import logo from "@/images/logo.png"
import Link from 'next/link'
import Icon from '@/components/Icon'
import { cn } from '@/utils/merge'
import MenuContext from '@/context/MenuContext'

const Navbar: FC = () => {
  const useMenu = useContext(MenuContext);

  const handlebutton = (menuCode: number) => {
    useMenu?.setCurrentMenu(menuCode)
  }

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
    <nav className="fixed flex justify-between items-center h-12 w-full px-5 pt-2 z-40">
      <Link className='h-10 w-16' href={"/"}>
        <Image width={1111} height={741} className='h-full aspect-auto' src={logo} alt='pallete logo' priority/>
      </Link>
      <div className='hidden md:block'>
        <div className='flex gap-7'>
          <Link href={"/"} onClick={() => {handlebutton(1)}} 
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
          <Link href={"/#about"} onClick={() => {handlebutton(2)}} 
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
          <Link href={"/#products"} onClick={() => {handlebutton(3)}} 
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
          <Link href={"/contact"} onClick={() => {handlebutton(4)}} 
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
    </nav>
  )
}

export default Navbar;