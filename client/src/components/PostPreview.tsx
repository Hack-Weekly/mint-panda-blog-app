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
    const { authorName, authorAvatar, title, text, image, date, likes, comments } = props.post;
    const PREVIEW_TEXT_LENGTH = 400;

    return (
    <div className="post-preview">
        
        <div className="post-preview-header">
            <img className="post-preview-avatar" src={authorAvatar}/>
            <span>{authorName}</span>
            <div><em>{date}</em></div>
        </div>
        
        { image !=="" && <img className="post-preview-image" src={image}/> /* for some reason this is rendering an img element even if image==="" */}
        
        <div className="post-preview-title">{title}</div>
        
        {/* truncate the text if it is longer than PREVIEW_TEXT_LENGTH */}
        <div className="post-preview-text">{text.substring(0, PREVIEW_TEXT_LENGTH)}{text.length > PREVIEW_TEXT_LENGTH && "..."}</div>
        

        <div className="post-preview-footer">
            <span>Likes: {likes}</span>
            <span>Comments: {comments}</span>
        </div>
        
    </div>
  )
}