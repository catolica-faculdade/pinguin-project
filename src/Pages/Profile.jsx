import { useState } from 'react';
import NavBar from '../components/General/NavBar';
import LeftMenu from '../components/General/LeftMenu';
import RightMenu from '../components/General/RightMenu';
import ShowProfile from '../components/Profile/ShowProfile';
import EditProfile from '../components/Profile/EditProfile';

function Profile() {

    const [editMode, setEditMode] = useState(false);
    const [username, setUsername] = useState('gfloriano');
    const [fullName, setFullName] = useState('Gustavo Floriano');
    const [about, setAbout] = useState('"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."');

    const user = [
        {
            username: username,
            userFullname: fullName,
            about: about,
            streak: 0,
            postsNumber: 10,
            followers: 19,
            following: 23
        }
    ]

    const posts = [
        {
            id: 1,
            title: 'fui na casa do meu amigo...',
            image: null,
            user: user[0]
        },
        {
            id: 2,
            title: 'gente, olha meu código novo...',
            image: '/public/posts/novo-codigo.png',
            user: user[0]
        }
    ];

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
            <LeftMenu/>
            {editMode
            ?
                <EditProfile posts={posts} onClick={() => setEditMode(false)} setUsername={setUsername} setFullName={setFullName} setAbout={setAbout}/>
            :
                <ShowProfile posts={posts} onClick={() => setEditMode(true)}/>
            }
            <RightMenu/>
            </section>
        </section>
    );
};

export default Profile;