import { useState } from 'react';
import NavBar from '../components/General/NavBar';
import LeftMenu from '../components/General/LeftMenu';
import RightMenu from '../components/General/RightMenu';
import OpenPost from '../components/Posts/OpenPost';

function PostPage() {
    const [username, setUsername] = useState('gfloriano');
    const [fullName, setFullName] = useState('Gustavo Floriano');

    const user = [
        {
            username: username,
            userFullname: fullName,
            about: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
            streak: 0,
            postsNumber: 10,
            followers: 19,
            following: 23
        }
    ]
    const comments = [
        {
            id: 1,
            user: user[0],
            comment: "kkkkkkkkkkkkk"
        },
        {
            id: 2,
            user: user[0],
            comment: "LÁ ELE AAAAAAAHAHAHAHAHAHHAAHHAAAAA"
        },
    ]

    const posts = [
        {
            id: 1,
            title: 'fui na casa do meu amigo...',
            image: null,
            user: user[0],
            comments: comments
        },
        {
            id: 2,
            title: 'gente, olha meu código novo...',
            image: '/public/posts/novo-codigo.png',
            user: user[0],
        }
    ];

    return (
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
            <LeftMenu/>
            <div className='w-2/3 flex flex-col items-center pt-3'>
                <OpenPost content={posts[0]}/>
            </div>
            <RightMenu/>
            </section>
        </section>
    );
};

export default PostPage;