import React, { useState } from "react";
import cls from "./Sidebar.module.scss"
import {classNames} from "sheared/lib/className"
import X from "sheared/assets/icons/x.svg"


export interface SidebarProps {
className?: string;
}

export const Sidebar = ({className}:SidebarProps)=>  {
    const[collapsed, setCollapsed] = useState(false)

    const toggle =()=>{
        setCollapsed(prev=> !prev)
    }
  return (
    <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={toggle}><X /></button>
    </div>
  )
};