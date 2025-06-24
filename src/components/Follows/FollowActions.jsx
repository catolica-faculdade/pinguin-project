function FollowActions({color, text, onClick}){
    return(
        <div className="flex justify-center items-center w-1/5 min-w-26">
            <button className={`${color} border-2 border-zinc-800 w-full rounded-md cursor-pointer`}
            onClick={onClick}>
                <p className="text-white text-sm">{text}</p>
            </button>
        </div>
    );
}

export default FollowActions;