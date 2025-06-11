function Comment({comment}){
    return(
        <div className="flex items-center gap-1">
            <img src="src/assets/images/comment.svg"></img>
            <p>{comment}</p>
        </div>
    );
}

export default Comment;