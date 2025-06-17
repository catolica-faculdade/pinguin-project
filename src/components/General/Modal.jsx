import { Link } from "react-router-dom";

function Modal({isOpen}){
    if (isOpen){
        return(
            <div className="bg-navbar absolute right-9 top-7 rounded-md">
                <Link to="/profile">
                    <div className="flex w-full border-b-black border p-2 items-center gap-3 rounded-t-md">
                        <img src="src\assets\images\profile-picture-no-background.png" className={`h-6`}/>
                        <p>Meu perfil</p>
                    </div>
                </Link>
                <Link to="/settings">
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

    
}

export default Modal;