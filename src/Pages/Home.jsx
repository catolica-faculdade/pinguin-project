import React, { useState } from 'react';


//components
import NavBar from '../components/General/NavBar';
import NavBarMobile from '../components/Mobile/NavBarMobile';
import TopNavMobile from '../components/Mobile/TopNavMobile';
import LeftMenu from '../components/General/LeftMenu';
import RightMenu from '../components/General/RightMenu';
import Post from '../components/Posts/Post';


function Home() {
    // conversa com a api aqui

    const user = {
        username: 'gfloriano',
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
            image: '/posts/novo-codigo.png'
        }
    ];

    return (
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