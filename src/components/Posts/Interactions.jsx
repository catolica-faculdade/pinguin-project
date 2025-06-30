import LikeIcon from "./LikeIcon";
import CommentIcon from "./CommentIcon";

function Interactions({postId, interactions, comment, postPage}){

    if (!comment){
        return(
            <div className="flex gap-3">
                <LikeIcon likeNumber={interactions.like} postPage={postPage}/>
                <CommentIcon postId={postId} comment={interactions.comment} postPage={postPage}/>
            </div>
        );
    } else {
        return(
            <div>
                <LikeIcon postPage={postPage}/>
            </div>
        );
    }
}

export default Interactions;