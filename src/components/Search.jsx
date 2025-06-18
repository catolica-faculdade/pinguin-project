import React from 'react';

export default function Search({ onClose }) {
  return (
    <div className='flex justify-center top-[100px]'>
        <div className="fixed top-[10%] w-[40%] h-[80%] bg-[#EFECEC] bg-opacity-95 z-[100] items-center justify-center p-8 rounded-[5%]">

      <div className="w-full flex justify-end">
        <button className="text-black text-2xl font-bold" onClick={onClose}>
          ✕
        </button>
      </div>
      <div className="w-full max-w-xl mt-10 pl-[100px]">
        <input type="text" placeholder="Pesquisar..." className="w-full p-2 text-md border border-gray-400 bg-white rounded-[50px] shadow-sm focus:outline-none"/>
      </div>
    </div>
    </div>
  );
}