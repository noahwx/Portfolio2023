import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';

const Header = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
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
                <NavLink to='/' className='NavLogo' onClick={handleOpen}> <img src={logo} alt="logo" /> </NavLink>
                { open ? (
                    <div className='NavItems'>
                        <NavLink to='/' className='NavItem'>Home</NavLink>
                        <NavLink to='/pages/About' className='NavItem'>About</NavLink>
                        <NavLink to='/pages/Work' className='NavItem'>Work</NavLink>
                        <NavLink to='/pages/Blog' className='NavItem'>Blog</NavLink>
                        <NavLink to='/pages/Contact' className='NavItem'>Contact</NavLink>
                    </div>
                ) : null }
            </div>
        </>
    );
}
 
export default Header;