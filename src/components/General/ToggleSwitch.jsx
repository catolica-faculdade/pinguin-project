function ToggleSwitch({ checked, onToggle, id }) {

    return (
        <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id={`chk-${id}`}
                checked={checked}
                onChange={() => onToggle(id)}
                className="hidden"
            />
            <label
                htmlFor={`chk-${id}`}
                className={`relative w-24 h-12 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-400 ${
                checked ? "bg-[#A162C5]" : "bg-gray-500"
                }`}
            >
                <span
                className={`absolute bg-white rounded-full w-10 h-10 transition-transform duration-200 ${
                    checked ? "translate-x-12" : "translate-x-0"
                }`}
                ></span>
            </label>
        </div>
    );
}


export default ToggleSwitch;
