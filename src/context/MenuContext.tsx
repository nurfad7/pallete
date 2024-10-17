import { createContext } from 'react';

export interface MenuContextType {
  currentMenu: number;
  setCurrentMenu: (menuCode: number) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export default MenuContext;