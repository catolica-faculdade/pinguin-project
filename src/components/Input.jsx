import { Link } from "react-router-dom";


function Input({text, image, type, placeholder}){

    return(
        <div className="bg-white rounded-lg border border-gray-400 flex items-center pl-3"
        > 
            <div className="bg-purple-pinguin flex items-center justify-center w-full h-8 rounded-4xl">

                <img src={image} alt={image} className="h-4/7"/>

            </div>

            <input className={`flex pt-2 pr-4 pb-2 rounded-lg color text-black placeholder-black`} placeholder={'  '+placeholder} text={text} type={type}/>

        </div>
    );
}

export default Input;