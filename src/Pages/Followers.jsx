import { useEffect, useState } from "react";
import LeftMenu from "../components/General/LeftMenu";
import RightMenu from "../components/General/RightMenu";
import FollowTab from "../components/Follows/FollowTab";
import NavBar from "../components/General/NavBar";
import TopNavMobile from "../components/Mobile/TopNavMobile";
import NavBarMobile from "../components/Mobile/NavBarMobile";

function Followers() {
    const [followers, setFollowers] = useState([]);
    const [buttonState, setButtonState] = useState([]);

    const data = [
        { id: 1, username: 'gaucho', fullname: 'João Constantino Caetano', follower: true, following: true },
        { id: 2, username: 'johanngr14', fullname: 'Johann Gossen Ruth', follower: false, following: true },
        { id: 3, username: 'vh', fullname: 'Vitor Hugo da Cunha', follower: true, following: false },
        { id: 4, username: 'gabbosco', fullname: 'Gabriel Bosco', follower: true, following: true }
    ];

    function setFollow(id){

        setFollowers((prevFollowers) => 
            prevFollowers.map(user => 
                user.id === id ? { ...user, following: !user.following } : user
            )
        )

        setButtonState((prev) => {
            
            let user = prev[id] || followers.find((user) => user.id === id);
            let isFollowing = user.following;
            let follower = user.follower;

            if(user.follower === true){
                return{
                    ...prev,
                    [id]: {
                        color: isFollowing ? 'bg-following-button' : 'bg-follow-back-button',
                        text: isFollowing ? 'Seguindo' : 'Seguir de Volta',
                        follower: follower,
                        following: !isFollowing
                    }
                }
            }

            return{
                ...prev,
                [id]: {
                    color: isFollowing ? 'bg-following-button' : 'bg-follow-button',
                    text: isFollowing ? 'Seguindo' : 'Seguir',
                    follower: follower,
                    following: !isFollowing
                }
            }
        })
    }

    useEffect(() => {
        setFollowers(data);
    }, [])

    return (
        <section>
            <head>
                <title>Seguidores | Pinguin</title>
            </head>
            <NavBar />
            <TopNavMobile />
            <section className="flex bg-user-icon h-dvh pt-[47px] md:pt-[8vh]">
                <LeftMenu />
                <div className="w-full md:w-3/5 flex flex-col overflow-y-scroll">
                {followers.map((user) => {
                    const state = buttonState[user.id];
                    const isFollowing = state ? state.following : user.following; 
                    const follower = state ? state.follower : user.follower;
                    let color = isFollowing ? 'bg-following-button' : 'bg-follow-back-button';
                    let text = isFollowing ? 'Seguindo' : 'Seguir de Volta';

                    if(!follower){
                        color = isFollowing ? 'bg-following-button' : 'bg-follow-button';
                        text = isFollowing ? 'Seguindo' : 'Seguir';
                    }

                    return (
                    <FollowTab
                        key={user.id}
                        user={user}
                        color={color}
                        text={text}
                        onClick={() => setFollow(user.id)}
                    />
                    );
                })}
                </div>
                <RightMenu />
            </section>
            <NavBarMobile />
        </section>
    );
}

export default Followers;