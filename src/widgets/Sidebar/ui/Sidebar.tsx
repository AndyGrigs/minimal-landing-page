import React, { useState } from "react";
import cls from "./Sidebar.module.scss"
import {classNames} from "sheared/lib/className"
import X from "sheared/assets/icons/x.svg"


export interface SidebarProps {
className?: string;
isOpen?: boolean;
onClose?: () => void
}

export const Sidebar = ({className, isOpen, onClose}:SidebarProps)=>  {
  
    
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: !isOpen}, [className])}>
      <button onClick={onClose}><X /></button>
    </div>
  )
};