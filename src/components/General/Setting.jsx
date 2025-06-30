import { Link } from "react-router-dom";
import ToggleSwitch from "./ToggleSwitch";

function Setting({ text, link, toggle, id, checked, onToggle }) {
    return (
        <div className="flex justify-center items-center">
        <div className="flex bg-navbar border-b border-black w-full h-22 items-center p-2 pl-5 pr-5 justify-between">
            <p>{text}</p>
            {toggle ? (
            <ToggleSwitch id={id} checked={checked} onToggle={onToggle} />
            ) : (
            <Link to={link}>
                <img
                src="public/assets/images/right-arrow.png"
                alt={`Enter ${text}`}
                className="w-4 h-6"
                />
            </Link>
            )}
        </div>
        </div>
    );
}

export default Setting;
