import Button from "../components/Button.jsx"
import Input from "../components/Input.jsx"
import {useState, useEffect} from 'react';


function Login(){
    const [larguraTela, setLarguraTela] = useState(window.innerWidth);


    useEffect(() => {
        const atualizarLargura = () => setLarguraTela(window.innerWidth);

        window.addEventListener('resize', atualizarLargura);
        return () => window.removeEventListener('resize', atualizarLargura);

      }, []);

    if (larguraTela >= 760){
        return (
            <section className="bg-login-pinguin flex h-screen w-screen justify-center items-center font-inter">
                <div className="bg-form-login flex h-120 w-182 rounded-md border-1 stroke-color-pinguin">
                    <div className="p-10 flex flex-col justify-center items-center text-center w-3/5">
                        <div className="h-40 w-full flex items-center justify-center">
                            <h2 className="text-3xl">Preencha seus <br/> dados, por gentileza</h2>
                        </div>
                        <div className="flex-col h-45 w-4/5">
                            <div className="h-1/2">
                                <Input image="src\assets\images\mail-icon.png" placeholder='E-mail' type='text'/>
                            </div>
                            <div>
                            <Input image="src\assets\images\lock-icon.png" placeholder='Senha' type='password'/>
                            </div>
                        </div>
                        <div className="h-35 flex flex-col gap-6">
                            <Button text='Entre agora mesmo!' bgColor='bg-purple-pinguin'
                            color='text-white'/>
                            <p>Ainda não tem conta <br/> <a href="/cadastro" className="purple-pinguin underline">Registre-se aqui!</a></p>
                        </div>
                    </div>
                    <div className="bg-purple-pinguin p-10 flex flex-col justify-center items-center text-center rounded-tr-md rounded-br-md gap-12 w-2/5">
                        <div className="color-login-pinguin text-3xl">
                            <h1>Bem-vindo de volta</h1>
                        </div>
                        <div className="w-4/5">
                            <img src="src\assets\images\logo-pinguIn-branca.png" alt="logo da empresa"/>
                        </div>
                    </div>
                </div>
            </section>
        );
    } else {
        return(
            <section className="w-screen h-screen">
                <div className="h-1/3 bg-purple-pinguin flex justify-center pt-15">
                    <img src="src\assets\images\logo-pinguIn-branca.png" className="h-40"/>
                </div>
                <div className="bg-menu-penguin h-2/3 flex items-end justify-center">
                    <p>ainda nao tem conta?</p>
                </div>
                <div className="absolute w-screen justify-center items-center top-1/2 text-center">
                    <h1>asdm</h1>
                    <p>bem-vindo</p>
                </div>
            </section>
        );
    }
}

export default Login;