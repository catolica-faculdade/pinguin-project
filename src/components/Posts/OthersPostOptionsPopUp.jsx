function OthersPostOptionsPopUp({openOptionsOther, setOpenOptionsOther}) {
     function openPopUp(){
        setOpenOptionsOther(!openOptionsOther);
    }
    return (
        <div>
            {openOptionsOther && (
                <div className="bg-navbar w-28 border rounded-md absolute top-8 right-12">
                    <button className="bg-purple-create-post w-full flex justify-center items-center px-1.5 py-1 border-b rounded-t-md">
                        <p>Seguir</p>
                    </button>
                    <button className="bg-sensitive-content w-full flex justify-center items-center px-1.5 py-1 rounded-b-md">
                        <p>C. Sensível</p>
                    </button>
                </div>
            )}
        </div>
    );
}

export default OthersPostOptionsPopUp;