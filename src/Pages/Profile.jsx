import React from 'react';
import NavBar from '../components/NavBar';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';
import Post from '../components/Post';

function Profile() {

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
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
            <LeftMenu/>
            <div className='w-full md:w-3/5 p-7 flex flex-col gap-6 overflow-y-scroll'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='pointer-events-none select-none w-18'>
                                <img className='w-full' src='/src/assets/images/profile-picture.svg'></img>
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='flex items-center pr-8'>
                                    <p>{user.username}</p>
                                    <img className='w-8' src='/src/assets/images/streak-0-days.svg'></img>
                                    <p className='font-bold'>{user.streak}</p>
                                </div>
                                <p>{user.userFullname}</p>
                            </div>
                        </div>
                        <div className='flex gap-x-4 items-start'>
                            <div>
                                <a className='hidden md:flex bg-navbar w-36 justify-center p-1 border-2 border-gray-600 rounded-xl
                                hover:cursor-pointer'>
                                    <p>Editar perfil</p>
                                </a>
                            </div>
                            <div className='w-8'>
                                <img src='src/assets/images/configs-icon.svg'></img>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='flex gap-1'> <p className='font-bold'>{user.postsNumber}</p> <p>Posts</p> </div>
                        <div className='flex gap-1'> <p className='font-bold'>{user.followers}</p> <p>Followers</p> </div>
                        <div className='flex gap-1'> <p className='font-bold'>{user.following}</p> <p>Following</p> </div>
                    </div>
                </div>
                <div className='posts flex justify-center'>
                    <Post user={user}/>
                </div>
                <div className='posts flex justify-center'>
                    <Post user={user}/>
                </div>
            </div>
            <RightMenu/>
            </section>
        </section>
    );
};

    export default Profile;