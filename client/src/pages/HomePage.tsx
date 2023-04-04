import React from 'react'
import PostPreview from '../components/PostPreview'

const dummyData = [
  {
    key: "a1",
    authorName: "John Smith",
    authorAvatar: "",
    title: "My First Post",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat justo, mattis commodo lacus vitae, consectetur ultricies lacus. Suspendisse ullamcorper pharetra aliquet. Pellentesque porttitor condimentum sagittis. Quisque non ex non erat congue tempus eu id eros. Mauris laoreet justo turpis, quis tincidunt arcu aliquet in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vulputate tortor quis justo faucibus, sodales luctus odio porta.",
    image: "",
    likes: 12,
    comments: 4,
  },
  {
    key: "a2",
    authorName: "Jane Jones",
    authorAvatar: "",
    title: "My New Recipe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat justo, mattis commodo lacus vitae, consectetur ultricies lacus. Suspendisse ullamcorper pharetra aliquet. Pellentesque porttitor condimentum sagittis. Quisque non ex non erat congue tempus eu id eros. Mauris laoreet justo turpis, quis tincidunt arcu aliquet in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vulputate tortor quis justo faucibus, sodales luctus odio porta.",
    image: "",
    likes: 32,
    comments: 11,
  },
  {
    key: "a3",
    authorName: "Mark Rogers",
    authorAvatar: "",
    title: "My Reading List for 2023",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat justo, mattis commodo lacus vitae, consectetur ultricies lacus. Suspendisse ullamcorper pharetra aliquet. Pellentesque porttitor condimentum sagittis. Quisque non ex non erat congue tempus eu id eros. Mauris laoreet justo turpis, quis tincidunt arcu aliquet in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vulputate tortor quis justo faucibus, sodales luctus odio porta.",
    image: "",
    likes: 0,
    comments: 428,
  },
  {
    key: "a4",
    authorName: "Lucy Martin",
    authorAvatar: "",
    title: "My Summer Vacation",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat justo, mattis commodo lacus vitae, consectetur ultricies lacus. Suspendisse ullamcorper pharetra aliquet. Pellentesque porttitor condimentum sagittis. Quisque non ex non erat congue tempus eu id eros. Mauris laoreet justo turpis, quis tincidunt arcu aliquet in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vulputate tortor quis justo faucibus, sodales luctus odio porta.",
    image: "",
    likes: 26,
    comments: 9,
  }
]

const content = dummyData.map((post) => {
  return <PostPreview key={post.key} post={post} />
})

function HomePage() {
  return (
    <>
        {content}
    </>
  )
}

export default HomePage