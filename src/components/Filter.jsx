function Filter({categoria, selecionado}){
    if (selecionado){
        return(
            <div className="bg-icon-user rounded-[25px] h-10 w-35 flex justify-center text-center items-center text-white border-filter">
               <p>{categoria}</p>
            </div>
        )
    } else {
        return(
            <div className="bg-white rounded-[25px] h-10 w-35 flex justify-center text-center items-center text-black border-filter">
               <p>{categoria}</p>
            </div>
        )
    }
}

export default Filter;