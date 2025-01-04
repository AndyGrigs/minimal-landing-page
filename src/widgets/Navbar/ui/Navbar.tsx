import React from 'react';
import { classNames } from 'sheared/lib/className';
import cl from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import Logo from 'sheared/assets/icons/logo.svg';
import Burger from 'sheared/assets/icons/burger.svg';
import { Navlinks } from 'sheared/ui/NavLinks/Navlinks';
import { AppLinkTheme } from '../../../sheared/ui/AppLink/AppLink';

interface NavbarProps {
   className?: string;
   onBurgerClick?: () => void;
   isOpen?: boolean;
}

export const Navbar = ({
   className,
   onBurgerClick,
   isOpen,
}: NavbarProps) => {
   const { t, i18n } = useTranslation();

   return (
      <header
         className={classNames(cl.Navbar, {}, [className])}
      >
         <Logo className={cl.Navbar__Logo} />
        
        <nav className={cl.Navbar__Links}>
          <Navlinks theme={AppLinkTheme.NAVBAR}/>
        </nav>

         <Burger
            onClick={onBurgerClick}
            className={classNames(
               cl.Navbar__Burger,
               { [cl.hidden]: isOpen },
               [className]
            )}
         />
      </header>
   );
};
