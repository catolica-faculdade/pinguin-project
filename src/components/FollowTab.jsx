import FollowActions from "./FollowActions";

function FollowTab({user}){
    return(
        <div className="w-full bg-navbar flex justify-between p-4 border-b-gray-800 border">
            <div className="flex items-center gap-3">
                <div>
                    <img className='w-full' src='/src/assets/images/profile-picture.svg'></img>
                </div>
                <div>
                    <p>@{user.username}</p>
                    <p>{user.fullname}</p>
                </div>
            </div>
            <FollowActions color="bg-following-button"
            text="Seguindo"/>
        </div>
    );
}

export default FollowTab;