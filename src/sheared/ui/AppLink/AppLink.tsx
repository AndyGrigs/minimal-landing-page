
import React, { FC } from "react";
import cls from "./AppLink.module.scss"
import {classNames} from "sheared/lib/className"
import { Link, LinkProps } from "react-router-dom";

export interface AppLinkProps extends LinkProps {
className?: string;
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const{to, className, children, ...otherProps}= props
  return (
    <Link 
        className={classNames(cls.AppLink, {}, [className])} 
        to={to} 
        {...otherProps}
        >
      {children}
    </Link>
  )
};