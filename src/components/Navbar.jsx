import React from 'react';
import logo from '../assets/icons/logo.png';
import { Link, NavLink } from 'react-router-dom';
import { BiHomeAlt, BiMessageSquare, BiBell } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { AiOutlinePieChart, AiOutlineSetting } from "react-icons/ai";
import { IoExitOutline } from "react-icons/io5";

import './Navbar.css';
const Navbar = () => {
    const chengeActive = (e) =>  e.isActive ? 'nav__active nav__link' : 'nav__link';
    return (
        <nav className='nav'>
            <Link className='nav__logo' to='/'><img src={logo} alt="logo" /></Link>
            <ul className='nav__list'>
                <li className='nav__item'>
                    <NavLink className={chengeActive} to='/'>
                        <BiHomeAlt className='nav__icon' />
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className={chengeActive} to='/sale'>
                        <BsPatchCheck className='nav__icon' />
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className={chengeActive} to='/dashboard'>
                        <AiOutlinePieChart className='nav__icon' />
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className={chengeActive} to='/message'>
                        <BiMessageSquare className='nav__icon' />
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className={chengeActive} to='/bell'>
                        <BiBell className='nav__icon' />
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className={chengeActive} to='/setting'>
                        <AiOutlineSetting className='nav__icon' />
                    </NavLink>
                </li>
                <li className='nav__item'>
                    <NavLink className={chengeActive} to='/exit'>
                        <IoExitOutline className='nav__icon' />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}
export { Navbar }