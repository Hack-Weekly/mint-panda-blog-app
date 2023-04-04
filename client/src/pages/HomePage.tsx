import React from 'react'
import PostPreview from '../components/PostPreview'

function HomePage() {
  return (
    <PostPreview 
      key="a1" 
      authorName="John Smith" 
      authorAvatar="" 
      title="My First Post" 
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat justo, mattis commodo lacus vitae, consectetur ultricies lacus. Suspendisse ullamcorper pharetra aliquet. Pellentesque porttitor condimentum sagittis. Quisque non ex non erat congue tempus eu id eros. Mauris laoreet justo turpis, quis tincidunt arcu aliquet in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vulputate tortor quis justo faucibus, sodales luctus odio porta." 
      image="" 
      likes={12} 
      comments={4} />
  )
}

export default HomePage