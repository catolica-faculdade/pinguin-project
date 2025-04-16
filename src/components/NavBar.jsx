import React from 'react';
import '../home.css';

export default function NavBar() {
  return (
    <section className="nav-bar-background">
      <nav className="nav-bar">
        <div className="logo-nav-bar">
          <img src="src/assets/images/logo-pinguin-branco-fundo-cinza.svg" alt="Logo do PinguIn" />
        </div>
        <div className="source-bar">
          <input type="text" id="barra-de-pesquisa" placeholder="Pesquisar..." />
        </div>
        <div className="nav-bar-buttons">
          <a href="/homepage" id="home-button">
            <img src="src/assets/images/home-icon.svg" alt="Início" />
            <p>Início</p>
          </a>
          <a href="#" id="notifications-button">
            <img src="src/assets/images/notifications-icon.svg" alt="Notificações" />
            <p>Notificações</p>
          </a>
          <button id="user-options-button">
            <img className="user-picture" src="src/assets/images/profile-picture.svg" alt="Usuário" />
            <img id="arrow-bottom" src="src/assets/images/seta-para-baixo.svg" alt="Seta para baixo" />
          </button>
        </div>
      </nav>
    </section>
  );
}
