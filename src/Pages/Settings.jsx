import LeftMenu from "../components/General/LeftMenu";
import RightMenu from "../components/General/RightMenu";
import NavBar from "../components/General/NavBar";
import TitleBar from "../components/General/TitleBar";
import Setting from "../components/General/Setting";
import { useState } from "react";
import ExitPopUp from "../components/ExitPopUp";


function SettingsPage() {
    const [toggles, setToggles] = useState([
        { id: 1, checked: false },
        { id: 3, checked: false }
    ]);
    const [exitPopUp, setExitPopUp] = useState(false);

    function changeExitPopUp() {
        setExitPopUp(!exitPopUp);
    }
    const handleToggle = (id) => {
        setToggles((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        )
        );
    };

    const getChecked = (id) => toggles.find((item) => item.id === id)?.checked ?? false;

    return (
        <section>
        <NavBar />
            <section className="flex h-dvh pt-[8vh]">
                <LeftMenu />
                <div className="w-full h-full md:w-3/5 flex flex-col justify-between">
                    <div>
                        <TitleBar text={"Configurações"} />
                        <Setting text={"Notificações"} toggle={true} id={1} link="/notificacoes" checked={getChecked(1)} onToggle={handleToggle}/>
                        <Setting text={"Idioma"} toggle={false} id={2} link="/idiomas"/>
                        <Setting text={"Modo escuro"} toggle={true} id={3} checked={getChecked(3)} onToggle={handleToggle} />
                        <Setting text={"Conta"} toggle={false} id={4} link="/conta" />
                        <Setting text={"Ajuda"} toggle={false} id={5} link="/ajuda" />
                    </div>
                    <ExitPopUp exitPopUp={exitPopUp} setExitPopUp={setExitPopUp}/>
                    <div>
                        <div className="flex justify-center items-center cursor-pointer" onClick={changeExitPopUp}>
                            <div className="flex bg-modal-red text-center border-b border-t border-black w-full h-18 items-center justify-center p-2 pl-5 pr-5">
                                <p className="text-white">Desconectar</p>
                            </div>
                        </div>   
                    </div>
                </div>
                <RightMenu />
            </section>
        </section>
    );
}

export default SettingsPage;
