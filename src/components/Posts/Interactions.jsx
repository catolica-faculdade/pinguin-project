import LikeIcon from "./LikeIcon";
import CommentIcon from "./CommentIcon";

function Interactions({postId, interactions, comment}){

    if (!comment){
        return(
            <div className="flex gap-3">
                <LikeIcon likeNumber={interactions.like}/>
                <CommentIcon postId={postId} comment={interactions.comment}/>
            </div>
        );
    } else {
        return(
            <div>
                <LikeIcon/>
            </div>
        );
    }
}

export default Interactions;