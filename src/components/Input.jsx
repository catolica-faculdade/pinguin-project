import { Link } from "react-router-dom";


function Input({text, image, type, placeholder}){

    return(
        <div className="bg-white rounded-lg border border-gray-400 "> 
            <img src={image} alt={image} />
            <input className={`flex pt-2 pr-4 pb-2 pl-4 rounded-lg color text-black placeholder-black`} placeholder={placeholder} text={text} type={type}/>
        </div>
    );
}

export default Input;