function Streak(){

    const streak = 0;

    return(
        <div className="flex justify-center items-center bg-navbar rounded-[18px] max-w-75 p-2 gap-2">
            <div className="flex items-center">
                <img className="w-30" src="/src/assets/images/streak-0-days.svg"></img>
                <p className="text-2xl font-bold">{streak}</p>
            </div>
            <div className="flex flex-col">
                <p>Seu streak é de {streak} dias.</p>
                <div className="flex-1">
                    <p>Crie seu três posts e inicie o streak!<button><p>Criar publicação</p></button></p>
                </div>
            </div>
        </div>
    );
}

export default Streak;