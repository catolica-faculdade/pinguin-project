import Interactions from "./Interactions";

function Comment({content}){
    return(
        <div className="flex items-center gap-1 justify-between w-full">
            <div className="flex gap-3 items-center">
                <div className="max-w-10">
                    <img src="../assets/images/profile-picture.svg"/>
                </div>
                <div>
                    <div className="text-sm">
                        <p>@{content.user.username}</p>
                        <p>{content.comment}</p>
                    </div>
                </div>
            </div>
            <div>
                <Interactions comment={true} postPage={true}/>
            </div>
        </div>
    );
}

export default Comment;