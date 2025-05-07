function MyUser({username, userFullname}){

    return(
        <div className="flex flex-col p-2 bg-tab gap-2 rounded-[18px] max-w-60 w-full">
            <div className="flex flex-col xmd:flex-row gap-1.5">
                <div className="flex justify-center">
                    <img
                    className="w-full max-w-15" 
                    src="/src/assets/images/profile-picture.svg"></img>
                </div>
                <div className="flex flex-col justify-center items-center text-center xmd:items-baseline xmd:text-start">
                    <div>
                        <p>{username}</p>
                    </div>
                    <div>
                        <p>{userFullname}</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col xmd:flex-row justify-center gap-3">
                <div className="flex bg-purple-create-post pl-2 pr-2 rounded-2xl">
                    <button>Criar publicação</button>
                </div>
                <div className="flex justify-center">
                    <p>Ver Perfil</p>
                </div>
            </div>
        </div>
    );
}

export default MyUser;