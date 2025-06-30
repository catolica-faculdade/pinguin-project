import { useState } from "react";
import LeftMenu from "../components/General/LeftMenu";
import NavBar from "../components/General/NavBar";
import RightMenu from "../components/General/RightMenu";
import ShowProfile from "../components/Profile/ShowProfile";
import { useLocation } from "react-router-dom";
import TopNavMobile from "../components/Mobile/TopNavMobile";
import NavBarMobile from "../components/Mobile/NavBarMobile";

function User(){

    const [follow, setFollow] = useState(false);
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
        {
            id: 3,
            username: 'gaucho',
            userFullname: 'João Constantino Caetano',
            about: 'Baaah gurizada, vamo grêmioo. tomar meu chimas aqui meu',
            streak: 0,
            postsNumber: 0,
            followers: 0,
            following: 0
        },
        {
            id: 4,
            username: 'gabbosco',
            userFullname: 'Gabriel Grabowski Bosco',
            about: 'opa meus quiridoxx',
            streak: 0,
            postsNumber: 0,
            followers: 0,
            following: 0
        },
        {
            id: 5,
            username: 'johanngr14',
            userFullname: 'Johann Gossen Ruth',
            about: 'Sou legal as vezes (nao gosto do @gfloriano >:D )',
            streak: 0,
            postsNumber: 0,
            followers: 0,
            following: 0 
        }
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
            <TopNavMobile />
            <section className='flex bg-user-icon pt-[50px] md:pt-[8vh] h-dvh'>
            <LeftMenu/>
            {selectedUser 
            ?
                <ShowProfile user={selectedUser} posts={userPosts} follow={follow} setFollow={setFollow} otherUser/>
            :
                <div className="text-center w-full md:w-3/5 p-8">Usuário não encontrado.</div>
            }
            <RightMenu/>
            </section>
            <NavBarMobile />
        </section>
    );
}

export default User;