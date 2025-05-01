function Streak(){

    const streak = 0;

    return(
        <div className="flex justify-center items-center bg-navbar rounded-[18px] max-w-72 p-2 gap-2
        border-1 border-gray-700 shadow-2xl">
            <div className="flex items-center pt-2 pointer-events-none select-none">
                <img className="w-25" src="/src/assets/images/streak-0-days.svg"></img>
                <p className="text-2xl font-bold">{streak}</p>
            </div>
            <div className="flex flex-col">
                <p>Seu streak é de {streak} dias.</p>
                <div className="flex-1">
                    <p>Crie seu três posts e inicie o streak!
                        <button className="pl-1 underline text-purple-800 font-bold">Criar publicação</button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Streak;