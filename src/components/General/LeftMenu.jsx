import Tab from './Tab';
import MyUser from './MyUser';

function LeftMenu({onClick, postPage}){

    const following = 20;
    const followers = 15;
    const username = '@gfloriano';
    const userFullname = 'Gustavo Floriano';


    return(
        <div className='hidden md:flex w-[20%] flex-col gap-3 justify-between items-center pt-4 p-2 border-black border-r'> 
            <div className='flex flex-col items-center gap-3 w-full'>
                <Tab postPage={postPage}
                text="Following"
                number={following}
                path="/following"/>
                <Tab postPage={postPage}
                text="Followers"
                number={followers}
                path="/followers"/>
            </div>
            <MyUser postPage={postPage} 
            onClick={onClick}
            username={username}
            userFullname={userFullname}/>
        </div>
    );
}

export default LeftMenu;