import { Link } from "react-router-dom";

function CommentIcon({postId, comment, postPage}){

    if(postPage){
        return(
            <Link to={`/post/${postId}`} 
            className="flex items-center gap-1">
                <img src="../assets/images/comment.svg"></img>
                <p>{comment}</p>
            </Link>
        );
    }
    return(
        <Link to={`/post/${postId}`} 
        className="flex items-center gap-1">
            <img src="assets/images/comment.svg"></img>
            <p>{comment}</p>
        </Link>
    );
}

export default CommentIcon;