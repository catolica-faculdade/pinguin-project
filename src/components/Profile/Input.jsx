function Input({type, value, width}){
    const inputClass = `w-full bg-neutral-300 rounded-sm border-1 border-gray-800 pl-0.5`;
    if(type === 'text'){
        return(
            <input value={value} 
            className={inputClass}
            type="text"></input>
        )
    }

    if(type === 'textarea'){
        return(
            <textarea className="resize-none"></textarea>
        )
    }
}

export default Input;