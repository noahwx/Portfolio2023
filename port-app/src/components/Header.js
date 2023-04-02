import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    const handleMenuOne = () => {
        setOpen(false);
    };
    
    const handleMenuTwo = () => {
        setOpen(false);
    };

    const handleMenuThree = () => {
        setOpen(false);
    };

    const handleMenuFour = () => {
        setOpen(false);
    };

    const handleMenuFive = () => {
        setOpen(false);
    };
    
    return ( 
        <>
            <div className="Nav">
                <NavLink to='/' className='NavLogo'> <img src={logo} alt="logo" /> </NavLink>
                <div className='NavItems'>
                    <NavLink to='/' className='NavItem'>Home</NavLink>
                    <NavLink to='/pages/About' className='NavItem'>About</NavLink>
                    <NavLink to='/pages/Work' className='NavItem'>Work</NavLink>
                    <NavLink to='/pages/Blog' className='NavItem'>Blog</NavLink>
                    <NavLink to='/pages/Contact' className='NavItem'>Contact</NavLink>
                </div>
            </div>
            <div className='MobileNav'>
                <button to='/' className='NavLogo' onClick={handleOpen}> <img src={logo} alt="logo" /> </button>
                { open ? (
                    <div className='NavItems'>
                        <NavLink to='/' className='NavItem' onClick={handleMenuOne}>Home</NavLink>
                        <NavLink to='/pages/About' className='NavItem' onClick={handleMenuTwo}>About</NavLink>
                        <NavLink to='/pages/Work' className='NavItem' onClick={handleMenuThree}>Work</NavLink>
                        <NavLink to='/pages/Blog' className='NavItem' onClick={handleMenuFour}>Blog</NavLink>
                        <NavLink to='/pages/Contact' className='NavItem' onClick={handleMenuFive}>Contact</NavLink>
                    </div>
                ) : null }
            </div>
        </>
    );
}
 
export default Header;