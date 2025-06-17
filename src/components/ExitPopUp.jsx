import { Link } from "react-router-dom";

function ExitPopUp({exitPopUp, setExitPopUp}) {
    function changeExitPopUp() {
        setExitPopUp(!exitPopUp);
    }

    return (
        <div className="z-10">
            {exitPopUp && (
                <section className="w-screen h-screen bg-exit-pop-up fixed top-0 left-0 flex justify-center items-center">
                    <div className="w-[50%] xl:w-[30%] 2xl:w-[25%] max-sm:w-[80%] xl:text-lg bg-[white] flex flex-col rounded-md">
                        <p className="h-[5rem] self-center content-center text-center">Você tem certeza disso?</p>
                        <div className="flex">
                            <Link to={"/"} className="w-[50%] text-center flex items-center justify-center bg-modal-red text-white border border-black rounded-bl-md h-[3rem]">
                                Sair
                            </Link>
                            <button onClick={changeExitPopUp} className="w-[50%] border border-black rounded-br-md h-[3rem] px-[1rem]">
                                Continuar na conta
                            </button> 
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}

export default ExitPopUp;