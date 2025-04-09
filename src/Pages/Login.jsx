import Button from "../components/Button.jsx"

function Login(){

    return (
        <section className="bg-zinc-100 flex h-screen w-screen justify-center items-center font-inter">
            <div className="bg-neutral-200 flex">
                <div className="p-10 flex flex-col justify-center items-center text-center">
                    <div>
                        <h2 className="text-3xl">Preencha seus dados, por gentileza</h2>
                    </div>
                    <div className="flex flex-col">
                        <input type="text" value='Email ou nome de usuário'/>
                        <input type="text" value='Insira sua senha'/>
                    </div>
                    <div>
                        <Button text='Entre agora mesmo!' bgColor='bg-purple-pinguin'
                        color='text-white'/>
                        <p>Ainda não tem conta</p>
                        <a href="" className="purple-pinguin underline">Registre-se aqui!</a>
                    </div>
                </div>
                <div className="bg-purple-pinguin p-10 flex flex-col justify-center items-center text-center">
                    <div className="text-white">
                        <h1>Bem-vindo de volta</h1>
                    </div>
                    <div>
                        <img src="src\assets\images\logo-pinguIn-branca.png" alt="logo da empresa" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;