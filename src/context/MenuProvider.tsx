"use client"
import { useState } from "react";
import MenuContext, { MenuContextType } from "./MenuContext";

export const MenuProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [scrollCode, setScrollCode] = useState<number>(0);

  const setCurrentMenu = (menuCode: number) => {
    setScrollCode(menuCode);
  };

  const value: MenuContextType = {currentMenu: scrollCode, setCurrentMenu};

  return <MenuContext.Provider value={ value }>
          {children}
        </MenuContext.Provider>;
};