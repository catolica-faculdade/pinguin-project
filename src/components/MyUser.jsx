function MyUser({username, userFullname}){

    return(
        <div className="flex flex-col p-2 bg-tab gap-2 rounded-[18px]">
            <div className="flex gap-1.5">
                <div>
                    <img
                    className="w-12" 
                    src="/src/assets/images/profile-picture.svg"></img>
                </div>
                <div>
                    <div>
                        <p>{username}</p>
                    </div>
                    <div>
                        <p>{userFullname}</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-3">
                <div className="bg-purple-create-post pl-2 pr-2 rounded-2xl">
                    <button>Criar publicação</button>
                </div>
                <div>
                    <p>Ver Perfil</p>
                </div>
            </div>
        </div>
    );
}

export default MyUser;