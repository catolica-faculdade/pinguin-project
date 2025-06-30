import { useNavigate } from "react-router-dom";

function TitleBar({text}){

    const navigate = useNavigate()
    return(
        <div className="flex h-21 p-1 bg-navbar justify-between items-center pl-4 pr-4 border-b">
            <img src="assets\images\seta-para-baixo.svg" className="rotate-90 h-1/3 cursor-pointer"
            onClick={() => navigate(-1)}/>
            <h1 className="text-2xl">{text}</h1>
            <p></p>
        </div>
    )
}

export default TitleBar;