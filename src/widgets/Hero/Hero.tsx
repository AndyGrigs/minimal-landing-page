import React from "react";
import cls from "./Hero.module.scss"
import {classNames} from "sheared/lib/className"

export interface HeroProps {
className?: string;
}

export const Hero = ({className}:HeroProps)=>  {
  return (
    <div className={classNames(cls.Hero, {}, [className])}>
      <div>
        <p>Modern and minimalist furniture for you</p>
        <p>Add a touch of elegance to your space with handcrafted furniture pieces</p>
        <div>
          <p>Subscribe</p>
        </div>
    </div>
</div>
 
  )
};