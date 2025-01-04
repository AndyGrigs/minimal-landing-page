import React from 'react';
import cls from './Navlinks.module.scss';
import { classNames } from 'sheared/lib/className';
import { AppLink, AppLinkTheme } from 'sheared/ui/AppLink/AppLink';

export interface NavlinksProps {
   className?: string;
   theme?: AppLinkTheme;
}

const links = [
   { id: 'home', label: 'About us' },
   { id: 'about', label: 'Our products' },
   { id: 'prices', label: 'Prices' },
   { id: 'bestsellers', label: 'Bestsellers' },
   { id: 'reviews', label: 'Reviews' },
   { id: 'contacts', label: 'Contacts' },
];

export const Navlinks = ({ className, theme }: NavlinksProps) => {
   return (
      <div
         className={classNames(cls.Navlinks, {}, [
            className,
         ])}
      >
         {links.map((link, index) => (
            <AppLink key={index} theme={theme} to={`#${link.id}`}>
               {link.label}
            </AppLink>
         ))}
      </div>
   );
};
