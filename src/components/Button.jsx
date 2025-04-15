import { Link } from "react-router-dom";


function Button({color, bgColor, text, border}){

    return(
        <Link className={`flex ${bgColor} ${color} ${border}
        pt-2 pr-4 pb-2 pl-4 rounded-lg `}>
            <p>{text}</p>
        </Link>
    );
}

export default Button;