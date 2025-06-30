import React from 'react';

export default function TopNavMobile() {
    return (
        <nav className="nav-bar-mobile flex justify-between bg-navbar md:hidden p-2 items-center fixed w-full h-[50px] border-b">
            <div className="w-[40px] h-[40px] bg-cube-gray-navbar rounded-[100px] p-[4px]">
                <img src='assets/images/logo-pinguIn-branca.png' />
            </div>
            <div>
                <button className="flex items-center gap-[2px] p-[4px]">
                    <img src="assets/images/streak-0-days.svg" alt="Streak" className="h-[40px]" />
                    <p className="text-[20px] font-semibold">0</p>
                </button>
            </div>
        </nav>
    );
}
