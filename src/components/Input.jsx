import { Link } from "react-router-dom";


function Input({text, image, type, placeholder, Imgsize, DivSize}){

    return(
        <div className="bg-white rounded-lg border border-gray-400 flex items-center pl-3 min-w-65"
            style={{ height: `${DivSize}px` }}>
            <div className="bg-purple-pinguin flex items-center justify-center w-9 h-7 rounded-4xl">
                <img src={image} alt={image} className={`h-[${Imgsize}%] w-[70%]`}/>
            </div>
            <input className={`w-[100%] pt-2 pb-2 pl-2 rounded-lg color text-black placeholder-black`} placeholder={placeholder} text={text} type={type}/>
        </div>
    );
}

export default Input;