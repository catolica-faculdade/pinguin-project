function Post({user}){
    return(
        <div className="bg-navbar max-w-xl w-3/3 flex flex-col gap-3 p-3 pl-6 pr-6 border-1 rounded-2xl">
            <div className="flex justify-between">
                <div className='flex items-center gap-3'>
                    <div className='pointer-events-none select-none w-12'>
                        <img className='w-full' src='/src/assets/images/profile-picture.svg'></img>
                    </div>
                    <div className='flex flex-col justify-start'>
                        <div className='flex items-center pr-8'>
                            <p>{user.username}</p>
                        </div>
                        <p>{user.userFullname}</p>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <img src="/src/assets/images/post-options-icon.svg"></img>
                </div>
            </div>
            <div className="text">
                <p>Fui na casa do meu amigo...</p>
            </div>
            <div className="content bg-tab w-full h-75 flex justify-center items-center pointer-events-none select-none">
                <img className="h-fit" src="/src/assets/images/placeholder-image.png"></img>
            </div>
            <div className="interactions">

            </div>
        </div>
    )
}

export default Post;