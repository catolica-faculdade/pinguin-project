import Streak from './Streak';

function RightMenu(){

    return(
        <div className='flex flex-col gap-3 justify-between items-center pt-4 p-2 border-black border-l'>
            <div>
                <Streak/>
            </div>
        </div>
    );
}

export default RightMenu;