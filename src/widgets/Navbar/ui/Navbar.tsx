import React from 'react'
import { classNames } from 'sheared/lib/className'
import cl from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'sheared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames( cl.navbar , {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">Home</AppLink>
    </div>
  )
}


