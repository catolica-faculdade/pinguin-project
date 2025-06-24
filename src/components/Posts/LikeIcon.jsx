import { useState } from "react";

function LikeIcon({likeNumber}){
    
    const [like, setLike] = useState(false);

    return(
        <div className="flex items-center gap-1">
            {like
            ?
            <img onClick={() => setLike(false)}
            src="/src/assets/images/like-heart-red.svg"
            className="cursor-pointer"></img>
            :
            <img onClick={() => setLike(true)}
            src="/src/assets/images/like-heart-white.svg"
            className="cursor-pointer"></img>
            }
            <p>{likeNumber}</p>
        </div>
    );
}

export default LikeIcon;