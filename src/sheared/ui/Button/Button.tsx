import React, { ButtonHTMLAttributes, FC } from "react";
import cls from "./Button.module.scss"
import {classNames} from "sheared/lib/className"

export enum ThemeButton {
    CLEAR = 'clear'
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props)=>  {
    const {className, children, theme, ...otherProps}=props
  return (
    <button className={classNames(cls.Button, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </button>
  )
};