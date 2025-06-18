function Comment({content}){
        return(
        <div className="flex items-center gap-1 justify-between w-full">
            <div className="flex gap-3 items-center">
                <div>
                    <img src="/src/assets/images/profile-picture.svg"/>
                </div>
                <div>
                    <div>
                        <p>@{content.user.username}</p>
                        <p>{content.comment}</p>

                    </div>
                </div>
            </div>
            <div>
                <p>S2</p>
            </div>
        </div>
    );
}

export default Comment;