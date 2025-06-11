import Post from '../../components/Posts/Post';
import { Link } from 'react-router-dom';
import ProfileButton from './ProfileButton';

function ShowProfile({user, posts, onClick}){
    return (
        <div className='w-full md:w-3/5 p-7 flex flex-col gap-6 overflow-y-scroll'>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='pointer-events-none select-none w-18'>
                            <img className='w-full' src='/src/assets/images/profile-picture.svg'></img>
                        </div>
                        <div className='flex flex-col justify-start'>
                            <div className='flex items-center pr-8'>
                                <p>{user.username}</p>
                                <img className='w-8' src='/src/assets/images/streak-0-days.svg'></img>
                                <p className='font-bold'>{user.streak}</p>
                            </div>
                            <p>{user.userFullname}</p>
                        </div>
                    </div>
                    <div className='flex gap-x-4 items-start'>
                        <div>
                            <ProfileButton onClick={onClick}
                                text='Editar Perfil'
                                color='bg-gray-600' />
                        </div>
                        <Link to="/settings" className='w-8 cursor-pointer'>
                            <img src='src/assets/images/configs-icon.svg'></img>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex gap-1'> <p className='font-bold'>{user.postsNumber}</p> <p>Posts</p> </div>
                    <Link to="/followers" className='flex gap-1'> <p className='font-bold'>{user.followers}</p> <p>Followers</p> </Link>
                    <Link to="/following" className='flex gap-1'> <p className='font-bold'>{user.following}</p> <p>Following</p> </Link>
                </div>
                <div>
                    <p>{user.about}</p>
                </div>
            </div>
            {posts.map((post) => (
                <div className='posts flex justify-center'>
                    <Post user={user} content={post} />
                </div>
            ))}
        </div>
    );
}

export default ShowProfile;