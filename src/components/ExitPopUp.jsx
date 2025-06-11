function ExitPopUp() {
    return (
        <section className="w-screen h-screen bg-exit-pop-up fixed top-0 left-0 flex justify-center items-center">
            <div className="w-[50%] bg-[white]">
                <p className="">Você tem certeza disso?</p>
                <div>
                    <button className="w-[50%]">
                        Sair
                    </button>
                    <button className="w-[50%]">
                        Continuar na conta
                    </button>
                </div>
            </div>
        </section>
    );
}

export default ExitPopUp;