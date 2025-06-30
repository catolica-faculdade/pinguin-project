import { Link } from "react-router-dom";
import FollowActions from "./FollowActions";

function FollowTab({user, text, color, onClick}){
    return(
        <div className="w-full bg-navbar flex justify-between p-4 border-b-gray-800 border">
            <div className="flex items-center gap-3">
                <div>
                    <Link to={`/${user.username}`}><img className='md:w-full min-w-10' src='assets/images/profile-picture.svg'></img></Link>
                </div>
                <div className="flex flex-col">
                    <Link to={`/${user.username}`}>@{user.username}</Link>
                    <Link to={`/${user.username}`}>{user.fullname}</Link>
                </div>
            </div>
            <FollowActions color={color}
            text={text} onClick={onClick}/>
        </div>
    );
}

export default FollowTab;