import Like from "./Like";
import Comment from "./Comment";

function Interactions({interactions}){

    console.log(interactions)
    return(
        <div className="flex gap-3">
            <Like like={interactions.like}/>
            <Comment comment={interactions.comment}/>
        </div>
    );
}

export default Interactions;