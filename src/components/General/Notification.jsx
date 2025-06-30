function Notification({userImage, nome, tipo, post, data, hora}){
    let src;
    if(tipo == "curtiu"){
        src = "public/assets/images/like-heart-red.svg"
    } 
    if (tipo == "comentou"){
        src = "public/assets/images/message-notification-icon.png";
    } 
    if (tipo == "mencionou"){
        src = "public/assets/images/mention-notification-icon.png"
    }
    return(
        <div className="flex justify-center items-center pt-2">
            <div className="flex bg-navbar border border-black w-[90%] rounded-[10px] h-22 items-center p-2 pl-5 relative">
                <div className="min-w-[5%]">
                    <img src={userImage} alt="user icon" className="min-w-13"/>
                </div>
                {(
                    <div className="absolute top-13 left-15">
                        <img src={src} alt={src} className="h-5 w-5"/>
                    </div>
                )}
                <div className="flex flex-col justify-center pl-5 w-[85%]">
                    <div>
                        {nome}
                    </div>
                    <div>
                        <p>{data} - {hora}</p>
                    </div>
                </div>
                {post && (
                    <div className="">
                        <img src={post} alt="" className="w-19"/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Notification;