import Streak from './Streak';

function RightMenu({onClick}){

    return(
        <div className='hidden md:flex w-[20%] flex-col gap-3 justify-between items-center pt-4 p-2 border-black border-l'>
            <div>
                <Streak onClick={onClick}/>
            </div>
        </div>
    );
}

export default RightMenu;