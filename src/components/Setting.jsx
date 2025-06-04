function Settings({text, link, toggle}){
    return(
        <div className="flex justify-center items-center">
            <div className="flex bg-navbar border-b border-black w-full h-22 items-center p-2 pl-5 pr-5 justify-between">
                <p>{text}</p>
                {toggle ? (
                    <input type="checkbox" />
                ) : (
                    <button>
                        <img src="src\assets\images\right-arrow.png" alt={`Enter ${text}`} />
                    </button>
                )}
            </div>
        </div>
    )
    
}

export default Settings;