import Filter from "./Filter";

function Filters(){
    return(
        <div className="flex w-full justify-center gap-2 pt-3">
            <Filter categoria="Tudo" selecionado={true}/>
            <Filter categoria="Curtidas" selecionado={false}/>
            <Filter categoria="Comentários" selecionado={false}/>
            <Filter categoria="Menções" selecionado={false}/>
            <Filter categoria="Seguidores" selecionado={false}/>
        </div>
    )
}

export default Filters;