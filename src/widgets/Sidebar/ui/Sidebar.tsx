import React, { useState } from 'react';
import cls from './Sidebar.module.scss';
import { classNames } from 'sheared/lib/className';
import X from 'sheared/assets/icons/x.svg';
import { Navlinks } from 'sheared/ui/NavLinks/Navlinks';

export interface SidebarProps {
   className?: string;
   isOpen?: boolean;
   onClose?: () => void;
}

export const Sidebar = ({
   className,
   isOpen,
   onClose,
}: SidebarProps) => {
   return (
      <div
         className={classNames(
            cls.Sidebar,
            { [cls.collapsed]: isOpen },
            [className]
         )}
      >
         <button className={cls.close} onClick={onClose}>
            <X />
         </button>
         <nav className={cls.nav}>
            <Navlinks />
         </nav>
      </div>
   );
};
