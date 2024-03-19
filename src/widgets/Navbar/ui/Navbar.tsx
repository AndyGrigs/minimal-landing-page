import React from 'react'
import { classNames } from 'sheared/lib/className'
import cl from './Navbar.module.scss'
import { AppLink, AppLinkTheme } from 'sheared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

  const { t, i18n } = useTranslation();

  return (
    <div className={classNames(cl.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about">{t('About')}</AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">{t('Home')}</AppLink>
    </div>
  )
}


