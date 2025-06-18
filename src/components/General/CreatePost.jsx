function CreatePost() {
    return (
        <section className="w-screen h-screen bg-exit-pop-up fixed top-0 left-0 flex justify-center items-center">
            <div className="bg-[#E9E9E9] flex flex-col items-center gap-4 rounded-lg">
                <div className="flex justify-center items-center w-[30vw] h-10 bg-[#C795E3] relative rounded-t-lg border-b">
                    <p>Criar publicação</p>
                    <img src="src\assets\images\x-icon.svg" alt="Fechar" className="h-[0.9rem] absolute left-[92%]" />
                </div>
                <textarea className="text-left p-[5px] resize-none bg-white rounded-sm border" rows="6" cols="40"></textarea>
                <p className="bg-[#C795E3] w-full h-10 text-center border-y content-center">Adicione uma imagem</p>
                <input type="image" src="src\assets\images\placeholder-image.png" alt="Inserir imagem" className="bg-[#BDBDBD] w-[]" />
                <button type="submit" className="bg-[#C795E3] w-[50%] border rounded-md h-8">
                    Publicar
                </button>
            </div>
        </section>
    );
}

export default CreatePost;