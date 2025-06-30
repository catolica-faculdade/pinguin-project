import Post from '../../components/Posts/Post';
import { Link } from 'react-router-dom';
import Input from './Input';
import ProfileButton from './ProfileButton';
import { useState } from 'react';

function EditProfile({posts, onClick, setUsername, setFullName, setAbout}){
    const user = posts[0].user;
    const [inputUsername, setInputUsername] = useState(user.username);
    const [inputFullName, setInputFullName] = useState(user.userFullname);
    const [inputAbout, setInputAbout] = useState(user.about);

    function saveData(){
        setUsername(inputUsername);
        setFullName(inputFullName);
        setAbout(inputAbout);
    }
    return(
        <div className='w-full md:w-3/5 p-7 flex flex-col gap-6 overflow-y-scroll'>
            <div className='flex flex-col gap-3'>
                <div className='flex justify-between'>
                    <div className='flex items-center gap-3'>
                        <div className='pointer-events-none select-none w-18'>
                            <img className='w-full' src='assets/images/profile-picture.svg'></img>
                        </div>
                        <div className='flex flex-col gap-1 justify-start'>
                            <div className='max-w-40'>
                                <Input value={inputUsername || ''}
                                onChange={(event) => setInputUsername(event.target.value)}
                                type='text'/>
                            </div>
                            <div className='max-w-40'>
                                <Input value={inputFullName || ''}
                                onChange={(event) => setInputFullName(event.target.value)}
                                type='text'/>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-x-4 items-start'>
                        <div className='hidden md:block'>
                            <ProfileButton onClick={() => {
                                saveData();
                                onClick();
                            }}
                                text='Salvar'
                                color='bg-gray-600' />
                        </div>
                        <Link to="/settings" className='w-8 cursor-pointer'>
                            <img src='assets/images/configs-icon.svg'></img>
                        </Link>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div className='flex gap-1'> <p className='font-bold'>{user.postsNumber}</p> <p>Posts</p> </div>
                    <Link to="/followers" className='flex gap-1'> <p className='font-bold'>{user.followers}</p> <p>Followers</p> </Link>
                    <Link to="/following" className='flex gap-1'> <p className='font-bold'>{user.following}</p> <p>Following</p> </Link>
                </div>
                <div>
                    <Input type="textarea"
                    value={inputAbout || 'Não há dados.'}
                    onChange={(event) => setInputAbout(event.target.value)}/>
                </div>
                <div className='flex justify-center md:hidden'>
                    <ProfileButton
                    onClick={() => {
                        saveData();
                        onClick;
                    }}
                    text="Salvar"
                    color="bg-gray-600"
                    />
                </div>
            </div>
            {posts.map((post) => (
                <div className='flex justify-center'
                key={post.id}>
                    <Post content={post} />
                </div>
            ))}
        </div>
    );
}

export default EditProfile;