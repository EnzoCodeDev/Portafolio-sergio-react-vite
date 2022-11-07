import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Menu } from '../menu/Menu';
import './header.scss';
export const Header = () => {
    return (
        <header className='header'>
            <div className='header__left'>
                <Menu />
            </div>
            <div className='header__rigth'>
                <div className="header__rigth__wrap">
                    <div className="header__rigth__wrap__icons">
                        <FaLinkedin className='header__rigth__wrap__icons__icon' />
                        <FaGithubSquare className='header__rigth__wrap__icons__icon' />
                    </div>
                </div>
                <Link className="header__rigth__name">Sergio Cano</Link>
            </div>
        </header>
    )
}