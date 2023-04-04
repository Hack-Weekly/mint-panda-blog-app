type Comments = {
    key: string,
    author: string,
    text: string,
    likes: number
}

type PostProps = {
    postData: {
        key: string,
        author: string,
        text: string,
        image: string,
        likes: number, 
        comments: Comments[]
    }
}

export default function Post(props:PostProps) {

    return (
    <div>Post</div>
  )
}