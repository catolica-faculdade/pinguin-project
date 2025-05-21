import React from 'react';
import NavBar from '../components/NavBar';
import NavBarMobile from '../components/NavBarMobile';
import TopNavMobile from '../components/TopNavMobile';

function Home() {
    // conversa com a api aqui

    return (
        // retorna no 'html' pela main aqui
        <section>
            <NavBar />
            <TopNavMobile />
            <section id="principal-general-container">
                <div className="sidebar-features left-features">
                    <div className="first-sidebar-division">
                        <a className="following-followers" href="#">
                            <div>
                                <img className="img-icon-following-followers" src="src/assets/images/followers-icon.svg" alt="Seguindo"/>
                                    <p>Seguindo</p>
                            </div>
                            <p className="number-followers-following">100</p>
                        </a>
                        <a className="following-followers" href="#">
                            <div>
                                <img className="img-icon-following-followers" src="src/assets/images/followers-icon.svg" alt="Seguidores"/>
                                    <p>Seguidores</p>
                            </div>
                            <p className="number-followers-following">200</p>
                        </a>
                    </div>
                    <div className="second-sidebar-division">
                        <div className="this-user-datas">
                            <img className="user-picture" src="src/assets/images/profile-picture.svg" alt="Foto de perfil" />
                            <div>
                                <p>@gfloriano</p>
                                <p>Gustavo Floriano</p>
                            </div>
                        </div>
                        <div id="div-create-post-show-profile">
                            <button>
                                Criar Publicação
                            </button>
                            <a href="./meuPerfil.html">Ver Perfil</a>
                        </div>
                    </div>
                </div>
                <main id="home-main">
                    <div className="post-card">
                        <div className="post-header">
                            <div className="this-user-datas">
                                <img className="user-picture" src="src/assets/images/profile-picture.svg" alt="Foto de perfil" />
                                <div>
                                    <p>@gfloriano</p>
                                    <p>Gustavo Floriano</p>
                                </div>
                            </div>
                            <button>
                                <img src="src/assets/images/post-options-icon.svg" alt="Opções da postagem" />
                            </button>
                        </div>
                        <p>Fui na casa do meu amigo...</p>
                        <button>Ver mais...</button>
                        <br/>
                            <div className="div-post-image">
                                <img src="src/assets/images/20170901casas-bonitas-62.jpg" alt="Imagem publicada" />
                            </div>
                            <div className="post-reactions">
                                <div className="div-post-likes">
                                    <button>
                                        <img src="src/assets/images/like-heart-white.svg" alt="Curtir publicação"/>
                                    </button>
                                    <button>
                                        +10M
                                    </button>
                                </div>
                                <div className="div-post-comments">
                                    <button>
                                        <img src="src/assets/images/post-comment-icon.svg" alt="Curtir publicação"/>
                                    </button>
                                    <button>
                                        +100K
                                    </button>
                                </div>
                            </div>
                    </div>
                </main>
                <div className="sidebar-features right-features">
                    <div className="streak-card">
                        <button className="streak-days-div openStreakPopup">
                            <img src="src/assets/images/streak-0-days.svg" alt="Streak"/>
                                <p>0</p>
                        </button>
                        <div className="streak-description-today">
                            <p>Seu Streak é de
                                <p className="streak-number">0</p> dias. Crie três posts e inicie o Streak!</p><button>Criar
                                    Publicação</button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="streakPopup">
                <div className="popup-content">
                    <span className="closeStreakPopup">&times;</span>
                    <h2>Olá!</h2>
                    <p>Esse é um pop-up com classNamees.</p>
                </div>
            </div>
            <NavBarMobile />

            <script src="../scripts/general.js"></script>
        </section>
    );
};

    export default Home;