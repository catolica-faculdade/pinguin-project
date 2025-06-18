function Input({type, value, width, onChange}){
    const inputClass = `w-full bg-neutral-300 rounded-sm border-1 border-gray-800 pl-0.5`;
    if(type === 'text'){
        return(
            <input value={value} 
            className={inputClass}
            type="text"
            onChange={onChange}></input>
        )
    }

    if(type === 'textarea'){
        return(
            <textarea 
            className={`${inputClass} resize-none`} 
            value={value}
            onChange={onChange}
            ></textarea>
        )
    }
}

export default Input;