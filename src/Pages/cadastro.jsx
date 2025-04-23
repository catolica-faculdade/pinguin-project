import Button from "../components/Button.jsx"
import Input from "../components/Input.jsx"
import { Link } from "react-router-dom";


function Cadastro(){
    return (
        <section className="bg-login-pinguin flex flex-col h-screen w-screen md:justify-center items-center font-inter">
            <div className="md:hidden flex justify-center pt-5 h-60 w-full bg-purple-pinguin">
                <img src="src\assets\images\logo-pinguIn-branca.png" className="h-30"/>
            </div>
            <div className="bg-form-login md:flex fixed h-160 md:w-182 w-[92vw] top-1/6 md:rounded-md rounded-xl border-1 stroke-color-pinguin">
                <div className="md:p-10 p-5 flex flex-col items-center text-center md:w-3/5 gap-6">
                    <div className="md:h-30 w-full flex items-center justify-center">
                        <h2 className="text-3xl hidden md:block">Insira os dados da sua conta, por favor</h2>
                        <h2 className="text-3xl block md:hidden">Seja bem-vindo ao PinguIn</h2>
                    </div>
                    <div className="h-100 w-4/5 flex flex-col justify-between">
                        <Input image="src\assets\images\mail-icon.png" placeholder='E-mail' type='text'/>
                        <Input image="src\assets\images\arroba-icon.png" placeholder='Usuário' type='text'/>
                        <Input image="src\assets\images\person-white-icon.png" placeholder='Nome completo' type='text'/>
                        <Input image="src\assets\images\lock-icon.png" placeholder='Senha' type='password'/>
                        <Input image="src\assets\images\lock-icon.png" placeholder='Confirme sua senha' type='password'/>
                    </div>
                    <div className="h-20 md:flex flex-col gap-3 hidden">
                        <div className="flex justify-center">
                            <Button text='Cadastre-se agora!' bgColor='bg-purple-pinguin' color='text-white'/>
                        </div>
                        <p>Ainda não tem conta <a href="/login" className="purple-pinguin underline">Entre aqui!</a></p>
                    </div>
                    <div className="h-20 md:hidden flex-col gap-3 block w-[66vw]">
                        <Button text='Cadastre-se' bgColor='bg-purple-pinguin' color='text-white'/>  
                    </div>
                </div>
                <div className="bg-purple-pinguin md:p-10 md:flex flex-col justify-center items-center text-center rounded-tr-md rounded-br-md gap-12 w-2/5 hidden">
                    <div className="color-login-pinguin text-3xl hidden md:block">
                        <h1>Cadastre-se e junte-se a nós hoje mesmo!</h1>
                    </div>
                    <div className="w-4/5">
                        <img src="src\assets\images\logo-pinguIn-branca.png" alt="logo da empresa"/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-25 md:hidden">
                    <p>Já tem conta?</p>
                    <Link to="login" className="link-purple-pinguin underline font-bold">Entre aqui!</Link>
                </div>
            </div>
        </section>
    );
}

export default Cadastro;