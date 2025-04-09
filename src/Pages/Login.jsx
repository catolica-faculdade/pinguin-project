function Login(){
    // conversa com a api aqui

    return (
        // retorna no 'html' pela main aqui
        <section className="bg-zinc-100 flex h-screen w-screen justify-center items-center">
            <div className="bg-neutral-200 flex">
                <div className="p-10 flex flex-col justify-center items-center text-center">
                    <div>
                        <p>Preencha seus dados, por gentileza</p>
                    </div>
                    <div>
                        <input type="text" value='Email ou nome de usuário'/>
                        <input type="text" value='Insira sua senha'/>
                    </div>
                    <div>
                        <button>Entre agora mesmo!</button>
                        <p>Ainda não tem conta</p>
                        <a href="">Registre-se aqui!</a>
                    </div>
                </div>
                <div className="bg-purple-700 p-10 flex flex-col justify-center items-center text-center">
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