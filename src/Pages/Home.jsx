import React from 'react';
import NavBar from '../components/NavBar';
import NavBarMobile from '../components/NavBarMobile';
import TopNavMobile from '../components/TopNavMobile';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import Post from '../components/Post';

function Home() {
    // conversa com a api aqui

    const user = {
        username: '@gfloriano',
        userFullname: 'Gustavo Floriano',
        streak: 0,
        postsNumber: 10,
        followers: 19,
        following: 23
    }

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <TopNavMobile />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
                <LeftMenu />
                <div className='w-full md:w-3/5 p-7 flex flex-col gap-6 overflow-y-scroll'>
                    <div className='posts flex justify-center'>
                        <Post user={user} />
                    </div>
                    <div className='posts flex justify-center'>
                        <Post user={user} />
                    </div>
                </div>
                <RightMenu />
            </section>
            <NavBarMobile />
        </section>
    );
};

export default Home;