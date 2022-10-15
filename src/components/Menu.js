import Link from 'next/link'
import { forwardRef } from 'react';
import React from 'react';

const NavLink = React.forwardRef(( { href, onClick, children}, ref) => {
    return (
        <a href={href} onClick={onClick} ref={ref}>{children}</a>
    );
})

function Menu() {
    return(
        <nav>
            <Link href="/" passHref>
            <NavLink>Home</NavLink>
            </Link>
            <Link href="/about" passHref>
            <NavLink>About</NavLink>
            </Link>
            <Link href="/contact" passHref>
            <NavLink>Contact</NavLink>
            </Link>
        </nav>
    )

}

export default Menu;