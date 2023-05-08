import { useRef } from 'react';
import './css/Header.css';

const Header = () => {

    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle('responsive_nav');
    }

    return (
        <header>
            <a href='/'>
                <h3 >FIDIM</h3>
            </a>
            <nav ref={navRef}>
                <a href='/'>Home</a>
                <a href='/'>Members</a>
                <a href='/'>Projects</a>
                <a href='/'>About</a>
                <a href='/'>Contact</a>
                <button className='nav-btn nav-close-btn' onClick={showNavBar}>
                    NAV
                </button>
            </nav>
            <button className='nav-btn' onClick={showNavBar}>

            </button>
        </header>
    )
};

export default Header;