import { Link } from 'react-router-dom'
import { FaRegHeart, FaHeart, FaRegCommentAlt } from 'react-icons/fa'
import './PostPreview.css'
import { useState } from 'react';

type PostPreviewProps = {
    post: {
        key: string,
        authorName: string,
        authorAvatar: string,
        title: string,
        text: string,
        image: string,
        date: string,
        likes: number,
        comments: number,
    }
}

export default function PostPreview(props:PostPreviewProps) {
    const { key, authorName, authorAvatar, title, text, image, date, likes, comments } = props.post;
    const PREVIEW_TEXT_LENGTH = 400;
    const [isLiked, setIsLiked] = useState(false);

    function handleLike() {
        //like if unliked, unlike if liked, update DB object property
    }

    return (
    <div className="post-preview shadow">

        <div className="post-preview-header">
            <div className="post-preview-user shadow-small">
                <img className="post-preview-avatar" src={authorAvatar}/>
                <span>{authorName}</span>
            </div>
            <div><em>{date}</em></div>
        </div>
        
        { image !=="" && <img className="post-preview-image" src={image}/> /* for some reason this is rendering an img element even if image==="" */}
        
        <Link className="post-preview-title" to={`/posts/${key}`}>{title}</Link>
        
        {/* truncates the text if it is longer than PREVIEW_TEXT_LENGTH */}
        <p className="post-preview-text shadow-small">{text.substring(0, PREVIEW_TEXT_LENGTH)}{text.length > PREVIEW_TEXT_LENGTH && "..."}</p>
        

        <div className="post-preview-footer">
            <div className="counter" onClick={() => setIsLiked(!isLiked)}>
                {isLiked ? <FaHeart style={{color: "#ff6b6b"}}/> : <FaRegHeart />}
                <span>
                    {isLiked ? likes + 1 : likes}
                </span>
            </div>
            <Link to={`/posts/${key}#comments`}>
                <div className="counter"><FaRegCommentAlt /><span>{comments}</span></div>
            </Link>
        </div>
        
    </div>
  )
}