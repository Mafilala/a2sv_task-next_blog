import { getPostCount, getPost } from "@/lib/posts"

export const getStaticPaths = async () => {
  const len = await getPostCount()
  const paths = []
  for (let i = 0; i < len; i++){
    paths.push({
      params: {
        slug: `post${i}`
      }
    })
  }
  return {
    paths,
    fallback: false
  }
}
export const getStaticProps = async ({params: {slug}}) => {
  const index = parseInt(slug.slice(4))
  console.log(index)
  const post = await getPost(index)
  console.log(post)
  return {
    props: {
      post,
    }
  }
}
const Post = ({post}) => {
  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <date>{post.date}</date>
    </div>
  )
}

export default Post