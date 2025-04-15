function CoverPage(){
    // conversa com a api aqui



    return (
        // retorna no 'html' pela main aqui

            <div>
                <nav className="flex justify-evenly bg-navbar p-3 items-center">
                    <div>
                        <div className="pl-[20px bg-cube-gray-navbar]"></div>
                    </div>
                    <div>
                        <input className="bg-input-navbar rounded-[4px] pl-[10px] text-black placeholder-black placeholder:font-sans " 
                         placeholder="Pesquisar..." type="text" />
                    </div>
                    <div>
                        <a className="pl-[10px]">Inicio</a>
                        <a className="pl-[10px]">Notificação</a>
                        <a className="pl-[10px]">Login</a>
                    </div>
                </nav>
            </div>
    );
}

export default CoverPage;