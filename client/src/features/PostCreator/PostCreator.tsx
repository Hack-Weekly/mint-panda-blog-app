import './PostCreator.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function PostCreator() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [tags, setTags] = useState('');
  
  const go = useNavigate();

  function submitPost() {
    //validate input here, return if invalid

    let tagsArray = tags.split(',');

    let postObject = {
      title: title,
      // image: image,
      body: body,
      tags: tagsArray,
    }

    // send object to backend here

    setTitle('');
    setBody('');
    setTags('');

    go('/')
  }

  return (
    <form className="post-creator shadow">
        <h2>New Post</h2>
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder="Title"/>
        <div className="add-image">
          <span>Add an image?</span> 
          <button className="shadow-small">Browse</button>
        </div>
        <textarea onChange={(e) => setBody(e.target.value)} value={body} rows={6} name="body" id="body" placeholder="Body"/>
        <input onChange={(e) => setTags(e.target.value)} value={tags} type="text" name="tags" id="tags" placeholder="Tags, seperated by comma"/>
        <div className="post-creator-footer">
            <button type="button" onClick={submitPost} className="shadow-small">Post</button>
        </div>
    </form>
  )
}
