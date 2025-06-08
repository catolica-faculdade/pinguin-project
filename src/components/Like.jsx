import { useState } from "react";

function Like({likeNumber}){
    
    const [like, setLike] = useState(false);

    return(
        <div className="flex items-center gap-1">
            {like
            ?
            <img onClick={() => setLike(false)}
            src="src/assets/images/like-heart-red.svg"></img>
            :
            <img onClick={() => setLike(true)}
            src="src/assets/images/like-heart-white.svg"></img>
            }
            <p>{likeNumber}</p>
        </div>
    );
}

export default Like;