function PostOptionsPopUp({setOpenOptions, openOptions}) {
    function openPopUp(){
        setOpenOptions(!openOptions);
    }
    return (
        <div>
            {openOptions && (
                <div className="bg-navbar w-28 border rounded-md absolute top-8 right-12">
                    <button className="w-full flex justify-between items-center px-1.5 py-1 border-b rounded-t-md">
                        <p>Fixar</p>
                        <img src='assets/images/pin-icon.svg' className="h-[1rem]" />
                    </button>
                    <button className="w-full flex justify-between items-center px-1.5 py-1 border-b">
                        <p>Alterar</p>
                        <img src='assets\images\pencil-empty-icon.svg' className="h-[1rem]" />
                    </button>
                    <button className="text-white w-full flex justify-between bg-modal-red items-center px-1.5 py-1 rounded-b-md">
                        <p>Deletar</p>
                        <img src='assets\images\trash-white-icon.svg' className="h-[1rem]" />
                    </button>
                </div>
            )}
        </div>
            
    );
}

export default PostOptionsPopUp;