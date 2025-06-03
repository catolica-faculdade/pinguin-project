import { useEffect, useState } from "react";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import FollowTab from "../components/FollowTab";
import NavBar from "../components/NavBar";

function Followers() {
    const [followers, setFollowers] = useState([]);
    const [buttonState, setButtonState] = useState([]);

    const data = [
        { id: 1, username: 'gaucho', fullname: 'João Constantino Caetano', follower: true, following: true },
        { id: 2, username: 'johanngr14', fullname: 'Johann Gossen Ruth', follower: true, following: true },
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
            return{
                ...prev,
                [id]: {
                    color: isFollowing ? 'bg-following-button' : 'bg-follow-back-button',
                    text: isFollowing ? 'Seguindo' : 'Seguir de Volta',
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
            <NavBar />
            <section className="flex bg-user-icon h-dvh pt-[8vh]">
                <LeftMenu />
                <div className="w-full md:w-3/5 flex flex-col overflow-y-scroll">
                {followers.map((user) => {
                    const state = buttonState[user.id];
                    const isFollowing = state ? state.following : user.following; 
                    const color = isFollowing ? 'bg-following-button' : 'bg-follow-back-button';
                    const text = isFollowing ? 'Seguindo' : 'Seguir de Volta';

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
        </section>
    );
}

export default Followers;