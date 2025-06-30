import { useState } from "react";

function LikeIcon({likeNumber, postPage}){
    
    const [like, setLike] = useState(false);

    if(postPage){
        return(
            <div className="flex items-center gap-1">
                {like
                ?
                <img onClick={() => setLike(false)}
                src="../assets/images/like-heart-red.svg"
                className="cursor-pointer"></img>
                :
                <img onClick={() => setLike(true)}
                src="../assets/images/like-heart-white.svg"
                className="cursor-pointer"></img>
                }
                <p>{likeNumber}</p>
            </div>
        )
    }

    return(
        <div className="flex items-center gap-1">
            {like
            ?
            <img onClick={() => setLike(false)}
            src="assets/images/like-heart-red.svg"
            className="cursor-pointer"></img>
            :
            <img onClick={() => setLike(true)}
            src="assets/images/like-heart-white.svg"
            className="cursor-pointer"></img>
            }
            <p>{likeNumber}</p>
        </div>
    );
}

export default LikeIcon;