import './PostCreator.css'

export default function PostCreator() {
  return (
    <div className="post-creator shadow">
        <h2>New Post</h2>
        <input type="text" name="title" id="title" placeholder="Title"/>
        <div className="add-image">
          <span>Add an image?</span> 
          <button className="shadow-small">Browse</button>
        </div>
        <textarea rows={6} name="body" id="body" placeholder="Body"/>
        <input type="text" name="tags" id="tags" placeholder="Tags, seperated by comma" />
        <div className="post-creator-footer">
            <button className="shadow-small">Post</button>
        </div>
    </div>
  )
}
