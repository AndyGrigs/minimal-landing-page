import React from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'sheared/lib/className'
import cl from './Navbar.module.scss'

interface NavbarProps {
  className?: string;
}

export const Navbar = ({className}: NavbarProps) => {

  return (
    <div className={classNames( cl.navbar , {}, [className])}>
      <Link to="/about">About</Link>
      <Link to="/">Home</Link>
    </div>
  )
}
