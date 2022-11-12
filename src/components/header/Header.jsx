import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useInView } from "framer-motion";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { Menu } from '../menu/Menu';
import './header.scss';
export const Header = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <header ref={ref} className='header'>
            <div className='header__left' style={{
                transform: isInView ? "none" : "translateX(-50%)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}>
                <Menu />
            </div>
            <div className='header__rigth'>
                <div className="header__rigth__wrap" style={{
                    transform: isInView ? "none" : "translateY(-50%)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                }}>
                    <div className="header__rigth__wrap__icons">
                        <FaLinkedin className='header__rigth__wrap__icons__icon' />
                        <FaGithubSquare className='header__rigth__wrap__icons__icon' />
                    </div>
                </div>
                <Link
                    style={{
                        transform: isInView ? "none" : "translateX(50%)",
                        opacity: isInView ? 1 : 0,
                        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
                    }}
                    className="header__rigth__name"
                >Sergio Cano</Link>
            </div>
        </header>
    )
}