type PostPreviewProps = {
        key: string,
        authorName: string,
        authorAvatar: string,
        title: string,
        text: string,
        image: string,
        likes: number,
        comments: number,
}

export default function PostPreview(props:PostPreviewProps) {
    const { authorName, authorAvatar, title, text, image, likes, comments } = props;

    return (
    <div className="post-preview">
        <div className="post-preview-header">
            <img src={authorAvatar}/>
            <span>{authorName}</span>
        </div>
        { image && <img className="post-preview-image" src={image}/>}
        <div className="post-preview-title">{title}</div>
        <div className="post-preview-text">{text}</div>
        <div className="post-preview-footer">
            <span>Likes: {likes}</span>
            <span>Comments: {comments}</span>
        </div>
    </div>
  )
}