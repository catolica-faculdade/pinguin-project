import Tab from './Tab';
import MyUser from './MyUser';

function LeftMenu(){

    const following = 20;
    const followers = 15;
    const username = '@gfloriano';
    const userFullname = 'Gustavo Floriano';


    return(
        <div className='w-[20%] flex flex-col gap-3 justify-between items-center pt-4 p-2 border-black border-r'> 
            <div className='flex flex-col items-center gap-3 w-full'>
                <Tab 
                text="Following"
                number={following}/>
                <Tab 
                text="Followers"
                number={followers}/>
            </div>
            <MyUser
            username={username}
            userFullname={userFullname}/>
        </div>
    );
}

export default LeftMenu;