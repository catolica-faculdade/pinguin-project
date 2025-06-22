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
    const [about, setAbout] = useState('Cristiano Lionel Ronaldo Neymar da Silva Messi Jr.');

    const user = {
        id: 1,
        username: username,
        userFullname: fullName,
        about: about,
        streak: 0,
        postsNumber: 10,
        followers: 19,
        following: 23
    }

    const posts = [
        {
            id: 1,
            title: 'fui na casa do meu amigo...',
            image: null,
            user: user
        },
        {
            id: 2,
            title: 'gente, olha meu código novo...',
            image: '/public/posts/novo-codigo.png',
            user: user
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
            <EditProfile user={user} posts={posts} onClick={() => setEditMode(false)} setUsername={setUsername} setFullName={setFullName} setAbout={setAbout}/>
            :
                <ShowProfile user={user} posts={posts} onClick={() => setEditMode(true)}/>
            }
            <RightMenu/>
            </section>
        </section>
    );
};

export default Profile;