import React from "react";
import cls from "./ErrorPage.module.scss"
import {classNames} from "sheared/lib/className"

export interface ErrorPageProps {
className?: string;
}

export const ErrorPage = ({className}:ErrorPageProps)=>  {
  return (
    <div className={classNames(cls.ErrorPage, {}, [className])}>
      <h1>404</h1>
    </div>
  )
};