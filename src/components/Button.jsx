import { Link } from "react-router-dom";


function Button({color}){

    return(
        <Link className={`flex ${color} text-yellow-400`}>
            <p>botao</p>
        </Link>
    );
}

export default Button;