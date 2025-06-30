import Button from '../components/General/Button.jsx';

function Menu(){

    return(
        <div className='flex justify-center gap-20 items-center h-dvh bg-menu-pinguin'>
            <div className='flex flex-col flex-grow h-full'>
                <div className='flex flex-col flex-grow sm:gap-15 gap-2 justify-center items-center'>
                    <div className='flex flex-col sm:flex-row md:gap-25 sm:gap-10 justify-center items-center'>
                        <div className='select-none pointer-events-none'>
                            <img className='w-40 sm:w-50 sm:min-w-40'
                            src='assets/images/logo-pinguIn-roxo.png'></img>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-2'>
                            <div className='flex font-inter text-3xl sm:text-4xl'>
                                <p>Bem-vindo ao Pingu</p>
                                <p className='purple-pinguin font-bold'>In</p>
                            </div>
                            <div className='flex bg-purple-pinguin w-78 sm:w-105 h-2'></div>
                            <div className='hidden sm:flex flex-col justify-center items-center w-fit text-xl font-inter font-light'>
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
                    <div className='flex flex-col sm:flex-row sm:justify-around justify-center items-center gap-2 sm:gap-30 max-w-180'>
                        <div className='w-46'>
                            <Button
                            path="register"
                            border='border-solid gray-border border-1'
                            bold='font-semibold'
                            bgColor='bg-white'
                            color='text-black'
                            text='Registre-se aqui!'/>
                        </div>
                        <div className='w-46'>
                            <Button
                            path="login"
                            bgColor='bg-purple-pinguin'
                            color='text-white'
                            text='Entre agora mesmo!'/>
                        </div>
                    </div>
                </div>
                <div className="w-full h-32 bg-[url('assets/images/mountains.png')] bg-no-repeat bg-top bg-cover lg:hidden"></div>
                <div className="w-full h-32 bg-[url('assets/images/mountains.png')] bg-no-repeat bg-top bg-[length:100%_260px] hidden lg:block"></div>
            </div>
        </div>
    );

}

export default Menu;