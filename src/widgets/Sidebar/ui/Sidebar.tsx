import React, { useState } from "react";
import cls from "./Sidebar.module.scss"
import { classNames } from "sheared/lib/className"
import { ThemeSwitcher } from "sheared/ui/ThemeSwitcher";

export interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const toggle = () => {
    setCollapsed(prev => !prev)
  };
  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={toggle}>toggle</button>
      <div className="switchers">
         <ThemeSwitcher/>
      </div>
    </div>
  )
};
