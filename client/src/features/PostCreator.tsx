export default function PostCreator() {
  return (
    <div className="post-creator">
        <h2>New Post</h2>
        <input type="text" name="title" id="title" placeholder="Title"/>
        <div className="add-image">
          <span>Add an image?</span> 
          <button>Browse</button>
        </div>
        <textarea rows={12} name="body" id="body" placeholder="Body"/>
        <input type="text" name="tags" id="tags" placeholder="Enter tags, seperated by comma" />
        <div className="post-creator-footer">
            <button>Preview</button>
            <button>Post</button>
        </div>
    </div>
  )
}
