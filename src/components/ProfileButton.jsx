function ProfileButton({onClick, text, color}){

    return(
        <button className={`hidden md:flex bg-navbar w-36 justify-center p-1 
        border-2 ${color} rounded-xl hover:cursor-pointer`}
        onClick={onClick}>
            <p>{text}</p>
        </button>
    );
}

export default ProfileButton;