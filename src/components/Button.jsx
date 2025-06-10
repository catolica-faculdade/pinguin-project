import { Link } from "react-router-dom";


function Button({color, bgColor, text, border, bold, path}){

    return(
        <Link
        to={path} 
        className={`flex justify-center ${bgColor} ${color} ${border}
        pt-3 pr-4 pb-3 pl-4 rounded-lg `}>
            <p className={`${bold}`}>{text}</p>
        </Link>
    );
}

export default Button;