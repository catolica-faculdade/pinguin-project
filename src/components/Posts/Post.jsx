import { Link } from "react-router-dom";
import Interactions from "./Interactions";
import { useState } from "react";
import OtherPostOptionsPopUp from "./OthersPostOptionsPopUp";
import PostOptionsPopUp from "./PostOptionsPopUp"

function Post({id, content}){
    const [openOptionsOther, setOpenOptionsOther] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);

    const user = content.user;
    
    function openPopUp(){
        if (content.user.username == "gfloriano"){
            setOpenOptions(!openOptions);
        } else {
            setOpenOptionsOther(!openOptionsOther);
        }
    }

    const post = {
        interactions: {like: '10k', comment: '1.3k'}
    };

    return(
        <div className="bg-navbar max-w-xl w-3/3 flex flex-col gap-3 p-3 pl-6 pr-6 border-1 rounded-2xl relative">
            <div className="flex justify-between">
                <div className='flex items-center gap-3'>
                    <div className='select-none w-12'>
                        <Link to={`/${user.username}`} className="cursor-pointer"><img className='w-full' src='assets/images/profile-picture.svg'></img></Link>
                    </div>
                    <div className='flex flex-col justify-start'>
                        <Link to={`/${user.username}`} className='flex items-center pr-8'>
                            <p>@{user.username}</p>
                        </Link>
                        <Link to={`/${user.username}`}>{user.userFullname}</Link>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <img src="assets/images/post-options-icon.svg" onClick={openPopUp}></img>
                </div>
            </div>
            <Link to={`/post/${id}`}>
                <div className="text pb-3">
                    <p>{content.title}</p>
                </div>
                <div className="content bg-tab w-full h-75 flex justify-center items-center pointer-events-none select-none">
                    {content.image
                    ?
                    <img className="h-fit" src={content.image}></img>
                    :
                    <img className="h-fit" src="assets/images/placeholder-image.png"></img>
                    }
                </div>
            </Link>
            <PostOptionsPopUp setOpenOptions={setOpenOptions} openOptions={openOptions}/>
            <Interactions postId={id} interactions={post.interactions}/>
            <OtherPostOptionsPopUp openOptionsOther={openOptionsOther} setOpenOptionsOther={setOpenOptionsOther}/>
        </div>
    )
}

export default Post;