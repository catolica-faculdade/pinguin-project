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

    const users = [
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
            user: users[0]
        },
        {
            id: 2,
            title: 'gente, olha meu código novo...',
            image: '/public/posts/novo-codigo.png',
            user: users[1]
        }
    ];

    const selectedUser = users.find(user => user.username === userPath);
    const userPosts = posts.filter(post => post.user.username === userPath);
    return(
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
            <LeftMenu/>
            {selectedUser 
            ?
                <ShowProfile user={selectedUser} posts={userPosts}/>
            :
                <div className="text-center w-full md:w-3/5 p-8">Usuário não encontrado.</div>
            }
            <RightMenu/>
            </section>
        </section>
    );
}

export default User;