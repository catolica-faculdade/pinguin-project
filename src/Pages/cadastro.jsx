import Button from "../components/Button.jsx"
import Input from "../components/Input.jsx"



function Cadastro(){

    return (
        <section className="bg-login-pinguin flex h-screen w-screen justify-center items-center font-inter">
            <div className="bg-form-login flex h-160 w-182 rounded-md border-1 stroke-color-pinguin">
                <div className="p-10 flex flex-col items-center text-center w-3/5 gap-6">
                    <div className="h-30 w-full flex items-center justify-center">
                        <h2 className="text-3xl">Insira os dados da sua conta, por favor</h2>
                    </div>
                    <div className="h-100 w-4/5 flex flex-col justify-between">
                        <Input image="src\assets\images\mail-icon.png" placeholder='E-mail' type='text'/>
                        <Input image="src\assets\images\arroba-icon.png" placeholder='Usuário' type='text'/>
                        <Input image="src\assets\images\person-white-icon.png" placeholder='Nome completo' type='text'/>
                        <Input image="src\assets\images\lock-icon.png" placeholder='Senha' type='password'/>
                        <Input image="src\assets\images\lock-icon.png" placeholder='Confirme sua senha' type='password'/>
                    </div>
                    <div className="h-20 flex flex-col gap-3">
                        <div className="flex justify-center">
                            <Button text='Cadastre-se agora!' bgColor='bg-purple-pinguin' color='text-white'/>
                        </div>
                        <p>Ainda não tem conta <a href="/login" className="purple-pinguin underline">Entre aqui!</a></p>
                    </div>
                </div>
                <div className="bg-purple-pinguin p-10 flex flex-col justify-center items-center text-center rounded-tr-md rounded-br-md gap-12 w-2/5">
                    <div className="color-login-pinguin text-3xl">
                        <h1>Cadastre-se e junte-se a nós hoje mesmo!</h1>
                    </div>
                    <div className="w-4/5">
                        <img src="src\assets\images\logo-pinguIn-branca.png" alt="logo da empresa"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cadastro;