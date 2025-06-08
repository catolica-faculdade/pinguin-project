import React, { useState } from 'react';


//components
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

    const posts = [
        {
            title: 'fui na casa do meu amigo...',
            image: null
        },
        {
            title: 'gente, olha meu código novo...',
            image: '/public/posts/novo-codigo.png'
        }
    ];

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <TopNavMobile />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
                <LeftMenu />
                <div className='w-full md:w-3/5 p-7 flex flex-col gap-6 overflow-y-scroll'>
                    {posts.map((post) => (
                        <div className='posts flex justify-center'>
                            <Post user={user} content={post}/>
                        </div>
                    ))}
                </div>
                <RightMenu />
            </section>
            <NavBarMobile />
        </section>
    );
};

export default Home;