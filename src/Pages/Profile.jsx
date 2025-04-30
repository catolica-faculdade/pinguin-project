import React from 'react';
import NavBar from '../components/NavBar';
import Tab from '../components/Tab';
import MyUser from '../components/MyUser';
import Streak from '../components/Streak';

function Profile() {
    // conversa com a api aqui

    const following = 20;
    const followers = 15;
    const username = '@gfloriano';
    const userFullname = 'Gustavo Floriano';

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
                <div className='flex flex-col gap-3 justify-between items-center pt-4 p-2 border-black border-r'> 
                    <div className='flex flex-col gap-3'>
                        <Tab 
                        text="Following"
                        number={following}/>
                        <Tab 
                        text="Followers"
                        number={followers}/>
                    </div>
                    <MyUser
                    username={username}
                    userFullname={userFullname}/>
                </div>
                <div>
                    
                </div>
                <div className='flex flex-col gap-3 justify-between items-center pt-4 p-2 border-black border-l'>
                    <div>
                        <Streak/>
                    </div>
                </div>
            </section>
        </section>
    );
};

    export default Profile;