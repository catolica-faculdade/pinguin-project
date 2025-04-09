function Login(){
    // conversa com a api aqui

    return (
        // retorna no 'html' pela main aqui
        <section className="zinc-200 flex">
            <div className="neutral-100 flex">
                <div className="">
                    <div>
                        <p>Preencha seus dados, por gentileza</p>
                    </div>
                    <div>
                        <input type="text" value='Email ou nome de usuário'/>
                        <input type="text" value='Insira sua senha'/>
                    </div>
                    <div>
                        <button>Entre agora mesmo!</button>
                    </div>
                </div>
                <div className="bg-purple-700">
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