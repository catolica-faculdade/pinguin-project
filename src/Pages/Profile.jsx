import React from 'react';
import NavBar from '../components/NavBar';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';

function Profile() {

    const username = '@gfloriano';
    const userFullname = 'Gustavo Floriano';
    const streak = 0;
    const postsNumber = 10;
    const followers = 19;
    const following = 23;


    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
            <LeftMenu/>
            <div className='w-full md:w-2/3 p-7'>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='pointer-events-none select-none w-18'>
                                <img className='w-full' src='/src/assets/images/profile-picture.svg'></img>
                            </div>
                            <div className='flex flex-col justify-start'>
                                <div className='flex items-center pr-8'>
                                    <p>{username}</p>
                                    <img className='w-8' src='/src/assets/images/streak-0-days.svg'></img>
                                    <p className='font-bold'>{streak}</p>
                                </div>
                                <p>{userFullname}</p>
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
                        <div className='flex gap-1'> <p className='font-bold'>{postsNumber}</p> <p>Posts</p> </div>
                        <div className='flex gap-1'> <p className='font-bold'>{followers}</p> <p>Followers</p> </div>
                        <div className='flex gap-1'> <p className='font-bold'>{following}</p> <p>Following</p> </div>
                    </div>
                </div>
                <div className='posts'>

                </div>
            </div>
            <RightMenu/>
            </section>
        </section>
    );
};

    export default Profile;