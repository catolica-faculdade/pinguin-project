import React, {useState} from 'react';
import Modal from './Modal';
import { Link } from "react-router-dom";

export default function NavBar() {
    const [openModal, setOpenModal] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);

    function changeModal() {
        setOpenModal(!openModal);
    }
    function changeSearch(){
        setOpenSearch(!openSearch);
    }

    return (
        <nav className="top-nav-bar-mobile flex justify-between bg-navbar p-1 items-center fixed w-full h-[8vh] border-b hidden-navbar z-10" >
            <div className="pl-[10px]">
                <div className="w-[42px] h-[42px] bg-cube-gray-navbar rounded-[100px] p-[4px]">
                    <Link to="/home">
                        <img src='/pinguin-project/public/assets/images/logo-pinguIn-branca.png' />
                    </Link>
                </div>
            </div>
            <div className="pl-[15vw] md:max-xl:pl-[3vw]">
                <input className="bg-input-navbar rounded-[4px] pl-[10px] w-[40vh] md:max-xl:w-[39vw] h-[28px] color-text-search-bar outline-0"
                    placeholder="Pesquisar..." type="text" onClick={openSearch}/>
            </div>
            <div className="flex pr-50 items-center">
                <Link to="/home">
                    <div className="flex flex-col items-center">
                        <img className="w-[25px] pt-[4px]" src='/pinguin-project/public/assets/images/house-icon.png' />
                        <p className="text-[15px]">Início</p>
                    </div>
                </Link>
                <Link to="/notifications">
                    <div className="flex flex-col items-center pl-[30px]">
                        <img className="w-[25px]" src='/pinguin-project/public/assets/images/notifications-icon.png' />
                        <p className="text-[15px]">Notificações</p>
                    </div>
                </Link>
                <div className="flex items-center pl-[20px]">
                    <Link to="/profile">
                        <div className="rounded-[50%] p-[0px] items-center">
                            <img className="w-[45px] min-w-[45px]" src='/pinguin-project/public/assets/images/profile-picture.svg' />
                        </div>
                    </Link>
                    <div>
                        <img className="pl-[10px] min-w-7 cursor-pointer" onClick={changeModal} src='/pinguin-project/public/assets/images/down-arrow-icon.png'/>
                        <Modal isOpen={openModal} />
                    </div>
                </div>
            </div>
        </nav>
    );
}
