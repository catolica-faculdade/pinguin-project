import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBarMobile() {
    return (
        <nav className="nav-bar-mobile flex justify-around bg-navbar p-1 md:hidden items-center fixed bottom-0 w-full h-[60px] border-t top-shadow-nav-bar-mobile">
            <Link to={"/home"}>
                <img src='assets/images/home-icon-mobile.svg' className="w-[28px]" />
            </Link>
            <Link to={"/search"}>
                <img src='assets/images/search-icon-mobile.svg' className="w-[28px]" />
            </Link>
            <Link to={"/newPost"} className="bg-purple-create-post rounded-md border p-2 relative -top-4">
                <img src='assets/images/create-post-icon-mobile.svg' />
            </Link>
            <Link to={"/notifications"}>
                <img src='assets/images/notifications-icon-mobile.svg' className="w-[25px]" />
            </Link>
            <Link to={"/profile"}>
                <img src='assets/images/profile-icon-mobile.svg' className="w-[25px]" />
            </Link>
        </nav>
    );
}
