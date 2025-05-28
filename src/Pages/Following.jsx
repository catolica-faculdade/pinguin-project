import { useState } from "react";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import FollowTab from "../components/FollowTab";

function Following(){

    const following = [
        {
            username: 'gaucho',
            fullname: 'João Constantino Caetano',
        },
        {
            username: 'johanngr14',
            fullname: 'Johann Gossen Ruth',
        },
        {
            username: 'vh',
            fullname: 'Vitor Hugo da Cunha',
        },
        {
            username: 'gabbosco',
            fullname: 'Gabriel Bosco',
        }
    ];

    return (
        <div className="flex">
            <LeftMenu/>
            <div className="w-full md:w-3/5 flex flex-col overflow-y-scroll">
                {/* <p>oi</p> */}
                {following.map((user) => (
                    // <p>oi</p>
                    <FollowTab user={user}/>
                ))}
            </div>
            <RightMenu/>
        </div>
    )
}

export default Following;