function FollowActions({color, text}){
    return(
        <div className="flex justify-center items-center w-1/5">
            <button className={`${color} border-2 border-zinc-800 w-full rounded-md`}>
                <p className="text-white text-sm">{text}</p>
            </button>
        </div>
    );
}

export default FollowActions;