import React from 'react';
import NavBar from '../components/NavBar';
import Tab from '../components/Tab';

function Profile() {
    // conversa com a api aqui

    const following = 20;
    const followers = 15;

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[10vh]'>
                <div className='flex flex-col gap-3'> 
                    <Tab 
                    text="Following"
                    number={following}/>
                    <Tab 
                    text="Followers"
                    number={followers}/>
                </div>
                <div>
                    
                </div>
                <div>

                </div>
            </section>
        </section>
    );
};

    export default Profile;