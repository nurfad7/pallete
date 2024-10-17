import { 
  FC, 
  useEffect, 
  useContext, 
} from 'react'
import MenuContext from '@/context/MenuContext';
import Link from 'next/link';
import { cn } from '@/utils/merge';
import Icon from '@/components/Icon';

interface OverlayMenuProps {
  setHide: () => void;
}

const OverlayMenu: FC<OverlayMenuProps> = ({setHide}) => {
  const useMenu = useContext(MenuContext);

  const handleButtonOverlay = (menuCode: number) => {
    useMenu?.setCurrentMenu(menuCode)
    setHide();
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
    <div className="w-full h-screen relative flex">
      <div className="absolute top-3 right-3">
        <div onClick={setHide} className="cursor-pointer"><Icon icon="cross" /></div>
      </div>
      <div className="flex flex-col gap-7 mt-20">
        <Link href={"/"} onClick={() => {handleButtonOverlay(1)}} 
          className="group flex text-3xl font-medium text-center">
          <span className={cn('w-10 text-black',
            useMenu?.currentMenu == 1 ? 'block' : 'hidden')}>●</span>
          <span className={cn("w-10", 
            useMenu?.currentMenu == 1 ? 'hidden' : 'block')}>&nbsp;</span>
          <span className="text-black">Home</span>
        </Link>
        <Link href={"/#about"} onClick={() => {handleButtonOverlay(2)}} 
          className="group flex text-3xl font-medium text-center">
          <span className={cn('w-10 text-black',
            useMenu?.currentMenu == 2 ? 'block' : 'hidden')}>●</span>
          <span className={cn("w-10", 
            useMenu?.currentMenu == 2 ? 'hidden' : 'block')}>&nbsp;</span>
          <span className="text-black">About</span>
        </Link>
        <Link href={"/#products"} onClick={() => {handleButtonOverlay(3)}} 
          className="group flex text-3xl font-medium text-center">
          <span className={cn('w-10 text-black',
            useMenu?.currentMenu == 3 ? 'block' : 'hidden')}>●</span>
          <span className={cn("w-10", 
            useMenu?.currentMenu == 3 ? 'hidden' : 'block')}>&nbsp;</span>
          <span className="text-black">Products</span>
        </Link>
        <Link href={"/contact"} onClick={() => {handleButtonOverlay(4)}} 
          className="group flex text-3xl font-medium text-center">
          <span className={cn('w-10 text-black',
            useMenu?.currentMenu == 4 ? 'block' : 'hidden')}>●</span>
          <span className={cn("w-10", 
            useMenu?.currentMenu == 4 ? 'hidden' : 'block')}>&nbsp;</span>
          <span className="text-black">Contact</span>
        </Link>
      </div>
    </div>
  )
}

export default OverlayMenu;