function CoverPage(){
    // conversa com a api aqui



    return (
        // retorna no 'html' pela main aqui
        <div>
            <nav id="nav_bar">
                <div>
                    <a href="">Menu</a>
                </div>
                <div>
                    <input id="input_cover_page" placeholder="Pesquisar..." type="text" />
                </div>
                <div>
                    <a class="afastamento_texto">Inicio</a>
                    <a class="afastamento_texto">Notificação</a>
                    <a class="afastamento_texto">Login</a>
                </div>
            </nav>
        </div>
    );
}

export default CoverPage;