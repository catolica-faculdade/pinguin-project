import { Link } from "react-router-dom";

function Tab({text, number, path, postPage}){

    if(postPage){
            return(
            <Link to={path} 
            className="relative flex items-center pl-2 h-14 gap-2 bg-tab rounded-[18px] w-full max-w-60">
                <div>
                    <img
                    className="min-w-6 xmd:w-15"
                    src="../assets/images/followers-icon.svg"></img>
                </div>
                <div className="flex justify-between w-full pr-4">
                    <div className="flex items-center">
                        <p>{text}</p>
                    </div>
                    <div className="hidden xmd:block">
                        <p>{number}</p>
                    </div>
                    <div className="block absolute text-sm text-center xmd:hidden -top-2 -right-1 bg-purple-400 p-0.5 rounded-2xl min-w-6">
                        <p>{number}</p>
                    </div>
                </div>
            </Link>
        );
    }
    return(
        <Link to={path} 
        className="relative flex items-center pl-2 h-14 gap-2 bg-tab rounded-[18px] w-full max-w-60">
            <div>
                <img
                className="min-w-6 xmd:w-15"
                src="assets/images/followers-icon.svg"></img>
            </div>
            <div className="flex justify-between w-full pr-4">
                <div className="flex items-center">
                    <p>{text}</p>
                </div>
                <div className="hidden xmd:block">
                    <p>{number}</p>
                </div>
                <div className="block absolute text-sm text-center xmd:hidden -top-2 -right-1 bg-purple-400 p-0.5 rounded-2xl min-w-6">
                    <p>{number}</p>
                </div>
            </div>
        </Link>
    );
}

export default Tab;