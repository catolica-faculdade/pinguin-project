import React from 'react';

export default function NavBarMobile() {
    return (
        <nav className="nav-bar-mobile flex justify-around bg-navbar p-1 md:hidden items-center fixed bottom-0 w-full h-[60px] border-t top-shadow-nav-bar-mobile">
            <button>
                <img src='src/assets/images/home-icon-mobile.svg' className="w-[28px]" />
            </button>
            <button>
                <img src='src/assets/images/search-icon-mobile.svg' className="w-[28px]" />
            </button>
            <button className="bg-purple-create-post rounded-md border p-2 relative -top-4">
                <img src='src/assets/images/create-post-icon-mobile.svg' />
            </button>
            <button>
                <img src='src/assets/images/notifications-icon-mobile.svg' className="w-[25px]" />
            </button>
            <button>
                <img src='src/assets/images/profile-icon-mobile.svg' className="w-[25px]" />
            </button>
        </nav>
    );
}
