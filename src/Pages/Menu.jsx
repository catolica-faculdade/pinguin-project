import Button from '../components/Button';

function Menu(){

    return(
        <div className='flex justify-center gap-20 items-center h-dvh bg-menu-pinguin'>
            <div className='flex flex-col gap-3'>
                <div className='flex flex-col sm:flex-row sm:gap-10 justify-center items-center'>
                    <div className='select-none pointer-events-none'>
                        <img className='w-40 sm:w-50'
                        src='src/assets/images/logo-pinguIn-roxo.png'></img>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='flex font-inter text-3xl sm:text-4xl'>
                            <p>Bem-vindo ao Pingu</p>
                            <p className='purple-pinguin font-bold'>In</p>
                        </div>
                        <div className='flex bg-purple-pinguin w-78 sm:w-96 h-2'></div>
                        <div className='hidden sm:flex flex-col justify-center items-center w-fit text-xl font-inter'>
                            <p>Compartilhe momentos, conheça</p>
                            <p>novas pessoas e faça parte de</p>
                            <p>uma comunidade incrível.</p>
                        </div>
                        <div className='flex sm:hidden flex-col justify-center items-center w-60 text-lg font-inter'>
                            <p>Crie.</p>
                            <p>Compartilhe.</p>
                            <p>Conecte-se.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div>
                        <Button
                        border='border-solid gray-border border-1'
                        bgColor='bg-white'
                        color='text-black'
                        text='Registre-se aqui!'/>
                    </div>
                    <div>
                        <Button
                        bgColor='bg-purple-pinguin'
                        color='text-white'
                        text='Entre agora mesmo!'/>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Menu;