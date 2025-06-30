import Button from "../components/General/Button.jsx"
import Input from "../components/General/Input.jsx"
import { Link } from "react-router-dom";


function Login(){
    return (
        <section className="bg-login-pinguin flex flex-col md:flex-row gap-5 h-dvh w-screen md:justify-center items-center font-inter">
            <head>
                <title>Login</title>
            </head>
            <div className="md:hidden flex justify-center pt-5 h-60 w-full bg-purple-pinguin">
                <img src="assets\images\logo-pinguIn-branca.png" className="h-30"/>
            </div>
            <div className="bg-form-login md:flex md:relative fixed md:h-160 h-[50vh] md:w-182 w-90 md:max-w-[80vw] top-1/6 md:top-0 md:rounded-md rounded-xl border-1 stroke-color-pinguin shadow-2xl">
                <div className="md:p-10 p-5 flex flex-col items-center text-center md:w-3/5 gap-6">
                    <div className="md:h-30 w-full flex items-center justify-center md:items-end">
                        <h2 className="text-3xl hidden md:block">Preencha seus dados, por gentileza</h2>
                        <div className='flex font-inter text-3xl flex-col md:hidden'>
                            <div>
                                <p>Bem-vindo de volta ao</p>
                            </div>
                            <div className="flex w-full justify-center">
                               <p>Pingu</p><p className='purple-pinguin font-bold'>In</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-50 w-4/5 flex flex-col justify-evenly items-center">
                        <Input image="assets\images\person-white-icon.png" placeholder='Email ou nome de usuário' type='text' DivSize={60} Imgsize={30}/>
                        <Input image="assets\images\lock-icon.png" placeholder='Senha' type='password'  DivSize={60} Imgsize={400}/>
                    </div>
                    <div className="md:flex flex-col gap-10 hidden">
                        <div className="flex justify-center">
                            <Button text='Entre agora mesmo!' bgColor='bg-purple-pinguin' color='text-white' path='/home'/>
                        </div>
                        <div>
                            <p className="font-bold">Ainda não tem conta?</p>
                            <a href="/pinguin-project/register" className="purple-pinguin underline">Registre-se aqui!</a>
                        </div>
                    </div>
                    <div className="h-15 md:hidden gap-3 block w-[70%]">
                        <Button text='Entre agora mesmo!' bgColor='bg-purple-pinguin' color='text-white'/>  
                    </div>
                </div>
                <div className="bg-purple-pinguin md:p-10 md:flex flex-col justify-center items-center text-center rounded-tr-md rounded-br-md gap-12 w-2/5 hidden">
                    <div className="color-login-pinguin text-3xl hidden md:block">
                        <h1>Bem-vindo de volta!</h1>
                    </div>
                    <div className="w-4/5">
                        <img src="assets\images\logo-pinguIn-branca.png" alt="logo da empresa"/>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center h-40 md:hidden">
                    <p className="block md:hidden">Não tem conta?</p>
                    <Link to="/pinguin-project/register" className="link-purple-pinguin underline font-bold mblock md:hidden">Crie aqui!</Link>
                </div>
            </div>
        </section>
    );
}

export default Login;