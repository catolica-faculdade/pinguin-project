import NavBar from '../components/General/NavBar';
import Search from '../components/Search';
import NavBarMobile from '../components/Mobile/NavBarMobile';

function CoverPage(){
    

    return (
            
            <div>
                <NavBar/>
                <Search/>
                    <div className="bg-[url('assets/images/background.png')] bg-cover h-[150px] w-[auto] md:bg-cover md:h-[380px] md:w-[auto] bg-center h-64 w-full w "></div>
                    <div className="md:m-[40px] mt-[20px] flex items-center">
                        <img className="pl-[40px] pt-[10px] w-auto h-[70px] md:w-auto md:h-[150px]" src="assets/images/logo-pinguIn-roxo.png"/>
                        <p className="pl-5 text-[17px] md:text-[40px]">Saiba mais sobre o</p>
                        <div className="flex text-[17px] md:text-[40px]">
                            <p className="pl-[7px]">Pingu</p>
                            <p className="text-[#854DA6] font-bold">In</p>
                        </div>
                    </div>
                    <div className="m-[30px] md:m-[50px]">
                        <div>
                            <p className="pl-[40px] pt-[10px] text-[20px] font-bold md:text-[30px] md:font-bold">Sobre o projeto</p>
                            <br/>
                            <div className="p-[40px] md:text-[16px] text-[20px]">
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
                </div>
                    <br />
                    <br />
                  <p className="text-[20px] pl-[40px] md:text-[30px] font-bold">Nosso time de desenvolvedores</p>
                    <br />
                    <div className="flex flex-col lg:flex-row items-center gap-y-8 lg:justify-center">  
                        <div className="grid grid-cols-3 md:grid-cols-3 gap-y-6 md:gap-x-8 lg:pr-[20px]">
                            <div className="flex flex-col items-center">
                            <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] m-[40px] rounded-full object-cover" src="assets/images/gabriel.png" />
                            <p className="text-[14px] md:text-[16px] mt-2 text-center">Gabriel Bosco</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] m-[40px]  rounded-full object-cover" src="assets/images/gustavo.png" />
                            <p className="text-[14px] md:text-[16px] mt-2 text-center">Gustavo Floriano</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] m-[40px] rounded-full object-cover" src="assets/images/johann.png" />
                            <p className="text-[14px] md:text-[16px] mt-2 text-center">Johann Ruth</p>
                            </div>
                        </div>
                        <div className="flex flex-col-2 md:flex-row justify-center gap-8 lg:pl-[20px]">
                            <div className="flex flex-col items-center">
                            <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] m-[40px] rounded-full object-cover" src="assets/images/joao.png" />
                            <p className="text-[14px] md:text-[16px] mt-2 text-center">João Constantino</p>
                            </div>
                            <div className="flex flex-col items-center">
                            <img className="w-[80px] h-[80px] md:w-[150px] md:h-[150px] m-[40px] rounded-full object-cover" src="assets/images/vitor.png" />
                            <p className="text-[14px] md:text-[16px] mt-2 text-center">Vitor Hugo da Cunha</p>
                            </div>
                        </div>
                    </div>

                </div>
                <NavBarMobile/>
            </div>


    );
}

export default CoverPage;