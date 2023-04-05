import { Link } from 'react-router-dom'
import { FaHeart, FaCommentAlt } from 'react-icons/fa'

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

    function handleLike() {
        //like if unliked, unlike if liked, update DB object property
    }

    return (
    <div className="post-preview">
        
        <div className="post-preview-header">
            <img className="post-preview-avatar" src={authorAvatar}/>
            <span>{authorName}</span>
            <div><em>{date}</em></div>
        </div>
        
        { image !=="" && <img className="post-preview-image" src={image}/> /* for some reason this is rendering an img element even if image==="" */}
        
        <Link className="post-preview-title" to={`/posts/${key}`}>{title}</Link>
        
        {/* truncates the text if it is longer than PREVIEW_TEXT_LENGTH */}
        <p className="post-preview-text">{text.substring(0, PREVIEW_TEXT_LENGTH)}{text.length > PREVIEW_TEXT_LENGTH && "..."}</p>
        

        <div className="post-preview-footer">
            <div className="counter" onClick={handleLike}><FaHeart /><span>{likes}</span></div>
            <Link to={`/posts/${key}#comments`}>
                <div className="counter"><FaCommentAlt /><span>{comments}</span></div>
            </Link>
        </div>
        
    </div>
  )
}