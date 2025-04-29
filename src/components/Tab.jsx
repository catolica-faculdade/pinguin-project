function Tab({text, number}){
    return(
        <div className="flex items-center pl-2 h-14 gap-2 bg-tab rounded-[18px] min-w-60">
            <div>
                <img
                className="w-12"
                src="/src/assets/images/followers-icon.svg"></img>
            </div>
            <div className="flex justify-between w-full pr-4">
                <div className="flex items-center">
                    <p>{text}</p>
                </div>
                <div>
                    <p>{number}</p>
                </div>
            </div>
        </div>
    );
}

export default Tab;