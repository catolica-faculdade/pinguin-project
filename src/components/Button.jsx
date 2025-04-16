import { Link } from "react-router-dom";


function Button({color, bgColor, text, border, bold}){

    return(
        <Link className={`flex justify-center ${bgColor} ${color} ${border}
        pt-2 pr-4 pb-2 pl-4 rounded-lg `}>
            <p className={`${bold}`}>{text}</p>
        </Link>
    );
}

export default Button;