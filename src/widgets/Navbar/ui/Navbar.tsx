import React from 'react'
import { classNames } from 'sheared/lib/className'
import cl from './Navbar.module.scss'
import { useTranslation } from 'react-i18next';
import Logo from 'sheared/assets/icons/logo.svg'
import Burger from 'sheared/assets/icons/burger.svg'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  const { t, i18n } = useTranslation();

  return (
    <header className={classNames(cl.Navbar, {}, [className])}>
      <Logo className={cl.Navbar__Logo} />
      <Burger className={cl.Navbar__Burger} />
    </header>
  )
}



