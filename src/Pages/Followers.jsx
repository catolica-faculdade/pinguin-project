import { useState } from "react";
import LeftMenu from "../components/LeftMenu";
import RightMenu from "../components/RightMenu";
import FollowTab from "../components/FollowTab";
import NavBar from "../components/NavBar";

function Followers(){

    const followers = [
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
        <section>
            <NavBar/>
            <section className="flex bg-user-icon h-dvh pt-[8vh]">
                <LeftMenu/>
                <div className="w-full md:w-3/5 flex flex-col overflow-y-scroll">
                    {followers.map((user) => (
                        <FollowTab user={user} color="bg-follow-back-button" text="Seguir de Volta"/>
                    ))}
                </div>
                <RightMenu/>
            </section>
        </section>
    )
}

export default Followers;