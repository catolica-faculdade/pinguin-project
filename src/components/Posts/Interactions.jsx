import LikeIcon from "./LikeIcon";
import CommentIcon from "./CommentIcon";

function Interactions({interactions}){

    return(
        <div className="flex gap-3">
            <LikeIcon likeNumber={interactions.like}/>
            <CommentIcon comment={interactions.comment}/>
        </div>
    );
}

export default Interactions;