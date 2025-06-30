import React, { useState } from 'react';


//components
import NavBar from '../components/General/NavBar';
import NavBarMobile from '../components/Mobile/NavBarMobile';
import TopNavMobile from '../components/Mobile/TopNavMobile';
import LeftMenu from '../components/General/LeftMenu';
import RightMenu from '../components/General/RightMenu';
import Post from '../components/Posts/Post';
import CreatePost from '../components/Posts/CreatePost';


function Home() {
    const [newPost, setNewPost] = useState(false);
    const user = [
        {
            username: 'gfloriano',
            userFullname: 'Gustavo Floriano',
            streak: 0,
            postsNumber: 10,
            followers: 19,
            following: 23
        },
        {
            username: 'vh',
            userFullname: 'Vitor Hugo da Cunha',
            streak: 3,
            postsNumber: 30,
            followers: 1,
            following: 1000
        }
    ]

    const posts = [
        {
            id: 1,
            user: user[1],
            title: 'fui na casa do meu amigo...',
            image: null
        },
        {
            id: 2,
            user: user[0],
            title: 'gente, olha meu código novo...',
            image: 'posts/novo-codigo.png'
        }
    ];

    return (
        <section>
            <head>
                <title>Home | Pinguin</title>
            </head>
            <NavBar />
            <TopNavMobile/>
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
                <LeftMenu onClick={() => setNewPost(true)} postPage={false}/>
                <div className='w-full md:w-3/5 p-7 flex flex-col gap-6 overflow-y-scroll'>
                    {posts.map((post) => (
                        <div className='flex justify-center'>
                            <Post key={post.id} id={post.id} content={post}/>
                        </div>
                    ))}
                </div>
                <RightMenu onClick={() => setNewPost(true)}/>
            </section>
            <NavBarMobile />
            {newPost && (
            <CreatePost onClick={() => setNewPost(false)}/>
            )}
        </section>
    );
};

export default Home;