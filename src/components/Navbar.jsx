import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { NAVIGATION_LINKS } from '../constants'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset + offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
        setIsMobileMenuOpen(false)
    }
    // console.log(NAVIGATION_LINKS)

    return (
        <div>
            <nav className='fixed top-4 left-0 right-0 z-50'>
                {/* Desktop Menu */}
                <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg  py-3 backdrop-blur-lg lg:flex">
                    <div className="flex justify-between gap-10">
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={70} />
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <ul className="flex items-center">
                                {NAVIGATION_LINKS.map((item, index) => {
                                    return (
                                    <li key={index} >
                                        <a href={item.href}
                                            className='text-md hover:text-yellow-400 ml-2'
                                            onClick={(e) => handleLinkClick(e, item.href)}>
                                            {item.label}
                                        </a>
                                    </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className="rounded-lg px-5 backdrop-blur-md lg:hidden">
                    <div className="flex items-center justify-between">
                        <div>
                            <a href="#">
                                <img src={logo} alt="logo" width={60} className='m-2' />
                                {/* <h1 className='text-3xl py-2 uppercase text-amber-100'>vishal Jatti</h1> */}
                            </a>
                        </div>
                        <div className='flex items-center'>
                            <button onClick={toggleMobileMenu} className="focus:outline-none lg:hidden text-2xl text-white">
                                {isMobileMenuOpen ? 'X' : '☰'}
                            </button>
                        </div>
                    </div>
                    {isMobileMenuOpen && (
                        <ul className="ml-4 mt-4 pb-3 flex flex-col gap-4">
                            {NAVIGATION_LINKS.map((item, index) => {
                                return (
                                <li key={index}>
                                    <a href={item.href}
                                        className='block w-full text-xl font-semibold hover:text-yellow-400'
                                        onClick={(e) => handleLinkClick(e, item.href)}>
                                        {item.label}
                                    </a>
                                </li>
                                )
                            })}
                        </ul>
                    )}
                </div>

            </nav>
        </div>
    )
}

export default Navbar