import { Link } from "react-router-dom";
import ExitPopUp from "../ExitPopUp";
import React, {useState} from 'react';

function Modal({isOpen}){
    const [exitPopUp, setExitPopUp] = useState(false);

    function changeExitPopUp(){
        setExitPopUp(!exitPopUp);
    };


    if (isOpen){
        return(
            <div className="bg-navbar absolute right-9 top-7 rounded-md">
                <Link to="/profile">
                    <div className="flex w-full border-b-black border p-2 items-center gap-3 rounded-t-md">
                        <img src="assets\images\profile-picture-no-background.png" className={`h-6`}/>
                        <p>Meu perfil</p>
                    </div>
                </Link>
                <ExitPopUp exitPopUp={exitPopUp} setExitPopUp={setExitPopUp}/>
                <Link to="/settings">
                    <div className="flex w-full border-black p-2 items-center gap-3 border-l border-r">
                        <img src="assets\images\config-icon.png" className={`h-6`}/>
                        <p>Configurações</p>
                    </div>
                </Link>
                <button className="w-full" onClick={changeExitPopUp}>
                    <div className="flex w-full bg-modal-red border-b-black border p-2 items-center gap-3 rounded-b-md">
                        <img src="assets\images\leave-icon.png" className={`h-6`}/>
                        <p className="text-white">Sair</p>
                    </div>
                </button>
            </div>
        );
    }

    
}

export default Modal;