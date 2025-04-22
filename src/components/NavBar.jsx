import React from 'react';
import '../home.css';

export default function NavBar() {
  return (
    <nav className="flex justify-between bg-navbar p-1 items-center fixed w-full border-b">
      <div className="pl-[10px]">
          <div className="w-[42px] h-[42px] bg-cube-gray-navbar rounded-[100px] p-[4px]">
              <img src='src/assets/images/logo-pinguIn-branca.png'/>
          </div>
      </div>
      <div className="pl-[15vh]">
          <input className="bg-input-navbar rounded-[4px] pl-[10px] w-[40vh] h-[28px] color-text-search-bar outline-0"
          placeholder="Pesquisar..." type="text" />
      </div>
      <div className="flex pr-[30px] items-center">
          <div className="flex flex-col items-center">
              <img className="w-[25px] pt-[4px]" src='src/assets/images/house-icon.png'/>
              <a className="text-[15px]">Inicio</a>
          </div>
          <div className="flex flex-col items-center pl-[30px]">
              <img className="w-[25px]" src='src/assets/images/notifications-icon.png'/>
              <a className="text-[15px]">Notificação</a>
          </div>
          <div className="flex items-center pl-[20px]">
              <div className="rounded-[50%] p-[2px] items-center">
                  <img className="w-[35px] min-w-[35px]" src='src/assets/images/profile-picture.svg'/>
              </div>
              <div>
                  <img className="pl-[10px]" src='src/assets/images/down-arrow-icon.png'/>
              </div>
          </div>
      </div>
  </nav>
  );
}
