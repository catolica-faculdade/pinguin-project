import Button from '../components/Button';

function Menu(){

    return(
        <div>
            <div className='sm:flex'>
                <img className='w-40 sm:w-50'
                src='src/assets/images/logo-pinguIn-roxo.png'></img>
                <div className='flex font-inter'>
                    <p>Bem-vindo ao Pingu</p>
                    <p className='purple-pinguin font-bold'>In</p>
                </div>
            </div>
        </div>
    );

}

export default Menu;