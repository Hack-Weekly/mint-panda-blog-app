import PostPreview from '../components/PostPreview'
import SearchBar from '../components/SearchBar'

const dummyData = [
  {
    key: "a1",
    authorName: "John Smith",
    authorAvatar: "",
    title: "My First Post",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse erat justo, mattis commodo lacus vitae, consectetur ultricies lacus. Suspendisse ullamcorper pharetra aliquet. Pellentesque porttitor condimentum sagittis. Quisque non ex non erat congue tempus eu id eros. Mauris laoreet justo turpis, quis tincidunt arcu aliquet in. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus vulputate tortor quis justo faucibus, sodales luctus odio porta.",
    image: "",
    date: "Apr 2 2023",
    likes: 12,
    comments: 4,
  },
  {
    key: "a2",
    authorName: "Jane Jones",
    authorAvatar: "",
    title: "My New Recipe",
    text: "Sed sed gravida mauris. Aliquam erat volutpat. Duis fringilla ac lectus vel accumsan. Sed mattis augue justo, et feugiat est sollicitudin et. In at sapien nec risus molestie sollicitudin. Sed suscipit ligula nunc, at semper sapien facilisis nec. Integer odio nunc, sagittis et orci sit amet, lacinia consectetur erat. Curabitur pharetra rhoncus nisi, vitae dignissim lacus faucibus non. Phasellus eleifend metus eu ante lacinia, non dictum ligula elementum. Aliquam varius turpis venenatis, accumsan lacus eu, ultrices eros. Ut vitae libero tortor. Pellentesque ullamcorper diam ut erat eleifend convallis. Pellentesque sed dictum dui.",
    image: "",
    date: "Apr 3 2023",
    likes: 32,
    comments: 11,
  },
  {
    key: "a3",
    authorName: "Mark Rogers",
    authorAvatar: "",
    title: "My Reading List for 2023",
    text: "Ut viverra convallis tellus, non condimentum mi tincidunt at. Curabitur sit amet nulla sit amet tellus fringilla varius. Maecenas porta cursus quam, viverra laoreet magna hendrerit semper. Nam posuere arcu sit amet ligula blandit, at euismod tortor sagittis. Sed sit amet augue massa. Nullam faucibus lacinia ligula. Sed vel interdum tortor, nec volutpat nulla. Donec sit amet lorem euismod, mattis arcu a, convallis neque. Fusce quis semper est, a molestie dolor. Pellentesque et tortor ut lorem suscipit varius eget ornare sapien.",
    image: "",
    date: "Apr 3 2023",
    likes: 0,
    comments: 428,
  },
  {
    key: "a4",
    authorName: "Lucy Martin",
    authorAvatar: "",
    title: "My Summer Vacation",
    text: "Sed eu venenatis ipsum. Phasellus semper viverra porta. Nunc vel mattis massa. Phasellus dictum risus ut volutpat pretium. In vitae arcu in odio hendrerit auctor. Suspendisse non molestie ex, a placerat turpis. Integer dictum neque mi, ut scelerisque leo efficitur ac. Ut dictum fermentum erat at iaculis.",
    image: "",
    date: "Apr 4 2023",
    likes: 26,
    comments: 9,
  }
]

const content = dummyData.map((post) => {
  return <PostPreview key={post.key} post={post} />
})

export default function HomePage() {
  return (
    <>
        <SearchBar />
        {content}
    </>
  )
}