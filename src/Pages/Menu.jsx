import Button from '../components/Button';

function Menu(){

    return(
        <div className='flex justify-center items-center h-dvh bg-menu-pinguin'>
            <div className='flex flex-col sm:flex-row sm:gap-10 justify-center items-center'>
                <div className='select-none pointer-events-none'>
                    <img className='w-40 sm:w-50'
                    src='src/assets/images/logo-pinguIn-roxo.png'></img>
                </div>
                <div className='flex flex-col justify-center items-center gap-2'>
                    <div className='flex font-inter text-4xl'>
                        <p>Bem-vindo ao Pingu</p>
                        <p className='purple-pinguin font-bold'>In</p>
                    </div>
                    <div className='flex bg-purple-pinguin w-76 sm:w-96 h-2'></div>
                </div>
            </div>
        </div>
    );

}

export default Menu;