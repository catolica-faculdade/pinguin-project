import React from 'react';
import NavBar from '../components/NavBar';

function Profile() {
    // conversa com a api aqui

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[10vh]'>
                <div className='flex bg-icon-user'>
                    <img className='w-20 h-20' 
                    src='/src/assets/images/user-icon-black.png'></img>
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