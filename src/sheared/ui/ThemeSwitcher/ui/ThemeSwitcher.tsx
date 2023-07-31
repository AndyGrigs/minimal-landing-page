import React from "react";
import cls from "./ThemeSwitcher.module.scss"
import { classNames } from "sheared/lib/className"
import useTheme from "app/ThemeProvider/lib/useTheme";
import LightIcon from "sheared/assets/icons/sun _.svg"
import DarkIcon from "sheared/assets/icons/moon_.svg"
import { Theme } from "app/ThemeProvider/ui";
import { Button, ThemeButton } from "sheared/ui/Button/Button";

export interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [theme, toggleTheme] = useTheme()
  return (
    <>
    <Button theme={ThemeButton.CLEAR}
      className={classNames(cls.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}>
       {theme === Theme.DARK ? <LightIcon /> : <DarkIcon/>}
    </Button>
    </>
  )
}
