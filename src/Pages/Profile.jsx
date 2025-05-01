import React from 'react';
import NavBar from '../components/NavBar';
import LeftMenu from '../components/LeftMenu';
import RightMenu from '../components/RightMenu';

function Profile() {
    // conversa com a api aqui

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
            <LeftMenu/>
                <div>
                    
                </div>
            <RightMenu/>
            </section>
        </section>
    );
};

    export default Profile;