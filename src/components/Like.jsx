function Like({like}){
    return(
        <div className="flex items-center gap-1">
            <img src="src/assets/images/like-heart-white.svg"></img>
            <p>{like}</p>
        </div>
    );
}

export default Like;