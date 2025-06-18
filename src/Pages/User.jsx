import { useState } from "react";
import LeftMenu from "../components/General/LeftMenu";
import NavBar from "../components/General/NavBar";
import RightMenu from "../components/General/RightMenu";
import ShowProfile from "../components/Profile/ShowProfile";
import { useLocation } from "react-router-dom";

function User(){

    const [username, setUsername] = useState('');
    const [fullName, setFullName] = useState('');
    const [about, setAbout] = useState('');
    const { pathname } = useLocation();
    const userPath = pathname.slice(1);
    console.log(userPath);

    const user = [
        {
            id: 1,
            username: 'gfloriano',
            userFullname: 'Gustavo Floriano',
            about: 'Cristiano Lionel Ronaldo Neymar da Silva Messi Jr.',
            streak: 0,
            postsNumber: 10,
            followers: 19,
            following: 23
        },
        {
            id: 2,
            username: 'vh',
            userFullname: 'Vitor Hugo da Cunha',
            about: 'Sou anão e bobalhão',
            streak: 0,
            postsNumber: 10,
            followers: 19,
            following: 23
        },
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
    return(
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
            <LeftMenu/>
            {user.map((user) => {
                if(user.username === userPath){
                    <ShowProfile posts={posts} onClick={() => setEditMode(true)}/>
                }
            })}
            <RightMenu/>
            </section>
        </section>
    );
}

export default User;