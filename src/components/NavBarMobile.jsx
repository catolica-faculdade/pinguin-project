import React from 'react';

export default function NavBarMobile() {
    return (
        <nav className="flex justify-around bg-navbar p-1 items-center fixed bottom-0 w-full h-[10vh] border-t top-shadow-nav-bar-mobile">
            <button>
                <img src='src/assets/images/home-icon-mobile.svg' />
            </button>
            <button>
                <img src='src/assets/images/search-icon-mobile.svg' />
            </button>
            <button className="bg-purple-create-post rounded-md border p-2 relative -top-3">
                <img src='src/assets/images/create-post-icon-mobile.svg' />
            </button>
            <button>
                <img src='src/assets/images/notifications-icon-mobile.svg' />
            </button>
            <button>
                <img src='src/assets/images/profile-icon-mobile.svg' />
            </button>
        </nav>
    );
}
