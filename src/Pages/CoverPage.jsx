function CoverPage(){
    // conversa com a api aqui



    return (
        // retorna no 'html' pela main aqui

            <div>
                <nav className="md:flex justify-between bg-navbar p-1 items-center hidden">
                    <div className="pl-[10px]">
                        <div className="w-[35px] h-[35px] bg-cube-gray-navbar rounded-[4px] md:">
                            <img src='src/assets/images/logo-pinguIn-branca.png'/>
                        </div>
                    </div>
                    <div className="pl-[200px]">
                        <input className="bg-input-navbar rounded-[4px] pl-[10px] w-[300px] text-black placeholder-black placeholder:font-sans " 
                         placeholder="Pesquisar..." type="text" />
                    </div>
                    <div className="flex pr-[30px] items-center">
                        <div className="flex flex-col items-center">
                            <img className="w-[25px] pt-[4px]" src='src/assets/images/house-icon.png'/>
                            <a className="text-[15px]">Inicio</a>
                        </div>
                        <div className="flex flex-col items-center pl-[30px]">
                            <img className="w-[25px]" src='src/assets/images/notifications-icon.png'/>
                            <a className="text-[15px]">Notificação</a>
                        </div>
                        <div className="flex items-center pl-[20px]">
                            <div className="rounded-[50%] bg-icon-user p-[2px] items-center">
                                <img className="w-[35px] min-w-[35px]" src='src/assets/images/user-icon-black.png'/>
                            </div>
                            <div>
                                <img className="pl-[10px] min-w-[25px]" src='src/assets/images/down-arrow-icon.png'/>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="bg-[url('/src/assets/images/background.png')] bg-cover h-[150px] w-[auto] md:bg-cover md:h-[380px] md:w-[auto] bg-center h-64 w-full w "></div>
                <div className="md:m-[40px] mt-[20px] flex items-center">
                    <img className="ml-[20px] w-auto h-[70px] md:w-auto md:h-[150px]" src="/src/assets/images/logo-pinguIn-roxo.png"/>
                    <p className="pl-5 text-[17px] md:text-[40px]">Saiba mais sobre o</p>
                    <div className="flex text-[17px] md:text-[40px]">
                        <p className="pl-[7px]">Pingu</p>
                        <p className="text-[#854DA6] font-bold">In</p>
                    </div>
                </div>
                <div className="m-[30px] md:m-[50px]">
                    <div>
                        <p className="text-[20px] font-bold md:text-[30px] md:font-bold">Sobre o projeto</p>
                        <br/>
                        <div className="ml-[10px] md:text-[20px] text-[17px]">
                            <a>Este projeto foi desenvolvido por um grupo de estudantes universitários 
                                como parte das atividades da disciplina ministrada pelo professor
                                 Claudinei Dias. A proposta consistiu na criação de uma interface 
                                 digital para um website, com foco na aplicação de boas práticas de UI 
                                 (User Interface) e UX (User Experience) Design.</a>
                            <br/>
                            <br/>
                            <a>Para atender aos requisitos da atividade, utilizamos ferramentas de 
                                prototipagem profissional, como o Figma, buscando alinhar estética, 
                                funcionalidade e usabilidade em todas as etapas do desenvolvimento.</a>
                            <br/>
                            <br/>
                            <a> Nossa equipe optou por idealizar uma rede social como tema central do 
                                projeto. A plataforma foi concebida com o objetivo de promover a 
                                interação entre os usuários por meio de postagens, reações, comentários 
                                e outros recursos típicos de redes sociais contemporâneas.</a>
                        </div>
                    </div>
                <div>
                    <br />
                    <br />
                    <p className="text-[20px] md:text-[30px] font-bold">Nosso time de desenvolvedores</p>
                    <br />
                    <br />
                    <div className="flex justify-evenly">
                        <div className="flex flex-col justify-center items-center">
                            <img className="md:w-[300px] md:max-h-[auto] max-w-[70px] max-h-[auto]" src="/src/assets/images/gustavo.png"/>
                            <p className="text-[14px] md:text-[20px]">Gustavo Floriano</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="md:w-[300px] md:max-h-[auto] max-w-[70px] max-h-[auto]" src="/src/assets/images/johann.png"/>
                            <p className="text-[14px] md:text-[20px]">Johann Ruth</p>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <img className="max-w-[70px] max-h-[auto] md:w-[300px] md:max-h-[auto]" src="/src/assets/images/joao.png"/>
                            <p className="text-[14px] md:text-[20px]">João Constantino</p>
                        </div>
                        <div className="md:flex flex-col justify-center items-center hidden">
                            <img className="md:w-[300px] md:max-h-[auto] max-w-[70px] max-h-[auto]" src="/src/assets/images/vitor.png"/>
                            <p className="text-[14px] md:text-[20px]">Vitor Hugo da Cunha</p>
                        </div>
                        <div className="md:flex flex-col justify-center items-center hidden">
                            <img className="md:w-[300px] md:max-h-[auto] max-w-[70px] max-h-[auto] rounded-[50%]" src="/src/assets/images/gabriel.png"/>
                            <p className="text-[14px] md:text-[20px]">Gabriel Bosco</p>
                        </div>
                    </div>
                    <div className="flex justify-evenly mt-[10px]">
                        <div className="flex flex-col justify-center items-center md:hidden">
                            <img className="max-w-[70px] max-h-[auto]" src="/src/assets/images/vitor.png"/>
                            <p className="text-[14px] md:text-[20px]">Vitor Hugo da Cunha</p>
                        </div>

                        <div className="flex flex-col justify-center items-center md:hidden">
                            <img className="max-w-[70px] max-h-[auto] rounded-[50%]" src="/src/assets/images/gabriel.png"/>
                            <p className="text-[14px] md:text-[20px]">Gabriel Bosco</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>

    );
}

export default CoverPage;