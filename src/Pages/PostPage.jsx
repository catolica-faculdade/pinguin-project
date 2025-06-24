import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import NavBar from '../components/General/NavBar';
import LeftMenu from '../components/General/LeftMenu';
import RightMenu from '../components/General/RightMenu';
import Interactions from "../components/Posts/Interactions";
import OtherPostOptionsPopUp from "../components/Posts/OthersPostOptionsPopUp";
import PostOptionsPopUp from "../components/Posts/PostOptionsPopUp";
import Comment from "../components/Posts/Comment";
import NewComment from "../components/Posts/NewComment";

function PostPage() {
    const [inputValue, setInputValue] = useState("");
    const [username, setUsername] = useState('gfloriano');
    const [fullName, setFullName] = useState('Gustavo Floriano');
    const [openOptionsOther, setOpenOptionsOther] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const [comments, setComments] = useState([])
    const user = {
        username,
        userFullname: fullName,
        about: 'Lorem ipsum...',
        streak: 0,
        postsNumber: 10,
        followers: 19,
        following: 23
    };

    function openPopUp() {
        if (user.username === "gfloriano") {
            setOpenOptions(!openOptions);
        } else {
            setOpenOptionsOther(!openOptionsOther);
        }
    }
    useEffect(() => {
    setComments([
        { id: 1, user, comment: "kkkkkkkkkkkkk" },
        { id: 2, user, comment: "LÁ ELE AAAAAAAHAHAHAHAHAHHAAHHAAAAA" }
    ]);
    }, []);

    const posts = [
        { id: 1, title: 'fui na casa do meu amigo...', image: null, user, comments },
        { id: 2, title: 'gente, olha meu código novo...', image: '/public/posts/novo-codigo.png', user }
    ];

    const { id } = useParams();
    const postId = parseInt(id);
    const selectedPost = posts.find(p => p.id === postId);
    const interactions = { like: '10k', comment: '1.3k' };


    function handleKeyDown(e) {
        if (e.key !== "Enter" || e.shiftKey) return;

        e.preventDefault(); 

        const message = inputValue.trim();
        if (message === "") return;
        const nextId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;

        const newComment = {
            id: nextId,
            user,
            comment: message,
        };

        setComments([...comments, newComment]); 
        setInputValue(""); 

    }


    return (
        <section>
            <NavBar />
            <section className='flex bg-user-icon pt-[8vh] h-dvh'>
                <LeftMenu />
                <div className='w-full md:w-3/5 flex flex-col items-center pt-3 pb-3 overflow-y-scroll'>
                    <div className="bg-navbar max-w-xl w-11/12 flex flex-col gap-3 p-3 pl-6 pr-6 border-1 rounded-t-2xl relative border-b-0">
                        <div className="flex items-center gap-3">
                            <Link to={"/home"}>
                                <img src="/src/assets/images/left-arrow.png" alt="Voltar" className="h-5" />
                            </Link>
                            <h1 className="font-semibold">Home</h1>
                        </div>
                        <div className="flex justify-between">
                            <div className='flex items-center gap-3'>
                                <div className='select-none w-12'>
                                    <Link to={`/${user.username}`}><img className='w-full' src='/src/assets/images/profile-picture.svg' /></Link>
                                </div>
                                <div className='flex flex-col'>
                                    <Link to={`/${user.username}`}><p>@{user.username}</p></Link>
                                    <Link to={`/${user.username}`}>{user.userFullname}</Link>
                                </div>
                            </div>
                            <div className="cursor-pointer">
                                <img src="/src/assets/images/post-options-icon.svg" onClick={openPopUp} />
                            </div>
                        </div>
                        <div className="text">
                            <p>{selectedPost?.title}</p>
                        </div>
                        <div className="content bg-tab w-full h-75 flex justify-center items-center pointer-events-none select-none">
                            {selectedPost?.image
                                ? <img className="h-fit" src={selectedPost.image} />
                                : <img className="h-fit" src="/src/assets/images/placeholder-image.png" />
                            }
                        </div>
                        <PostOptionsPopUp setOpenOptions={setOpenOptions} openOptions={openOptions} />
                        <Interactions interactions={interactions} />
                        <OtherPostOptionsPopUp openOptionsOther={openOptionsOther} setOpenOptionsOther={setOpenOptionsOther} />
                        {comments.map((comment) => (
                            <div key={comment.id} className='flex justify-center'>
                                <Comment content={comment} />
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center max-w-xl w-11/12 '>
                        <NewComment comments={comments} user={user} setComments={setComments} handleKeyDown={handleKeyDown} inputValue={inputValue} setInputValue={setInputValue}/>
                    </div>
                </div>
                <RightMenu />
            </section>
        </section>
    );
}

export default PostPage;
