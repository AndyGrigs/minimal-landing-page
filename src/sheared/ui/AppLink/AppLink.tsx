import React, { type FC } from "react";
import cls from "./AppLink.module.scss"
import { classNames } from "sheared/lib/className"
import { Link, type LinkProps } from "react-router-dom";

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
  const {
    to,
    className,
    children,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props
  return (
    <Link
        className={classNames(cls.AppLink, {}, [className, cls[theme]])}
        to={to}
        {...otherProps}
        >
      {children}
    </Link>
  )
};
