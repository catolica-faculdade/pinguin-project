import { Link } from "react-router-dom";
import Interactions from "./Interactions";
import { useState } from "react";
import OtherPostOptionsPopUp from "./OthersPostOptionsPopUp";
import PostOptionsPopUp from "./PostOptionsPopUp"
import Comment from "./Comment"

function OpenPost({content}){
    const [openOptionsOther, setOpenOptionsOther] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const user = content.user;
    const comments = content.comments;
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
        <div className="bg-navbar max-w-xl w-3/3 flex flex-col gap-3 p-3 pl-6 pr-6 border-1 rounded-t-2xl relative">
            <div className="flex items-center gap-3">
                <img src="/src/assets/images/left-arrow.png" alt="" className="h-5" />
                <h1 className="font-semibold">Home</h1>
            </div>
            <div className="flex justify-between">
                <div className='flex items-center gap-3'>
                    <div className='select-none w-12'>
                        <Link to={`/${user.username}`} className="cursor-pointer"><img className='w-full' src='/src/assets/images/profile-picture.svg'></img></Link>
                    </div>
                    <div className='flex flex-col justify-start'>
                        <Link to={`/${user.username}`} className='flex items-center pr-8'>
                            <p>@{user.username}</p>
                        </Link>
                        <Link to={`/${user.username}`}>{user.userFullname}</Link>
                    </div>
                </div>
                <div className="cursor-pointer">
                    <img src="/src/assets/images/post-options-icon.svg" onClick={openPopUp}></img>
                </div>
            </div>
            <div className="text">
                <p>{content.title}</p>
            </div>
            <div className="content bg-tab w-full h-75 flex justify-center items-center pointer-events-none select-none">
                {content.image
                ?
                <img className="h-fit" src={content.image}></img>
                :
                <img className="h-fit" src="/src/assets/images/placeholder-image.png"></img>
                }
            </div>
            <PostOptionsPopUp setOpenOptions={setOpenOptions} openOptions={openOptions}/>
            <Interactions interactions={post.interactions}/>
            <OtherPostOptionsPopUp openOptionsOther={openOptionsOther} setOpenOptionsOther={setOpenOptionsOther}/>
            {comments.map((comment) => (
                <div className='flex justify-center'>
                    <Comment key={comment.id} content={comment}/>
                </div>
            ))}
        </div>
    )
}

export default OpenPost;