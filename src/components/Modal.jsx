import { Link } from "react-router-dom";

function Modal({isFromNavbar, isOpen}){
    const postId = 1;
    if (isOpen){
        if (isFromNavbar){
            return(
                <div className="bg-navbar absolute right-9 top-7 rounded-md">
                    <Link to="/profile">
                        <div className="flex w-full border-b-black border p-2 items-center gap-3 rounded-t-md">
                            <img src="src\assets\images\profile-picture-no-background.png" className={`h-6`}/>
                            <p>Meu perfil</p>
                        </div>
                    </Link>
                    <Link to="/configurations">
                        <div className="flex w-full border-black p-2 items-center gap-3 border-l border-r">
                            <img src="src\assets\images\config-icon.png" className={`h-6`}/>
                            <p>Configurações</p>
                        </div>
                    </Link>
                    <Link to="/leave">
                        <div className="flex w-full bg-modal-red border-b-black border p-2 items-center gap-3 rounded-b-md">
                            <img src="src\assets\images\leave-icon.png" className={`h-6`}/>
                            <p>Sair</p>
                        </div>
                    </Link>
                </div>
            );
        }
        return(
                <div className="rounded-lg border border-black bg-navbar">
                    <Link to={`/pin/${postId}`}>
                        <div className="flex w-full border-b-black border">
                            <p>Fixar</p>
                            <img src="src\assets\images\pin-icon.png" className={`h-6`}/>
                        </div>
                    </Link>
                    <Link to={`/update/${postId}`}>    
                        <div className="flex w-full border-b-black border">
                            <img src="src\assets\images\pencil-empty-icon.png" className={`h-6`}/>
                            <p>Alterar</p>
                        </div>
                    </Link>
                    <Link to={`/delete/${postId}`}>
                        <div className="flex w-full bg-modal-red border-b-black border">
                            <img src="src\assets\images\trash-gray-icon.png" className={`h-6`}/>
                            <p>Deletar</p>
                        </div>
                    </Link>
                </div>
            );
    }

    
}

export default Modal;