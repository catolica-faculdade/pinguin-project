function ProfileButton({onClick, text, color}){

    return(
        <button className={`bg-navbar min-w-36 max-w-[575px] w-full justify-center p-1 
        border-2 ${color} rounded-xl hover:cursor-pointer`}
        onClick={onClick}>
            <p>{text}</p>
        </button>
    );
}

export default ProfileButton;