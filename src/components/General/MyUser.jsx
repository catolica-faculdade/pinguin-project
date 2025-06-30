import { Link } from "react-router-dom";

function MyUser({username, userFullname, onClick, postPage}){

    return(
        <div className="flex flex-col p-2 bg-tab gap-2 rounded-[18px] max-w-60 w-full">
            <div className="flex flex-col xmd:flex-row gap-1.5">
                <div className="flex justify-center">
                {postPage
                ?
                <img
                className="w-full max-w-15" 
                src="../assets/images/profile-picture.svg">
                </img>
                :
                <img
                className="w-full max-w-15" 
                src="assets/images/profile-picture.svg">
                </img>
                }
                </div>
                <div className="flex flex-col justify-center items-center text-center xmd:items-baseline xmd:text-start">
                    <div>
                        <p>{username}</p>
                    </div>
                    <div>
                        <p>{userFullname}</p>
                    </div>
                </div>
            </div>
            <div className="flex items-center flex-col xmd:flex-row justify-center gap-3">
                <div className="flex bg-purple-create-post bg-red-500 pl-2 pr-2 py-[3px] rounded-2xl cursor-pointer">
                    <button onClick={onClick} className="cursor-pointer">Criar publicação</button>
                </div>
                <Link to="/profile">
                    <div className="flex justify-center">
                        <p>Ver Perfil</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MyUser;