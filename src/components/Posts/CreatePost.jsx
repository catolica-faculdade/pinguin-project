function CreatePost({onClick}){
    return (
        <section className="w-screen h-screen bg-exit-pop-up fixed top-0 left-0 flex justify-center items-center">
            <form className="bg-[#E9E9E9] flex flex-col items-center gap-4 rounded-lg border md:max-xl:w-[40vw] md:max-lg:w-[50vw] increase-width-md increase-width-sm w-[30vw]">
                <div className="flex justify-center items-center w-full h-10 bg-[#C795E3] relative rounded-t-lg border-b">
                    <p>Criar publicação</p>
                    <img src="assets\images\x-icon.svg" alt="Fechar" className="cursor-pointer h-[0.9rem] absolute left-[92%]" onClick={onClick}/>
                </div>
                <textarea placeholder="Conte alguma coisa..." maxlength="200" className="text-left p-[5px] resize-none bg-white rounded-sm border w-[80%]" rows="6" cols="40" required></textarea>
                <p className="bg-[#C795E3] w-full h-10 text-center border-y content-center">Adicione uma imagem (opcional)</p>
                <label htmlFor="post-image" className="h-min w-[80%] self-center rounded-sm border"><img className="w-full rounded-sm" src="public/assets/images/createPostStandardImage.svg" alt="Selecione uma imagem" /></label>
                <input type="file" name="post-image" id="post-image" accept=".gif,.png,.jpg,.jpeg,.mp4" className="hidden" />
                <button type="submit" className="bg-[#C795E3] w-[50%] border rounded-md h-8 my-5">
                    Publicar
                </button>
            </form>
        </section>
    );
}

export default CreatePost;