import Like from "./Like";
import Comment from "./Comment";

function Interactions({interactions}){

    return(
        <div className="flex gap-3">
            <Like likeNumber={interactions.like}/>
            <Comment comment={interactions.comment}/>
        </div>
    );
}

export default Interactions;